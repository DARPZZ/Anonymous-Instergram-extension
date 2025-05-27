const action = chrome.action || chrome.browserAction;

action.onClicked.addListener(() => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "run" });
  });
});
