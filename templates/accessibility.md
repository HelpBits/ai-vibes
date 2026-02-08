# Accessibility (a11y)

## Purpose

Define accessibility standards for AI-generated UI code to ensure inclusivity.

## Do

- **Use semantic HTML** – `<button>`, `<nav>`, `<main>`, not just `<div>`
- **Add ARIA labels** – when semantic HTML isn't enough
- **Ensure keyboard navigation** – tab order, focus management, shortcuts
- **Provide alt text** – for all images (empty alt="" for decorative)
- **Use sufficient color contrast** – WCAG AA minimum (4.5:1 for text)
- **Make clickable areas large** – 44x44px minimum touch targets
- **Support screen readers** – test with VoiceOver, NVDA, JAWS
- **Add skip links** – "Skip to main content" for keyboard users
- **Use labels for inputs** – properly associated with `for`/`id`
- **Test with keyboard only** – tab, enter, escape, arrows

## Don't

- **Don't rely on color alone** – use icons, text, patterns too
- **Don't use `<div>` for buttons** – use `<button>` or proper ARIA
- **Don't auto-play media** – provide controls, respect prefers-reduced-motion
- **Don't break zoom** – avoid `maximum-scale=1` in viewport
- **Don't use placeholder as label** – placeholders disappear on input
- **Don't forget focus styles** – never `outline: none` without alternative
- **Don't hide content** – that should be available to screen readers

## Examples

### ✅ Good: Semantic HTML

```jsx
<button onClick={handleClick}>Delete</button>
```

### ❌ Bad: Div as button

```jsx
<div onClick={handleClick}>Delete</div>
```

### ✅ Good: Proper label

```jsx
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

### ❌ Bad: Placeholder as label

```jsx
<input type="email" placeholder="Email" />
```

### ✅ Good: Icon with label

```jsx
<button aria-label="Close dialog">
  <XIcon />
</button>
```

### ✅ Good: Keyboard support

```javascript
function handleKeyDown(e) {
  if (e.key === "Escape") {
    closeModal();
  }
  if (e.key === "Enter" || e.key === " ") {
    handleAction();
  }
}
```
