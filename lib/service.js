import { appendTopColor } from "./domManipulation"

export const topColor = () => {
  fetch("https://color-swatch-api.herokuapp.com/api/v1/top_color")
    .then((response) => response.json())
    .then((color) => appendTopColor(color))
    .catch((error) => console.error({ error }))
}

const postConfig = (body) => {
  return {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  }
}

export const postColor = (body) => {
  fetch("https://color-swatch-api.herokuapp.com/api/v1/colors", postConfig(body))
    .then((response) => response.json())
    .catch((error) => console.error({ error }))
}
