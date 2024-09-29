from heapq import *
from typing import Counter, List

class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        counter = Counter(arr)
        pairs = [[count, element] for element, count in counter.items()]        
        heapify(pairs)
        
        for _ in range(k):
            pairs[0][0] -= 1

            if pairs[0][0] == 0:
                heappop(pairs)
        
        return len(pairs)

solution = Solution()
print(solution.findLeastNumOfUniqueInts([5,5,4], 1))
print(solution.findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3))
