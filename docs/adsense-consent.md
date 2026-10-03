# AdSense consent setup

The website uses basic opt-in: Analytics and AdSense scripts are not loaded
until the visitor accepts optional cookies. Declining blocks both scripts.
The footer's Cookie settings button lets visitors change their decision;
revoking consent clears first-party Analytics cookies and reloads the page
to stop already-loaded scripts. Old consent cookies require a new choice.
Image tools and language preferences work without accepting optional cookies.

Ad personalization and Google Signals are disabled by default. AdSense's
publisher ID remains in a `google-adsense-account` meta tag for verification
without loading the advertising script before consent.

## Required account configuration

The custom banner is not a Google-certified CMP. This repository cannot
inspect or publish messages inside the AdSense account.

1. In AdSense, open **Privacy & messaging → European regulations**.
2. Create or inspect the message for `easysplit.click` using Google's CMP.
3. Include consent, refusal and consent-management options, and publish it
   for EEA, UK and Switzerland traffic. Review the advertising configuration
   against the site's default of non-personalized ads.
4. Test the published message from an affected region after accepting the
   website's optional cookies. Website consent must not substitute for TCF
   consent collected by the CMP. Check that CSP permits the CMP's actual
   script, frame and network requests before considering setup complete.

Google's requirements:
https://support.google.com/adsense/answer/13554116

## Browser verification

- Fresh profile: neither Google Analytics nor AdSense requests before choice.
- Decline and reload: neither service loads; image processing still works.
- Accept: services load once, with personalization disabled.
- Cookie settings → Decline after accepting: reload, no subsequent loads,
  and no first-party `_ga`, `_gid`, `_gat` or `_gcl_` cookies remain.
- An old unversioned consent cookie prompts for consent again.
- Repeat on `/`, `/vi/`, `/jp/` and a tool page, on desktop and mobile.
