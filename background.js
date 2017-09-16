chrome.contextMenus.create({
    title: "Scrape Page"
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (tab) {
        chrome.tabs.sendMessage(tab.id, { args: "start" })
    }
});
