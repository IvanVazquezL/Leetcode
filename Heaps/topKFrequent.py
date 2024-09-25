from heapq import *
from typing import Counter, List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = Counter(nums)
        min_heap = []

        for key, val in counts.items():
            heappush(min_heap, (val, key))
            if len(min_heap) > k:
                heappop(min_heap)

        return [pair[1] for pair in min_heap]

solution = Solution()
print(solution.topKFrequent([1,1,1,2,2,3], 2))
print(solution.topKFrequent([1], 1))