from heapq import *
from typing import Counter, List

class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        array_length = len(arr)
        counts = sorted(Counter(arr).values(), reverse=True)

        if len(counts) == 1:
            return 1
        
        sum = 0
        integers = 0

        print(counts)

        for count in counts:
            sum += count
            integers += 1

            if sum >= array_length/2:
                return integers
            
            
        return integers

solution = Solution()
print(solution.minSetSize([3,3,3,3,5,5,5,2,2,7]))
print(solution.minSetSize([7,7,7,7,7,7]))