function superbowlWin(record) {
  const firstWin = record.find(function(element)  {
    return element.result === "W"
  })
  console.log(firstWin);


const firstWinYear = record.find(function(element)  {
  return element.result === "W"
})
return firstWinYear.year
}
// console.log(firstWin) 
// return !!firstWin.year ? firstWin.year : firstWin

// return !! firstWin ? firstWin.year : firstWin

function superbowlWin(record) {
  const game = record.find(gameWon)
  if(game) {
    return game.year
  }
}
function gameWon(game){
  return game.result === "W";
}