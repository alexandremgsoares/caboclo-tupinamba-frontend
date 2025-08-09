// Service Worker "Matador" - Remove cache antigo e se auto-destrói
console.log('🔥 Service Worker Matador ativado - removendo cache antigo...');

self.addEventListener('install', (event) => {
  console.log('⚡ SW Matador: Instalando e pulando espera...');
  self.skipWaiting(); // Força ativação imediata sem esperar
});

self.addEventListener('activate', (event) => {
  console.log('💀 SW Matador: Ativado! Iniciando destruição de cache...');
  
  event.waitUntil(
    (async () => {
      try {
        // 1. Limpar TODOS os caches
        console.log('🗑️ Limpando todos os caches...');
        const cacheNames = await caches.keys();
        console.log('Caches encontrados:', cacheNames);
        
        await Promise.all(
          cacheNames.map(async (cacheName) => {
            console.log(`Deletando cache: ${cacheName}`);
            return caches.delete(cacheName);
          })
        );
        
        // 2. Tomar controle imediato de todos os clientes
        console.log('👑 Assumindo controle de todos os clientes...');
        await self.clients.claim();
        
        // 3. Forçar reload de todas as abas abertas
        console.log('🔄 Forçando reload de todas as abas...');
        const clients = await self.clients.matchAll({
          includeUncontrolled: true
        });
        
        clients.forEach((client) => {
          console.log('Enviando comando de reload para:', client.url);
          client.postMessage({
            type: 'FORCE_RELOAD',
            message: 'Cache limpo, recarregando página...'
          });
        });
        
        // 4. Se auto-destruir após um tempo
        setTimeout(async () => {
          console.log('💥 SW Matador: Missão cumprida! Se auto-destruindo...');
          try {
            await self.registration.unregister();
            console.log('✅ SW Matador removido com sucesso');
          } catch (error) {
            console.error('❌ Erro ao se auto-destruir:', error);
          }
        }, 2000);
        
      } catch (error) {
        console.error('💥 Erro durante limpeza do SW Matador:', error);
      }
    })()
  );
});

// Interceptar TODAS as requisições para garantir que não há cache
self.addEventListener('fetch', (event) => {
  console.log('🌐 SW Matador interceptando:', event.request.url);
  
  // Para requests de navegação (HTML), sempre buscar da rede
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, {
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      }).catch(() => {
        // Se falhar, tentar pelo menos carregar algo
        return new Response('Cache limpo! Recarregue a página.', {
          headers: { 'Content-Type': 'text/html' }
        });
      })
    );
    return;
  }
  
  // Para outros recursos, buscar sempre da rede
  event.respondWith(
    fetch(event.request, { cache: 'no-cache' })
      .catch(() => {
        // Se falhar, deixar passar
        return fetch(event.request);
      })
  );
});

// Escutar mensagens dos clientes
self.addEventListener('message', (event) => {
  console.log('📨 SW Matador recebeu mensagem:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⏭️ Comando SKIP_WAITING recebido');
    self.skipWaiting();
  }
});