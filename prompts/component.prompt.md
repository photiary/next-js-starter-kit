# Prompt for Component layer generate

## 1. Basic rules

- Use Tailwindcss.
- 최우선으로 '1. Basic rules'를 반드시 준수한다.

### Layout Component Layer

- **DO NOT access API Layer**

### Page Component Layer

- Component의 기본 구조는 `../apps/web/app/template/info/page.tsx`를 따른다.
- 필요에 따라 API를 호출한다.

### Service Component Layer

- `../apps/web/components/template/**`에 있는 Template component를 참조한다.

### UI Component Layer

### Storybook

- `../packages/ui/src/components/**`에 생성하는 UI Component는 `{ComponentName}.stories.ts`으로 Storybook을 생성한다.
- 리소스 구조는 `../packages/ui/src/components/button.stories.ts`를 참조한다.

## 2. Common Feature

- Component 리소스에 `$feature$` 문자열은 지시 사양에 맞게 수정한다.
- Confirm Dialog는 `<Dialog>`를 사용한다.
- 저장(신규, 수정) 이벤트는 `Sonner`를 사용한다. 메시지: '$feature$를 저장했습니다.'
- 삭제 이벤트는 Confirm Dialog를 표시한다. 메시지: '$feature$를 삭제하시겠습니까?'

### Sonner

- 화면 오른쪽 상단에 표시한다.
