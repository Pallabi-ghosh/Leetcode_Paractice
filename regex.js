var text = "I4 love5 something9"

const re = /[a-z]+(\d)/g

console.log(...text.matchAll(re))