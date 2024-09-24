from heapq import *
from math import floor
from typing import List

class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        max_heap = []

        # Insert values (negating them)
        for stone in piles:
            heappush(max_heap, -stone)

        counter = 0

        while counter < k:
            max_num = -heappop(max_heap)
            heappush(max_heap, -(max_num - floor(max_num/2)))
            counter += 1

        return -sum(max_heap)


solution = Solution()
print(solution.minStoneSum([5,4,9], 2))
print(solution.minStoneSum([4,3,6,7], 3))