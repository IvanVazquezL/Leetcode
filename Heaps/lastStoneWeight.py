from heapq import *
from typing import List

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = []

        # Insert values (negating them)
        for stone in stones:
            heappush(max_heap, -stone)

        while len(max_heap) > 1:
            max_stone_1 = -heappop(max_heap)
            max_stone_2 = -heappop(max_heap)

            if max_stone_1 != max_stone_2:
                heappush(max_heap, -(max_stone_1 - max_stone_2))

        return -heappop(max_heap) if len(max_heap) else 0

solution = Solution()

print(solution.lastStoneWeight([2,7,4,1,8,1]))
print(solution.lastStoneWeight([1]))