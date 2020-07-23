input = [7, 3, 5, 5, 4, 3, 4, 8, 8, 3]

function findSingle(arr) {
    const length = arr.length
    const seen = {}
    const deleted = {}

    for (i = 0; i < length; i++) {
        num = arr[i]

        if (seen[num] && !deleted[num]) {
            deleted[num] = true
            delete seen[num]
        }

        if (!seen[num] && !deleted[num]) {
            seen[num] = true
        }
    }

    return Object.keys(seen)[0]
}


res = findSingle(input)

console.log(res)