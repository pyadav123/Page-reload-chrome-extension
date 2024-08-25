let reloadInterval = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'setInterval') {
    if (reloadInterval) {
      clearInterval(reloadInterval);
    }
    reloadInterval = setInterval(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.reload(tabs[0].id);
      });
    }, request.interval * 1000);
  } else if (request.action === 'clearInterval') {
    if (reloadInterval) {
      clearInterval(reloadInterval);
      reloadInterval = null;
    }
  }
});
