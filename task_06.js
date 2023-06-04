// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

function solution(start, finish, difference = finish - start) 
{
  return Math.floor(difference / 3) + difference % 3
}