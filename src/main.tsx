import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      console.log('Unregistering old service worker:', registration);
      registration.unregister();
    });
  });
  
  if ('caches' in window) {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        console.log('Deleting cache:', cacheName);
        caches.delete(cacheName);
      });
    });
  }
}

const APP_VERSION = '2.1.0';
const storedVersion = localStorage.getItem('app-version');

// URL Timestamp Bypass - para casos extremos
const urlParams = new URLSearchParams(window.location.search);
const forceRefresh = urlParams.get('force') || urlParams.get('v');

if (forceRefresh) {
  console.log('🔄 Force refresh detectado via URL:', forceRefresh);
  localStorage.clear();
  sessionStorage.clear();
  // Remover parâmetros da URL e recarregar
  const cleanUrl = window.location.pathname;
  window.history.replaceState({}, '', cleanUrl);
}

if (storedVersion && storedVersion !== APP_VERSION) {
  console.log('App version changed, clearing storage and reloading...');
  localStorage.clear();
  sessionStorage.clear();
  
  // Se ainda não funcionou, usar timestamp bypass
  if (!window.location.search.includes('v=')) {
    window.location.href = window.location.href + '?v=' + APP_VERSION + '-' + Date.now();
  } else {
    window.location.reload();
  }
} else if (!storedVersion) {
  localStorage.setItem('app-version', APP_VERSION);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
