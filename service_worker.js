// service_worker.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'download') {
    const { jsonText, url } = request;
    try {
      // Validate JSON
      JSON.parse(jsonText);
      downloadJson(jsonText, url, sendResponse);
    } catch (error) {
      console.error('Invalid JSON:', error);
      sendResponse({ success: false, error: 'Invalid JSON' });
    }
  }
  return true; // Indicates that the response is sent asynchronously
});

function downloadJson(jsonText, url, sendResponse) {
  // Format JSON with proper indentation
  let formattedJson;
  try {
    const parsed = JSON.parse(jsonText);
    formattedJson = JSON.stringify(parsed, null, 2);
  } catch (e) {
    formattedJson = jsonText;
  }

  // Convert to data URL instead of blob URL (more reliable in Manifest V3)
  const base64 = btoa(unescape(encodeURIComponent(formattedJson)));
  const dataUrl = `data:application/json;base64,${base64}`;
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  let hostname = 'unknown';
  try {
    hostname = new URL(url).hostname.replace(/\./g, '_');
  } catch (e) {
    // ignore invalid url
  }

  const filename = `json-download_${hostname}_${timestamp}.json`;

  console.log('Starting download:', filename);

  chrome.downloads.download({
    url: dataUrl,
    filename: filename,
    saveAs: true
  }, (downloadId) => {
    if (chrome.runtime.lastError) {
      console.error('Download failed:', chrome.runtime.lastError);
      if (sendResponse) {
        sendResponse({ success: false, error: chrome.runtime.lastError.message });
      }
    } else {
      console.log('Download started with ID:', downloadId);
      if (sendResponse) {
        sendResponse({ success: true, downloadId: downloadId });
      }
    }
  });
}
