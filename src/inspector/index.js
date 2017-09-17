import $ from 'jquery'

import { injectDialog } from './dialog_injector'

// Determines the elements the inspector is looking for on pages.
const validElementsToSelect = [
  'a',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p,',
  'span',
  'b',
  'strong',
  'i',
  'em',
  'div:empty',
]

// Create the selector for all valid elements to use in jQuery.
const selectorForValidElements = validElementsToSelect.concat(', ')

export default class Inspector {
  constructor() {
    this.selectorsToScrape = []
  }
  
  init() {
    console.log('Netscrape: Initializing')
    injectDialog()
  }

  cleanup() {
    console.log('Netscrape: Cleaning up...')
  }
}