input = [1, 3, 2, 5, 7, 2]

function subarray_with_target_k (nums, k) {
  sum = 0
  subArr = []
  i = 0
  
  while (sum !== k) {
    n = nums[i]
    subArr.push(n)
    sum += n
    
    while (sum > k) {
      sum -= subArr.shift()
    }
    
    i++
  }
  
  return subArr
}

res = subarray_with_target_k(input, 14)

console.log(res)