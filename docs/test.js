const upperFirst = require('lodash/upperFirst')
const camelCase = require('lodash/camelCase')

// /_base-[\w-]+\.vue$/

let fileName = '_base-button.vue'
const componentName = upperFirst(
  camelCase(
    fileName
      // Remove the "./_" from the beginning
      .replace(/^\.\/_/, '')
      // Remove the file extension from the end
      .replace(/\.\w+$/, '')
  )
)

console.log(componentName)
