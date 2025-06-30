# React Style Guide for Application

This document outlines the coding standards, architectural patterns, and best practices for the Dashboard app.

## Technology Stack

### Frontend

- **TypeScript** for language
- **React v19** for building user interfaces
- **Next v15** is The React Framework for the Web
- **Tailwindcss v4** for utility-first styling
- **dayjs** for Date util
- **shadcn/ui** is a set of beautifully-designed, accessible components and a code distribution platform.

### Excluded Technologies

### Excluded Prompt

Ignore the `*.prompt.md` resources defined in `./prompt.ignore`.

## Architectural Patterns

### Package Structure

**Monorepo**

    ```
    root/
    ├─ apps/
    │  └─ web/
    │     ├─ app/                       # Page components & Layout components
    │     │  └─ {domain}/               # Feature domain (Feature Page, Feature API Call)
    │     ├─ components/                # Business logic common components
    │     ├─ hooks/
    │     └─ lib/                       # Utils
    └─ packages/
       ├─ core/
       │  └─ src/
       │     └─ lib/
       │        ├─ api.ts                # Axios
       │        └─ axiosInstances.ts
       └─ ui/
          └─ src/
             └─ components/              # UI Common components (shadcn/ui) and None business components
    ```

### Layered Architecture

The application follows a strict layered architecture with a clear flow of control

- **API call Layer**: Backend Http request API call, use the Axios defined in `../packages/core/src/api/api.ts`
- **Service Component Layer**: Acts as an intermediary between the API call layer and the UI component layer, handling business logic, data transformation, validation.
- **UI Component Layer**: Contains the visual components presented to users, including buttons, forms, and layouts.
  **DO NOT access API Layer**

The flow of control should always follow the pattern:

1. This file: `./guideline.prompt.md`
2. API call Layer: `./api.prompt.md`
3. Component Layer: `./component.prompt.md`
4. Theme: `./theming.prompt.md`

## Common Rules

- All props, params, and strings can contain **KOREAN**.
- Always use UI Component (**shadcn/ui**) in `./packages/ui/src/components`

## Final task plan

All tasks are done and **Should be RUN** the prettier script.

```shell
# Prettier script
pnpm format
```
