// content_script.js

// This script runs in the context of the web page.
// It checks if the page content is JSON and sends it to the popup if requested.

// Function to check if the content is JSON
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

// Function to get JSON from the page
function getJsonFromPage() {
  const bodyText = document.body.innerText;
  const preElement = document.querySelector('pre');
  const content = preElement ? preElement.innerText : bodyText;
  
  if (isJsonString(content)) {
    return { jsonText: content, url: window.location.href };
  }
  return null;
}

// Check if the page contains JSON and inject download button
function checkAndInjectButton() {
  // Check if button already exists
  if (document.getElementById('json-downloader-button')) {
    return;
  }

  const jsonData = getJsonFromPage();
  if (jsonData) {
    injectDownloadButton();
  }
}

// Inject a floating download button
function injectDownloadButton() {
  const button = document.createElement('button');
  button.id = 'json-downloader-button';
  button.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Download JSON
  `;
  
  // Styles for the button
  button.style.cssText = `
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 999999;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    background: #1a73e8;
    color: white;
    border: none;
    border-radius: 6px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.2s ease;
  `;

  // Hover effect
  button.addEventListener('mouseenter', () => {
    button.style.background = '#1557b0';
    button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.background = '#1a73e8';
    button.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)';
  });

  // Click handler
  button.addEventListener('click', () => {
    const jsonData = getJsonFromPage();
    if (jsonData) {
      chrome.runtime.sendMessage({
        action: 'download',
        jsonText: jsonData.jsonText,
        url: jsonData.url
      }, (response) => {
        if (response && response.success) {
          // Visual feedback for success
          button.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Downloaded
          `;
          button.style.background = '#1e8e3e';
        } else {
          // Visual feedback for error
          button.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            Failed
          `;
          button.style.background = '#d93025';
        }
        
        setTimeout(() => {
          button.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download JSON
          `;
          button.style.background = '#1a73e8';
        }, 2000);
      });
    }
  });

  document.body.appendChild(button);
}

// Run when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkAndInjectButton);
} else {
  checkAndInjectButton();
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getJsonFromPage') {
    const jsonData = getJsonFromPage();
    if (jsonData) {
      sendResponse(jsonData);
    } else {
      sendResponse({ error: 'No valid JSON found on this page.' });
    }
  }
  return true; // To allow asynchronous sendResponse
});
