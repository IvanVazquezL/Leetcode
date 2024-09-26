from heapq import *
from typing import List

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        max_heap = []

        for number in nums:
            heappush(max_heap, -number)

        limit = len(max_heap) - k
        answer = None

        while len(max_heap) > limit:
            answer = -heappop(max_heap)

        return answer


solution = Solution()
print(solution.findKthLargest([3,2,1,5,6,4], 2))
print(solution.findKthLargest([3,2,3,1,2,4,5,5,6], 4))