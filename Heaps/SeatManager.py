from heapq import *
from typing import List

class SeatManager:

    def __init__(self, n: int):
        self.number_seats = n
        self.min_heap = []

        for i in range(1, self.number_seats + 1):
            heappush(self.min_heap, i)

    def reserve(self) -> int:
        return heappop(self.min_heap)

    def unreserve(self, seatNumber: int) -> None:
        heappush(self.min_heap, seatNumber)

seat_manager = SeatManager(5)
print(seat_manager.reserve())
print(seat_manager.reserve())
print(seat_manager.unreserve(2))
print(seat_manager.reserve())
print(seat_manager.reserve())
print(seat_manager.reserve())
print(seat_manager.reserve())
print(seat_manager.unreserve(5))