import $ from 'jquery'

export const chosenSelectors = []
let hoveringSelector = null
let selectorLock = false

function addSelector(element) {
  // Prevents a selector from being added when there isn't one hovered on,
  // and if the user is currently selecting the element's selector.
  // This action is atomic. Do not allow any concurrent actions from
  // hijacking the hoveringSelector value.
  if (!hoveringSelector || selectorLock) return false
  
  selectorLock = true

  chosenSelectors.push(hoveringSelector)
  highlightElementsPermanently(hoveringSelector)
  updateSelectedElementsList()
  hoveringSelector = null

  selectorLock = false
  return true
}

function getClassNameOfElement(target) {
  // Do not scrape the inspector tool lol, jic.
  // Since the injection happens after all the events are added
  // there might not be an issue.
  if (target.className === 'netscrape-elem') return null

  // Find the element furthest up with a className.
  // This currently has an upper bound of 10 to prevent going too far up the chain.
  for (let i = 0; i < 10; i++) {
    if (target.className) continue

    // Pick the first parent for now. Seems to work fine.
    target = $(target).parent()[0]
  }
  return target.className
}

function highlightElementsPermanently(sel) {
  $('#element-selector-style-perm').append(`
    .${sel} {
      background-color: #7fffd5 !important;
      border: 1px solid #3100ff;
      border-radius: 3px;
      box-sizing: border-box;
    }
  `)
}

function updateTemporaryHighlighting() {
  $('#element-selector-style-temp').html(hoveringSelector ? `
    .${hoveringSelector} {
      background-color: yellow !important;
      border: 1px solid #yellow;
      border-radius: 3px;
      box-sizing: border-box;
    }
  ` : '')
}

export function updateSelectedElementsList() {
  const li = chosenSelectors.reduce((result, item) => {
    return result + `<li>${item}</li>`
  }, '')

  $('#netscrape-elements-selected').html(
    li ? li : '<li><em>You have not yet selected any data points!</em></li>' 
  );
}

export function onHoverEnter(event) {
  const target = event.target  
  const className = getClassNameOfElement(target)
  if (className != null) hoveringSelector = className
  updateTemporaryHighlighting()
}

export function onHoverExit(event) {
  // On exit, clear the hoveringSelector.
  // If the selector lock is active, do not do anything.
  // On finish the hoveringSelector will be removed anyways.
  if (!selectorLock) hoveringSelector = null

  // There is a chance that the variable is changed during this event call.
  // This will prevent the selector from updating the temporary highlighting
  // again.
  if (!hoveringSelector) updateTemporaryHighlighting()
}

// Behaviors for clicks while in Inspection Tool.
export function onClick(event) {
  const target = event.target
  
  // Make sure the element they're clicking are equivalent to the one they've
  // been hovering, so it's exactly what they wanted.
  if (getClassNameOfElement(target) === hoveringSelector) {
    // Make sure there are no duplicates.
    if (!chosenSelectors.includes(hoveringSelector)) {
      addSelector(hoveringSelector)
    }
  }
}