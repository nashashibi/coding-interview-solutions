input = [0]
input = [9]
input = [0, 0, 0]
input = [9, 9, 9]
input = [2, 3, 4]
input = [2, 9, 9]

function add_one (nums) {
  let i = nums.length - 1
  let done = false


  while (!done) {
    const n = nums[i]

    if (n === 9) {
      nums[i] = 0
      // to add 1 at the beginnning if all nums are 9
      // makes time complexity O(2n) instead of O(n)
      if (i === 0) {
        nums.unshift(1)
        done = true
      }
    } else {
      nums[i] += 1
      done = true
    }

    i--
  }

  return nums
}

res = add_one(input)

console.log('output:', res)
