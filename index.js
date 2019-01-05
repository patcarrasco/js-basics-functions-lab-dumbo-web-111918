// Code your solution in this file!

function distanceFromHqInBlocks(dest) {
  return  Math.abs(42 - dest)
}

function distanceFromHqInFeet(dest) {
  return distanceFromHqInBlocks(dest) * 264
}
function distanceTravelledInFeet(start, stop) {
  return Math.abs(start - stop) * 264
}

function calculatesFarePrice(start, stop) {
  let dist = distanceTravelledInFeet(start, stop)

  if (dist < 400) {
    return 0
  } else if (dist > 400 && dist < 2000) {
    return (dist - 400) * .02
  } else if (dist > 2000 && dist < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
