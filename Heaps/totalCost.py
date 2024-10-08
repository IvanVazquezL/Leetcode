from heapq import *
from typing import List

class Solution:
    def totalCost(self, costs: List[int], k: int, candidates: int) -> int:
        head_workers = costs[:candidates]
        tail_workers = costs[max(candidates, len(costs) - candidates):]
        heapify(head_workers)
        heapify(tail_workers)

        answer = 0
        next_head = candidates
        next_tail = len(costs) - 1 - candidates

        for _ in range(k):
            if (not tail_workers) or (head_workers and head_workers[0] <= tail_workers[0]):
                answer += heappop(head_workers)

                # Only refill the queue if there are workers outside the two queues.
                if next_head <= next_tail:
                    heappush(head_workers, costs[next_head])
                    next_head += 1
            else:
                answer += heappop(tail_workers)

                if next_head <= next_tail:
                    # Only refill the queue if there are workers outside the two queues.
                    heappush(tail_workers, costs[next_tail])
                    next_tail -= 1
        
        return answer


solution = Solution()
print(solution.totalCost([17,12,10,2,7,2,11,20,8], 3, 4))