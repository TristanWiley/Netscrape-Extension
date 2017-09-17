// Create a new context menu for the web scraper.
chrome.contextMenus.create({
  title: 'Scrape Page with Netscrape',
});

// Add a listener for context menu and broadcast as an init message.
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (tab) chrome.tabs.sendMessage(tab.id, { args: 'init', })
})
