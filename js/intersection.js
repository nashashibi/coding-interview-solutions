test1 = [[1, 2, 2, 1], [2, 2]]
test2 = [[9, 4, 5, 1, 8], [1, 6, 5, 8, 4, 9, 3, 9]]
test3 = [['nash', 'ruz', 'shadi', 'nour'], ['shadi', 'nash']]
test4 = [[1, 3, 5, 7], [2, 4, 6, 8]]

function intersection (nums1, nums2) {
  let i
  let j = 0
  const totalLength = nums1.length + nums2.length
  const map = {}
  const result = []

  for (i = 0; i < totalLength; i++) {
    if (i < nums1.length) {
      map[nums1[i]] = true
    } else {
      if (map[nums2[j]]) {
        result.push(nums2[j])
        map[nums2[j]] = false
      }
      j++
    }
  }

  return result
}

res = intersection(...test2)