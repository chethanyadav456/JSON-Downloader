# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of JSON Downloader seriously. If you believe you have found a security vulnerability, please report it to us responsibly.

**Please do NOT report security vulnerabilities through public GitHub issues.**

### How to Report

1. **Email**: Open a private security advisory on GitHub or create an issue marked as "Security" with minimal details
2. **Include**:
   - Type of vulnerability
   - Full paths of affected source file(s)
   - Location of the affected code (tag/branch/commit or direct URL)
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the vulnerability

### What to Expect

- **Acknowledgment**: We'll acknowledge receipt of your vulnerability report within 48 hours
- **Updates**: We'll send you regular updates about our progress
- **Timeline**: We aim to patch critical vulnerabilities within 7 days
- **Credit**: We'll credit you in the security advisory (unless you prefer to remain anonymous)

## Security Best Practices

### For Users

- Only install the extension from the official Chrome Web Store
- Keep your browser updated to the latest version
- Review permissions before installation
- Report suspicious behavior immediately

### For Contributors

- Never commit sensitive data (API keys, passwords, tokens)
- Use secure coding practices
- Sanitize all user inputs
- Follow the principle of least privilege
- Keep dependencies updated

## Known Security Features

JSON Downloader implements several security measures:

- **No Remote Code**: All code is included in the extension package
- **No Data Collection**: No user data is collected or transmitted
- **Minimal Permissions**: Only essential permissions are requested
- **Local Processing**: All operations happen locally in your browser
- **Content Security Policy**: Strict CSP prevents unauthorized code execution
- **Manifest V3**: Built with the latest, most secure Chrome extension standard

## Security Updates

Security updates will be:
- Released as soon as possible after discovery
- Announced in the GitHub releases
- Pushed to Chrome Web Store immediately
- Documented in CHANGELOG.md

## Disclosure Policy

- We will coordinate disclosure timing with the reporter
- Security advisories will be published on GitHub
- Users will be notified through Chrome Web Store updates
- Full details will be disclosed only after a fix is available

## Contact

For any security concerns, please create a security advisory on GitHub or contact through GitHub issues with the "Security" label.

Thank you for helping keep JSON Downloader and its users safe!
