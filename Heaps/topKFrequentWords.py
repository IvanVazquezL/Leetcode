from heapq import *
from typing import Counter, List

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        counts = Counter(words)
        max_heap = []

        for key,val in counts.items():
            heappush(max_heap, (-val,key))

        answer = []

        for _ in range(k):
            answer.append(heappop(max_heap)[1])

        return answer

solution = Solution()
print(solution.topKFrequent(["i","love","leetcode","i","love","coding"], 2))
print(solution.topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4))