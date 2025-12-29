# Privacy Policy for JSON Downloader

**Last Updated:** December 29, 2025

## Overview

JSON Downloader is committed to protecting your privacy. This extension operates entirely locally on your device and does not collect, store, or transmit any personal data.

## Data Collection

**We do NOT collect any data.** Specifically:

- ✅ No personal information is collected
- ✅ No browsing history is tracked
- ✅ No analytics or telemetry
- ✅ No cookies or tracking mechanisms
- ✅ No data is sent to any external servers
- ✅ No user profiling or advertising

## How the Extension Works

1. **Content Script**: Runs on web pages to detect JSON content. All processing happens locally in your browser.
2. **Service Worker**: Handles the download functionality using Chrome's built-in download API.
3. **Popup**: Provides a user interface for manual JSON URL fetching.

All operations are performed locally on your device. The extension only accesses:
- The content of the current tab when you click "Download from Page"
- Remote URLs only when you explicitly provide a URL and click "Fetch & Download"

## Permissions Explained

- **activeTab**: Required to read JSON from the current page when you click the download button
- **scripting**: Required to inject the content script that detects JSON
- **downloads**: Required to save JSON files to your computer
- **host_permissions (<all_urls>)**: Required to detect JSON on any website and fetch from any URL you specify

## Third-Party Services

This extension does NOT use any third-party services, analytics, or tracking tools.

## Data Security

Since no data is collected or transmitted, there are no security concerns related to data storage or transmission.

## Changes to Privacy Policy

Any changes to this privacy policy will be reflected in this document with an updated "Last Updated" date.

## Contact

For questions or concerns about privacy, please open an issue on our GitHub repository:
https://github.com/chethanyadav456/JSON-Downloader

## Open Source

This extension is open source. You can review the complete source code at:
https://github.com/chethanyadav456/JSON-Downloader
