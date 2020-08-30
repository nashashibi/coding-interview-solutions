colors = [2, 0, 1, 1, 2, 0, 0, 2, 1, 0, 2, 1, 2]
console.log('input:', colors)

function sortColors (input) {
  let color
  let p0 = 0
  let p1 = 1

  for (i = 0; i < input.length; i++) {
    color = input[i]

    if (color === 0) {
      swap(i, p0)
      p0++
      swap(p0, p1)
      p1++
    }

    if (color === 1) {
      swap(i, p1)
      p1++
    }
  }

  if (input[p0] !== 0) {
    swap(p0, p1 - 1)
  }

  function swap(i, i2) {
    let tempCurrent = input[i]
    input[i] = input[i2]
    input[i2] = tempCurrent
  }
}

sortColors(colors)
res = colors

console.log('output:', res)
