// **DO NOT EDIT. This is a template resource.**
import { publicApi } from '@workspace/core/api'

export interface Count {
  amount: number
}

/**
 * 개수를 조회한다.
 *
 * @param amount 초기 개수
 * @returns Count
 */
export const fetchCount = async (amount: number = 1) => {
  const response = await publicApi.get('/api/count', {
    params: { amount },
  })
  return response.data as Count
}
