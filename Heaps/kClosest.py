from heapq import *
from typing import List

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        max_heap = []

        for [x,y] in points:
            heappush(max_heap, (-(x*x + y*y), [x,y]))
            if len(max_heap) > k:
                heappop(max_heap)

        return [pair[1] for pair in max_heap]

solution = Solution()
print(solution.kClosest([[1,3],[-2,2]], 1))
print(solution.kClosest([[3,3],[5,-1],[-2,4]], 2))