
let num = 1
console.log("Stage " + num)
console.log("")
let userName = prompt("Username: ")
let guessNum = Number(prompt("Guess number: "))
let range = 2
let randomNum = Math.floor(Math.random() * range)
let point = 0

if (guessNum === randomNum) {
  totalPoint = point + 1
  console.log("Congratulations" + " " + userName + ", " + "you guess right... you have" + " " + totalPoint + " point")
  totalRange = range + 1
  totalRange = range + 1
  totalStage = num + 1

  while (totalRange === totalRange) {
    
  console.log("Stage " + totalStage)
    let totalStage2 = totalStage ++
    let totalPoint2 = totalPoint ++
  let guessNum2 = Number(prompt("Guess number: "))
  let randomNum2 = Math.floor(Math.random() * totalRange)
    let totalRange2 = totalRange ++
    console.log(totalRange2)
    if (guessNum2 === randomNum2){
      console.log("Congratulations" + " " + userName + ", " + "you guess right... you have" + " " + totalPoint + " point")
    }else
   console.log("Error, you guess wrong... Please try again!")
}
}
else {
  console.log("Error, you guess wrong... Please try again!")
}
