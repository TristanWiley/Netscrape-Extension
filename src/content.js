import Inspector from './inspector'

const inspector = new Inspector()

// Wait for listener from context menu
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.args === "init") inspector.init()
})
