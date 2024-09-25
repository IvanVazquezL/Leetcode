from heapq import *
from typing import List

class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        max_heap = []

        for number in arr:
            heappush(max_heap, (-(abs(number - x)), -number))
            if len(max_heap) > k:
                heappop(max_heap)

        return sorted([-pair[1] for pair in max_heap])

solution = Solution()
print(solution.findClosestElements([1,2,3,4,5], 4, 3))
print(solution.findClosestElements([1,1,2,3,4,5], 4, -1))