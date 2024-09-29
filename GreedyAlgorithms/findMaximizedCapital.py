from heapq import *
from typing import List

class Solution:
    def findMaximizedCapital(self, k: int, current_capital: int, profits: List[int], capital: List[int]) -> int:
        profits_length = len(profits)
        projects = sorted(zip(capital, profits))
        max_heap = []
        i = 0

        for _ in range(k):
            while i < profits_length and projects[i][0] <= current_capital:
                heappush(max_heap, -projects[i][1])
                i += 1

            if len(max_heap) == 0:
                # not enough money to do more projects
                return current_capital
            
            current_capital -= heappop(max_heap)

        return current_capital


solution = Solution()
print(solution.findMaximizedCapital(2, 0, [1,2,3], [0,1,1]))