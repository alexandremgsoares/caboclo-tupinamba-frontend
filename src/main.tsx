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

const APP_VERSION = '2.0.0';
const storedVersion = localStorage.getItem('app-version');

if (storedVersion && storedVersion !== APP_VERSION) {
  console.log('App version changed, clearing storage and reloading...');
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
} else if (!storedVersion) {
  localStorage.setItem('app-version', APP_VERSION);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
