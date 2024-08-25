document.getElementById('reload10').addEventListener('click', function() {
    setReloadInterval(10);
  });
  
  document.getElementById('reload20').addEventListener('click', function() {
    setReloadInterval(20);
  });
  
  document.getElementById('reload30').addEventListener('click', function() {
    setReloadInterval(30);
  });
  
  document.getElementById('reload60').addEventListener('click', function() {
    setReloadInterval(60);
  });

  document.getElementById('clearInterval').addEventListener('click', function() {
    clearReloadInterval();
  });
  
  function setReloadInterval(seconds) {
    chrome.runtime.sendMessage({ action: 'setInterval', interval: seconds });
  }
  
  function clearReloadInterval() {
    chrome.runtime.sendMessage({ action: 'clearInterval' });
  }