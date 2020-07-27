input = [3, 2, 5, 1, 1, 9, 3, 4, 1]
input = [3, 2, 4, 1, 1, 9, 3, 4]
input = [1, 1, 1, 1]
input = [1, 2, 1, 1, 3, 1, 1, 4, 1, 1, 1]
input = [5, 1, 1, 1, 1, 1]
input = [5]

function minJumps (nums) {
    const end = nums.length - 1
    let i = 0
    let jumps = 0
    let nextStep = nums[0]
    let maxReach = nums[0]
    let nextStepMaxReach = nums[0]
    let reachedEnd = false
    r = 0

    while (!reachedEnd) {
        num = nums[i]
        r++

        if (end === 0) {
            reachedEnd = true
        } else if (nums[0] >= end) {
            reachedEnd = true
            jumps++
        } else {
            if (num >= nextStep || i < maxReach) {
                nextStep = num
                nextStepMaxReach = num + i
            }

            if (i === maxReach || nextStepMaxReach >= end) {
                maxReach = nextStepMaxReach
                jumps++
            }

            if (maxReach >= end) {
                jumps++
                reachedEnd = true
            } else {
                i++
            }
        }
    }

    console.log('r: ' + r)

    return jumps

}

res = minJumps(input)

console.log(res)