# Contributing to JSON Downloader

Thank you for considering contributing to JSON Downloader! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots if applicable
- Your Chrome version and OS

### Suggesting Features

We welcome feature suggestions! Please open an issue with:
- A clear description of the feature
- Why this feature would be useful
- Any implementation ideas you have

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** with clear, descriptive commits
3. **Test thoroughly**:
   - Test on multiple websites with JSON content
   - Test both download methods (from page and from URL)
   - Test error scenarios
   - Ensure no console errors
4. **Update documentation** if needed
5. **Submit a pull request** with:
   - Clear description of changes
   - Reference to any related issues
   - Screenshots/GIFs for UI changes

### Code Style

- Use clear, descriptive variable names
- Add comments for complex logic
- Follow the existing code style
- Keep functions small and focused
- Use modern JavaScript (ES6+)

### Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Start with a capital letter
- Keep first line under 72 characters
- Reference issues when applicable

Examples:
```
Add XML download support
Fix download button positioning on mobile
Update README with new features
```

### Testing Checklist

Before submitting a PR, please verify:

- [ ] Extension loads without errors
- [ ] All features work as expected
- [ ] No console errors or warnings
- [ ] Code follows existing style
- [ ] Documentation is updated
- [ ] Tested on latest Chrome version

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/chethanyadav456/JSON-Downloader.git
cd JSON-Downloader
```

2. Load in Chrome:
   - Open `chrome://extensions`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the project directory

3. Make your changes and reload the extension to test

## Project Structure

```
/
├── manifest.json          # Extension configuration
├── popup.html            # Extension popup UI
├── popup.js              # Popup functionality
├── styles.css            # Popup styles
├── content_script.js     # Runs on web pages
├── service_worker.js     # Background script
└── icons/               # Extension icons
```

## Areas for Contribution

We especially welcome contributions in these areas:

- **Features**: XML/CSV download support, custom formatting options
- **UI/UX**: Improved popup design, animations, themes
- **Bug Fixes**: Any issues you encounter
- **Documentation**: Improving README, adding examples
- **Testing**: Edge cases, different browsers
- **Accessibility**: Keyboard shortcuts, screen reader support

## Questions?

Feel free to open an issue for any questions about contributing!

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
