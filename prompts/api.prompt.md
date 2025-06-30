# Prompt for API layer generate

## 1. Basic rules

- `../apps/web/prompts/web-api-swagger.json`을 이용하여 API function을 생성한다.
- {domain}은 `swagger.json`에 정의 된 `tags`의 `name`을 이용한다.
- 리소스는 `../apps/web/app/{domain}/{domain}API.ts`으로 생성한다.
- function 이름 규칙은 `method`에 따라서 접두사를 붙힌다.
  - 조회 GET: 'fetch'
  - 조회 POST: 'fetch'
  - 등록 POST: 'post'
  - 수정 PUT: 'put'
  - 삭제 DELETE: 'delete'
- 리소스 구조 `../apps/web/app/template/counterAPI.ts`를 참조하여 JSDoc 주석과 API function을 생성한다.
- 최우선으로 '1. Basic rules'를 반드시 준수한다.
