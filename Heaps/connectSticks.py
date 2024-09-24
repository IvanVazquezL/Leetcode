from heapq import *
from typing import List

class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        if len(sticks) == 1:
            return 0
        
        heapify(sticks)
        total_sum = 0

        while len(sticks) > 1:
            number1 = heappop(sticks)
            number2 = heappop(sticks)
            num_sum = number1 + number2
            heappush(sticks, num_sum)
            total_sum += num_sum

        return total_sum


solution = Solution()
print(solution.connectSticks([2,4,3]))
print(solution.connectSticks([1,8,3,5]))