from heapq import *

class SmallestInfiniteSet:

    def __init__(self):
        self.current_integer = 1
        self.added_integers: [int] = []
        self.is_present: {int} = set()

    def popSmallest(self) -> int:
        if len(self.added_integers):
            answer = heappop(self.added_integers)
            self.is_present.remove(answer)
        else:
            answer = self.current_integer
            self.current_integer += 1
        
        return answer

    def addBack(self, num: int) -> None:
        if self.current_integer <= num or num in self.is_present:
            return
        
        heappush(self.added_integers, num)
        self.is_present.add(num)

smallest = SmallestInfiniteSet()
smallest.addBack(2)
smallest.popSmallest()
smallest.popSmallest()
smallest.popSmallest()
smallest.addBack(1)
smallest.popSmallest()
smallest.popSmallest()
smallest.popSmallest()