from heapq import *
from typing import List

class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.min_heap = nums
        heapify(self.min_heap)

        while len(self.min_heap) > self.k:
            heappop(self.min_heap)

    def add(self, val: int) -> int:
        heappush(self.min_heap, val)

        while len(self.min_heap) > self.k:
            heappop(self.min_heap)

        return self.min_heap[0]

solution = KthLargest(3, [4, 5, 8, 2])
print(solution.add(3))
print(solution.add(5))
print(solution.add(10))
print(solution.add(9))
print(solution.add(4))