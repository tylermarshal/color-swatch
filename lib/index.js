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

$('textarea').on('keyup', (event) => {
  if (event.which === 13) {
    let inputText = $("textarea").val()
    let splitInput = inputText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()][\n\r]/g,"").split(" ")
    addSwatch(splitInput)
    return false;
  }
})

topColor()
