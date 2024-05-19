let titleCharacters = document.getElementsByClassName("full_screen_section")[0].children
let colorTrainStartLetter = {
  red: -1,
  blue: -2,
  pink: -3,
  cyan: -4,
  yellow: -5,
  purple: -6,
  orange: -7,
  green: -8,
}

function changeColor(colorTrainStartLetter) {
  for (let i = 0; i < titleCharacters.length; i++) {
    if (i == colorTrainStartLetter.red)
      titleCharacters.item(i).style.color = "#f00"
    else if (i == colorTrainStartLetter.blue)
      titleCharacters.item(i).style.color = "#00f"
    else if (i == colorTrainStartLetter.pink)
      titleCharacters.item(i).style.color = "#f0f"
    else if (i == colorTrainStartLetter.cyan)
      titleCharacters.item(i).style.color = "#0ff"
    else if (i == colorTrainStartLetter.yellow)
      titleCharacters.item(i).style.color = "#ff0"
    else if (i == colorTrainStartLetter.purple)
      titleCharacters.item(i).style.color = "#a0f"
    else if (i == colorTrainStartLetter.orange)
      titleCharacters.item(i).style.color = "#fa0"
    else if (i == colorTrainStartLetter.green)
      titleCharacters.item(i).style.color = "#0f0"
    else
      titleCharacters.item(i).style.color = "#fff"
  }
}

function addToColors(colorTrainStartLetter) {
  for (const property in colorTrainStartLetter) {
    colorTrainStartLetter[property]++;
    if (colorTrainStartLetter[property] > titleCharacters.length)
      colorTrainStartLetter[property] = 0
  }
}

setInterval(() => {
  addToColors(colorTrainStartLetter)
  changeColor(colorTrainStartLetter)
}, 375)