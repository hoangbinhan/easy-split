# Image Splitter Optimization Plan

## Objective

Enhance the "TikTok Image Splitter" page structure to optimize for SEO rankings and meet Google AdSense requirements (high-quality content, transparency, valuable information).

## Proposed Layout Changes

### 1. Hero Section (Existing)

- **Status**: Good.
- **Action**: Keep as is. Focus on high-contrast "Call to Action".

### 2. Main Tool (Existing)

- **Status**: Functional and feature-rich.
- **Action**: Ensure "Loading" states are minimized (already addressed with FOUC fix).

### 3. Features Grid (New Section)

- **Goal**: Highlight unique selling points to increase user time-on-page and trust.
- **Content**:
  - **Instant Processing**: No server uploads (Client-side).
  - **Privacy Focused**: Images never leave the device.
  - **High Quality**: Maintains original resolution.
  - **Free Forever**: No hidden costs.
- **Design**: 2x2 Grid, Neo-brutalism style cards.

### 4. Comprehensive Guide (Refine Existing "Article")

- **Goal**: Target "How to" keywords.
- **Action**: distinct from "How to Use" steps. Add "Pro Tips for TikTok Carousels" (e.g., telling a visual story, seamless transitions).

### 5. FAQ Section (New Section - Vital for SEO)

- **Goal**: Target "People Also Ask" queries on Google.
- **Questions**:
  - _How do I split a panorama for TikTok?_
  - _Is this tool free?_
  - _Do I need to install an app?_
  - _What is the best aspect ratio for TikTok slides?_
- **Design**: Accordion style elements (`details`/`summary`) for interactivity.

### 6. About & Privacy (New Section - Vital for AdSense)

- **Goal**: Establish clear "Publisher Identity" and "Privacy Policy" visibility.
- **Content**:
  - Brief "About" paragraph.
  - Explicit "Privacy Note": confirms client-side only processing.
  - Link to main Privacy Policy (if exists) or inline disclaimer.

## Implementation Steps

1.  **Update `content.tsx`**:
    - Import new icons/components if needed.
    - Implement `FeaturesSection` component.
    - Implement `FAQSection` component.
    - Add `AboutSection` at the bottom.
2.  **Visuals**:
    - Ensure all new sections match the "Neo-brutalism" aesthetic (Bold borders, shadows, vigorous colors).

## SEO Technicals

- **JSON-LD Schema**: Add `SoftwareApplication` or `HowTo` schema to `page.tsx`.
- **Meta Tags**: Ensure `keywords` are present in `metadata`.

---

_Please review this plan. If approved, I will proceed to implement these sections in `content.tsx` and update metadata in `page.tsx`._
