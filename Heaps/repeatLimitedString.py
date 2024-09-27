from heapq import *
from typing import Counter

class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        characterFrequency = Counter(s)

        max_heap = []

        for char, count in characterFrequency.items():
            heappush(max_heap, (-ord(char), count))

        result = []

        while max_heap:
            # Get the largest character available
            unicode_code, count = heappop(max_heap)
            # convert back to char
            char = chr(-unicode_code)

            # How many times can we add this character (up to repeatLimit)
            times_to_add = min(count, repeatLimit)
            result.append(char * times_to_add)

            count -= times_to_add

            if count > 0:
                # If there is still some of this character left
                if not max_heap: # No smaller character to use as a separator
                    break

                # Get the next largest character to break the repeat limit
                next_unicode_code, next_count = heappop(max_heap)
                next_char = chr(-next_unicode_code)

                # Add this smaller character once
                result.append(next_char)

                # Put the smaller character back with its remaining count
                if next_count - 1 > 0:
                    heappush(max_heap, (-ord(next_char), next_count - 1))

                # Put the larger character back into the heap for future use
                heappush(max_heap, (-ord(char), count))

        return ''.join(result)






solution = Solution()
print(solution.repeatLimitedString("cczazcc", 2))
