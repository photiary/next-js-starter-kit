# Prompt for Web Theme & Style

- 위 내용을 바탕으로 `../packages/ui/src/components/**`, `../apps/web/**`의 모든 Component의 스타일을 수정한다.
- 위 내용을 바탕으로 Web theme를 다음 'shadcn/ui Theming' 방법에 따라 수정한다.

# shadcn/ui Theming

Using CSS Variables and color utilities for theming.

You can choose between using CSS variables (recommended) or utility classes for theming.

## CSS Variables

```jsx
<div className="bg-background text-foreground" />
```

To use CSS variables for theming set `tailwind.cssVariables` to `true` in your `components.json` file.

`../apps/web/components.json`

```json
{
  "tailwind": {
    "css": "src/styles/globals.css",
    "cssVariables": true
  }
}
```

## Utility classes

```jsx
<div className="bg-zinc-950 dark:bg-white" />
```

To use utility classes for theming set `tailwind.cssVariables` to `false` in your `components.json` file.

`../apps/web/components.json`

```json
{
  "tailwind": {
    "css": "src/styles/globals.css",
    "cssVariables": false
  }
}
```

## Convention

We use a simple `background` and `foreground` convention for colors. The `background` variable is used for the background color of the component and the `foreground` variable is used for the text color.

`The background suffix is omitted when the variable is used for the background color of the component.`

Given the following CSS variables:

```
--primary: oklch(0.205 0 0);
--primary-foreground: oklch(0.985 0 0);
```

The `background` color of the following component will be `var(--primary)` and the `foreground` color will be `var(--primary-foreground)`.

```jsx
<div className="bg-primary text-primary-foreground">Hello</div>
```

## List of variables

Here's the list of variables available for customization:

`../packages/ui/src/styles/globals.css`

## Adding new colors

To add new colors, you need to add them to your CSS file.

`../packages/ui/src/styles/globals.css`

```css
:root {
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.28 0.07 46);
}

.dark {
  --warning: oklch(0.41 0.11 46);
  --warning-foreground: oklch(0.99 0.02 95);
}

@theme inline {
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}
```

You can now use the warning utility class in your components.

```jsx
<div className="bg-warning text-warning-foreground" />
```
