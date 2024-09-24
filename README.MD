# WhatsApp Web Sound Notification Chrome Extension

This Chrome extension plays a simple beep sound every time you open WhatsApp Web (`web.whatsapp.com`).

## Features

- Automatically plays a beep sound when WhatsApp Web is opened.
- Lightweight and fast.
- Simple and easy to install.

## Installation

Follow these steps to install the extension:

1. **Download the extension files**:
   - Make sure you have the following files in a single folder:
     - `manifest.json`
     - `content.js`

2. **Load the extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - In the top-right corner, enable **Developer mode**.
   - Click on **Load unpacked** and select the folder where you saved the extension files (`manifest.json` and `content.js`).

3. **Test the extension**:
   - Once the extension is loaded, navigate to `https://web.whatsapp.com`.
   - A beep sound should play when the page is opened.

## Files Description

- **manifest.json**: This file defines the extension's configuration, including permissions, scripts, and the match URL.
- **content.js**: This JavaScript file plays a beep sound using the `AudioContext` API whenever WhatsApp Web is opened.