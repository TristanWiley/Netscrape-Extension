import $ from 'jquery'

import { injectDialog, } from './dialog_injector'
import { updateSelectedElementsList, onHoverEnter, onHoverExit, onClick, } from './element_selector'

// Determines the elements the inspector is looking for on pages.
const validElementsToSelect = [
  'a',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'b',
  'strong',
  'i',
  'em',
  'div:empty',
]

// Create the selector for all valid elements to use in jQuery.
const selectorForValidElements = validElementsToSelect.join(', ')

export default class Inspector {
  init() {
    // Apply event listeners
    // Cancel all clicking behaviors on all items that are not valid to be selected
    $('*:not(' + selectorForValidElements + ')').click((event) => {
      // Make it so when you click on stuff it doesn't do what it normally would
      // and stop all the parent elements from doing the same.
      event.preventDefault()
      event.stopPropagation()
    })

    $(selectorForValidElements).click((event) => {
      // Make it so when you click on stuff it doesn't do what it normally would
      // and stop all the parent elements from doing the same.
      event.preventDefault()
      event.stopPropagation()
      onClick(event)

      return false
    })

    $(selectorForValidElements).mouseenter((event) => {
      onHoverEnter(event)
    })

    $(selectorForValidElements).mouseleave((event) => {
      onHoverExit(event)
    })
    
    // Finally load the dialog into the page to scrape, this prevents the dialog
    // from being affected by the listeners.
    injectDialog()
    updateSelectedElementsList()
  }
}