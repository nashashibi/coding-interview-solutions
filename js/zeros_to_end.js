nums = [0, 0, 0, 2, 0, 1, 3, 4, 0, 0, 9]
console.log('input:', nums)

function zeros () {
  const len = nums.length
  let pointer = 0

  for (i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      let tempCurrent = nums[i]
      nums[i] = nums[pointer]
      nums[pointer] = tempCurrent
      pointer++
    }
  }
}

zeros()

res = nums

console.log('output:', res)
