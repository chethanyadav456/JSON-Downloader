// popup.js

document.getElementById('downloadFromPage').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || tabs.length === 0) {
      showError('No active tab found.');
      return;
    }
    
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getJsonFromPage' }, (response) => {
      if (chrome.runtime.lastError) {
        showError('Could not communicate with the content script. Try refreshing the page.');
        console.error('Content script error:', chrome.runtime.lastError);
        return;
      }
      if (response && response.jsonText) {
        chrome.runtime.sendMessage({
          action: 'download',
          jsonText: response.jsonText,
          url: response.url
        }, (downloadResponse) => {
          if (downloadResponse && downloadResponse.success) {
            showSuccess('JSON downloaded successfully!');
            setTimeout(hideError, 2000);
          } else {
            showError(downloadResponse?.error || 'Download failed');
          }
        });
      } else {
        showError(response?.error || 'No JSON found on the page.');
      }
    });
  });
});

document.getElementById('fetchAndDownload').addEventListener('click', () => {
  const url = document.getElementById('jsonUrl').value.trim();
  if (!url) {
    showError('Please enter a URL.');
    return;
  }

  showError('Fetching JSON...');

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      // Validate it's JSON
      try {
        JSON.parse(text);
      } catch (e) {
        throw new Error('Response is not valid JSON.');
      }
      
      chrome.runtime.sendMessage({
        action: 'download',
        jsonText: text,
        url: url
      }, (downloadResponse) => {
        if (downloadResponse && downloadResponse.success) {
          showSuccess('JSON downloaded successfully!');
          setTimeout(hideError, 2000);
        } else {
          showError(downloadResponse?.error || 'Download failed');
        }
      });
    })
    .catch(error => {
      showError(error.message);
    });
});

function showError(message) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
  errorDiv.style.backgroundColor = '#fce8e6';
  errorDiv.style.color = '#d93025';
}

function showSuccess(message) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
  errorDiv.style.backgroundColor = '#e6f4ea';
  errorDiv.style.color = '#137333';
}

function hideError() {
    const errorDiv = document.getElementById('error');
    errorDiv.style.display = 'none';
}
