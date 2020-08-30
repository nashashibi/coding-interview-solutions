
function fibonacci (nth) {
    let prev1 = 1
    let prev2 = 0
    let tempPrev1

    if (nth === 0 || nth === 1) {
        return nth
    }

    for (i = 2; i < nth; i++) {
        tempPrev1 = prev1
        prev1 = prev1 + prev2
        prev2 = tempPrev1
    }

    return prev1 + prev2
}


res = fibonacci(12)

console.log(res)