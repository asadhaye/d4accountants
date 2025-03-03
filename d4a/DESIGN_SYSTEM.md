# D4 Accountants Design System

## Overview

This document provides a comprehensive guide to the UI/UX design system used throughout the D4 Accountants project. The design system aims to create a consistent and cohesive user experience by standardizing components, colors, typography, and spacing.

## Color System

### Base Colors
- **Primary**: Blue (#2E4A8B) - Used for primary actions, key UI elements
- **Secondary**: Purple (#A78BFA) - Used for secondary actions, supporting UI elements
- **Accent**: Gold (#B8860B) - Used sparingly for highlights and important features
- **Background**: Light Gray (#F5F5F5) - Main background color
- **Foreground**: Dark Gray (#333333) - Main text color

### Color Scale
For each base color, we have a full scale from 50 to 900 (lightest to darkest) defined in `src/styles/theme.css`.

### Usage Guidelines
- Use primary color for main interactive elements (buttons, links)
- Use secondary color for supporting elements
- Use accent color sparingly to highlight important information or calls-to-action
- Background and foreground colors should maintain proper contrast ratios for accessibility

## Typography

### Font Family
- **Primary Font**: Inter - A clean, modern sans-serif typeface for all text

### Text Styles
- **Heading 1**: 2.25rem (36px), bold, tight tracking
- **Heading 2**: 1.875rem (30px), semibold, tight tracking
- **Heading 3**: 1.5rem (24px), semibold, tight tracking
- **Body**: 1rem (16px), regular, relaxed line height

## Component System

### Buttons
- **Default**: Blue background, white text
- **Secondary**: Purple background, white text
- **Outline**: Transparent background with border
- **Ghost**: No background, no border
- **Premium**: Gradient background
- **Link**: Text-only with underline on hover

### Cards
- **Standard Card**: White background, rounded corners, light shadow
- **Glass Card**: Semi-transparent background, backdrop blur
- **Interactive Card**: Hover effects for clickable cards

### Navigation
- **Nav Link**: Gray text that darkens on hover
- **Nav Link Active**: Primary color text, medium font weight

### Forms
- Form fields maintain consistent styling
- Error states use destructive color
- Success states use green color

## Spacing System

We use a consistent 4-point spacing grid:
- 4px (0.25rem) - Extra small spacing
- 8px (0.5rem) - Small spacing
- 16px (1rem) - Default spacing
- 24px (1.5rem) - Medium spacing
- 32px (2rem) - Large spacing
- 48px (3rem) - Extra large spacing
- 64px (4rem) - 2x Extra large spacing

## CSS Classes

### Layout
- `.container` - Centered container with responsive padding
- `.section` - Standard section spacing

### Components
- `.btn-gradient` - Gradient button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outlined button
- `.glass` - Glass effect backgrounds
- `.glass-card` - Card with glass effect
- `.card` - Standard card
- `.nav-link` - Navigation link
- `.nav-link-active` - Active navigation link

## Best Practices

1. **Consistency is Key**: Always use the design system components rather than creating one-off styles
2. **Accessibility First**: Ensure components maintain proper contrast ratios and focus states
3. **Mobile Responsiveness**: Use the provided responsive utilities consistently
4. **Component Documentation**: Update this documentation when creating new shared components

## Implementation Guidelines

1. Use Tailwind's utility classes when appropriate
2. For complex components, create reusable component classes in globals.css
3. Follow the naming conventions established in the codebase
4. Use theme.css CSS variables for colors rather than hardcoded values