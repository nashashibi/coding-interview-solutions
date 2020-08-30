input = [[2, 8, 3], [4, 6, 5]]
input = [[2, 18, 3], [4, 6, 5], [5, 12, 8]]

function generate_skyline (buildings) {
  const skyline = []
  const length = buildings.length
  let maxHeight = 0
  let prevX = 0
  let prevY = 0

  for (i = 0; i < length; i++) {
    left = buildings[i][0]
    right = buildings[i][1]
    height = buildings[i][2]
    
    nextLeft = buildings[i][0]
    nextRight = buildings[i][1]
    nextHeight = buildings[i][2]

    // continue here
  }

  return skyline
}

res = generate_skyline(input)

console.log('output:', res)

// output1: [(2, 3), (4, 5), (6, 3), (8, 0)]
// output2: [(2, 3), (4, 5), (5, 8), (12, 3), (18, 0)]