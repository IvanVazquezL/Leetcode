from heapq import *
from typing import List

class Solution:
    def halveArray(self, nums: List[int]) -> int:
        max_heap = []
        total_sum = sum(nums)
        halve_sum = total_sum / 2
        
        # Insert values (negating them to simulate a max-heap using Python's min-heap)
        for num in nums:
            heappush(max_heap, -num)  # Push negative values to simulate max-heap
        
        current_sum = total_sum
        steps = 0

        while current_sum > halve_sum:
            # Pop the largest number, halve it, and push it back
            max_num = -heappop(max_heap)  # Get the largest number
            half_max_num = max_num / 2
            current_sum -= half_max_num  # Update current sum
            
            heappush(max_heap, -half_max_num)  # Push the halved number back
            steps += 1

        return steps
