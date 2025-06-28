# Prompt for API layer generate

## 1. Basic rules

- `./apps/web/prompts/web-api-swagger.json`을 이용하여 API를 생성한다.
- {domain}은 `swagger.json`에 정의 된 `tags`의 `name`을 이용한다.
- API 함수 위에 JSDoc 주석을 작성하고, JSDoc는 다음 '3. 예제'와 같은 형식으로 생성한다.
- 요구한 method, path params, query params, request, response, error에 맞게 API function을 생성한다.
- 요구한 Domain 안에 `{domain}API.ts`에 API function을 생성한다.
- 다음 '3. 예제'와 같이 순서와 구조를 반드시 준수하여 생성한다.
- 최우선으로 '1. 기본 규칙'을 반드시 준수한다.

## 3. 예제

### AI Agent

```typescript
// apps/web/app/counter/counterAPI.ts
import { publicApi } from "@/lib/api";

export interface Count {
  data: number;
}

export const counterApi = {
  /**
   * 개수를 조회한다.
   *
   * @param amount 초기 개수
   * @returns ApiResponse<Count>
   */
  fetchCount: async (amount: number = 1) => {
    const response = await publicApi.get("/api/count", {
      params: { amount },
    });
    return response.data as Count;
  },
};

// 새로운 API를 생성한다.
```
