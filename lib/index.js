import './stylesheets/styles.scss'
import COLORS from './data/colors'
import { topColor } from './service'
import { addSwatch } from './domManipulation'

$('.text-submission').on('click', 'button', (event) => {
  event.preventDefault()
  let inputText = $("textarea").val()
  let splitInput = inputText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
  addSwatch(splitInput)
})

$('.text-submission').on('keyup', (event) => {
  if (event.which == 13) {
    event.preventDefault()
    let inputText = $("textarea").val()
    let splitInput = inputText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
    addSwatch(splitInput)
  }
})

topColor()
