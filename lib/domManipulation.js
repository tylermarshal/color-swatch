import COLORS from './data/colors'
import { postColor } from './service'

export const appendTopColor = (color) => {
  $(".top-color").append(color.value)
}

export const addSwatch = (splitInput) => {
  $('.colorized-text').html('')
  splitInput.forEach((word) => {
    let lowCaseWord = word.toLowerCase()
    if (COLORS[lowCaseWord]) {
      postColor({ color: { value: lowCaseWord } })
      let html = $(".colorized-text").clone().html();
      if (!html.includes(COLORS[lowCaseWord])) {
        $('.colorized-text').append(`<div class="swatch" style='background-color:${COLORS[lowCaseWord]};'></div>`)
      }
    }
  })
}
