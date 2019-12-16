(function() {
  
  
  
  // ServiceWorker is a progressive technology. Ignore unsupported browsers
  if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('sw.js').then(function() {
      console.log('CLIENT: service worker registration complete.');
      console.log(window.location.search.substr(1));
    }, function() {
      console.log('CLIENT: service worker registration failure.');
    });
  } else {
    console.log('CLIENT: service worker is not supported.');
  }

})();
