# Accessibility (a11y)

## Purpose

Define accessibility standards for AI-generated UI code to ensure inclusivity.

## Do

- **Use semantic HTML** – `<button>`, `<nav>`, `<main>`, `<article>`, not just `<div>`
- **Add ARIA labels** – when semantic HTML isn't enough
- **Ensure keyboard navigation** – tab order, focus management
- **Provide alt text** – for all images (empty `alt=""` for decorative)
- **Use sufficient color contrast** – WCAG AA minimum (4.5:1 for text)
- **Make clickable areas large** – 44x44px minimum touch targets
- **Use labels for inputs** – properly associated with `for`/`id`
- **Preserve focus styles** – always visible, never removed without a replacement

## Don't

- **Don't rely on color alone** – use icons, text, or patterns too
- **Don't use `<div>` for buttons** – use `<button>` or proper ARIA role
- **Don't auto-play media** – provide controls, respect `prefers-reduced-motion`
- **Don't break zoom** – avoid `maximum-scale=1` in viewport meta
- **Don't use placeholder as label** – placeholders disappear on input
- **Don't remove focus styles** – never `outline: none` without a visible replacement
- **Don't misuse `aria-hidden`** – only for decorative elements, never for meaningful content

## Note

When using icon-only buttons, mark the icon as decorative so screen readers use the button label instead:

```jsx
<button aria-label="Close dialog">
  <XIcon aria-hidden="true" />
</button>
```
