import $ from 'jquery'

const s = {
  accentColor: '#1C858E',
  accentSecondaryColor: '#49BCB1',
  accentMutedColor: '#D13C6B',
  accentMutedSecondaryColor: '#FF5686',
  whiteColor: '#fff',
  mutedColor: '#eee',
  printColor: '#111',

  spacing: '20px',
  roundedCorner: '0.3rem',
  interactionSize: '4.4rem',

  fontWeightBlack: 900,
  fontWeightNormal: 400,
}

const getDialogStyle = `
  <style>
    .netscrape-dialog * {
      animation: none !important;
      animation-delay: 0;
      animation-direction: normal;
      animation-duration: 0;
      animation-fill-mode: none;
      animation-iteration-count: 1;
      animation-name: none;
      animation-play-state: running;
      animation-timing-function: ease;
      backface-visibility: visible;
      background: 0;
      background-attachment: scroll;
      background-clip: border-box;
      background-color: transparent;
      background-image: none;
      background-origin: padding-box;
      background-position: 0 0;
      background-position-x: 0;
      background-position-y: 0;
      background-repeat: repeat;
      background-size: auto auto;
      border: 0;
      border-style: none;
      border-width: medium;
      border-color: inherit;
      border-bottom: 0;
      border-bottom-color: inherit;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-style: none;
      border-bottom-width: medium;
      border-collapse: separate;
      border-image: none;
      border-left: 0;
      border-left-color: inherit;
      border-left-style: none;
      border-left-width: medium;
      border-radius: 0;
      border-right: 0;
      border-right-color: inherit;
      border-right-style: none;
      border-right-width: medium;
      border-spacing: 0;
      border-top: 0;
      border-top-color: inherit;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top-style: none;
      border-top-width: medium;
      bottom: auto;
      box-shadow: none;
      box-sizing: content-box;
      caption-side: top;
      clear: none;
      clip: auto;
      color: inherit;
      columns: auto;
      column-count: auto;
      column-fill: balance;
      column-gap: normal;
      column-rule: medium none currentColor;
      column-rule-color: currentColor;
      column-rule-style: none;
      column-rule-width: none;
      column-span: 1;
      column-width: auto;
      content: normal;
      counter-increment: none;
      counter-reset: none;
      cursor: auto;
      direction: ltr;
      empty-cells: show;
      float: none;
      font: normal;
      font-family: inherit;
      font-size: medium;
      font-style: normal;
      font-variant: normal;
      font-weight: normal;
      height: auto;
      hyphens: none;
      left: auto;
      letter-spacing: normal;
      line-height: normal;
      list-style: none;
      list-style-image: none;
      list-style-position: outside;
      list-style-type: disc;
      margin: 0;
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      max-height: none;
      max-width: none;
      min-height: 0;
      min-width: 0;
      opacity: 1;
      orphans: 0;
      outline: 0;
      outline-color: invert;
      outline-style: none;
      outline-width: medium;
      overflow: visible;
      overflow-x: visible;
      overflow-y: visible;
      padding: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      page-break-after: auto;
      page-break-before: auto;
      page-break-inside: auto;
      perspective: none;
      perspective-origin: 50% 50%;
      position: static;
      right: auto;
      tab-size: 8;
      table-layout: auto;
      text-align: left;
      text-align-last: auto;
      text-decoration: none;
      text-decoration-color: inherit;
      text-decoration-line: none;
      text-decoration-style: solid;
      text-indent: 0;
      text-shadow: none;
      text-transform: none;
      top: auto;
      transform: none;
      transform-style: flat;
      transition: none;
      transition-delay: 0s;
      transition-duration: 0s;
      transition-property: none;
      transition-timing-function: ease;
      unicode-bidi: normal;
      vertical-align: baseline;
      visibility: visible;
      white-space: normal;
      widows: 0;
      width: auto;
      word-spacing: normal;
      z-index: auto;
    }

    .netscrape-elem {
      font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
      font-weight: ${s.fontWeightNormal};
      font-size: 16px;
    }

    .netscrape-elem h1 {
      color: ${s.whiteColor};
      font-size: 40px;
      font-weight: ${s.fontWeightBlack};
      margin-bottom: 0;
      padding-top: 10px;
      padding-left: ${s.spacing};
    }

    .netscrape-elem h2 {
      color: ${s.whiteColor};
      font-size: 22px;
      font-weight: ${s.fontWeightBlack};
      margin-bottom: 10px;
      margin-top: 0;
      padding-left: ${s.spacing};
    }

    .netscrape-dialog {
      background-color: ${s.accentMutedColor};
      border-radius: 0 0 ${s.roundedCorner} ${s.roundedCorner};
      height: 500px;
      position: fixed;
      opacity: 0;
      right: ${s.interactionSize};
      top: -500px;
      width: 360px;
      z-index: 2147483647;
    }

    .netscrape-dialog-content {
      height: 100%;
      position: relative;
    }

    .netscrape-body {
      background-color: ${s.whiteColor};
      height: 300px;
      margin-left: ${s.spacing};
      margin-right: ${s.spacing};
      padding: ${s.spacing};
    }

    .netscrape-elements-selected {
      height: 210px;
      margin-left: 0;
      margin-bottom: 10px;
      padding-left: 30px;
      padding-top: 10px;
      overflow-y: scroll;
    }

    .netscrape-dialog-toggle {
      align-items: center;
      background-color: ${s.accentColor};
      border-radius: 0 0 ${s.roundedCorner} ${s.roundedCorner};
      bottom: 0;
      display: flex;
      height: 40px;
      position: absolute;
      text-align: center;
      width: 100%;
    }

    .netscrape-dialog-toggle span {
      color: ${s.whiteColor};
      margin: 0 auto;
    }

    .netscrape-elem .btn {
      background-color: ${s.whiteColor};
      border-radius: 30px;
      border: 1px solid ${s.mutedColor};
      color: ${s.printColor};
      display: inline-block;
      text-decoration: none;
      font-size: 16px;
      font-weight: ${s.fontWeightBlack};
      margin-right: ${s.spacing};
      padding: 15px 60px 15px 15px;
    }

    .netscrape-elem .btn:last-child {
      margin-right: 0;
    }

    .netscrape-elem .btn:hover {
      background-color: ${s.mutedColor};
    }

    .netscrape-elem .btn:disabled,
    .netscrape-elem .btn[disabled] {
      background-color: ${s.mutedColor};
      cursor: not-allowed;
    }

    .netscrape-elem .btn-accent {
      background-color: ${s.accentColor};
      border: 1px solid ${s.mutedColor};
      color: ${s.whiteColor};
    }

    .netscrape-elem .btn-accent:hover {
      background-color: ${s.accentMutedColor};
    }

    .netscrape-elem .btn-accent:disabled,
    .netscrape-elem .btn-accent[disabled] {
      background-color: ${s.mutedColor};
      border: 1px solid ${s.accentMutedSecondaryColor};
      color: ${s.accentMutedColor};
      text-decoration: line-through;
    }
  </style>
`

const getDialogHTML = `
  <div class="netscrape-dialog netscrape-elem" id="netscrape-dialog">
    <div class="netscrape-dialog-content">
      <h1>Netscrape</h1>
      <h2>Inspector Tool</h2>
      <div class="netscrape-body">
        <p>You have selected:</p>
        <ol class="netscrape-elements-selected" id="netscrape-elements-selected"></ol>
        <button class="btn btn-accent">I'm Done!</button>
      </div>
      <div class="netscrape-dialog-toggle" id="netscrape-dialog-toggle">
        <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" height="32px" style="fill: white; margin: 0 auto;">
          <path d="M23 13H1a.5.5 0 0 1 0-1h22a.5.5 0 0 1 0 1z"/>
        </svg>
      </div>
    </div>
  </div>
`

let showDialog = true

export function injectDialog() {
  // Inject styles
  const head = $('head')
  head.append(getDialogStyle)
  head.append('<style id="element-selector-style-temp"></style>')
  head.append('<style id="element-selector-style-perm"></style>')

  // Inject dialog
  const injectedDialog = $('body').append(getDialogHTML)

  // Append netscrape-elem class to all children for identification
  $('#netscrape-dialog').find('*').addClass('netscrape-elem')

  // Add show/hide toggle behavior
  $('#netscrape-dialog-toggle').click(() => {
    if (showDialog) {
      showDialog = false
      $('#netscrape-dialog').animate({
        top: '-460px',
        opacity: 0.75,
      })
      
    } else {
      showDialog = true
      $('#netscrape-dialog').animate({
        top: '0',
        opacity: 1,
      })
    }
  })

  // Slide in animation.
  $('#netscrape-dialog').animate({
    top: '0',
    opacity: 1,
  })

  //Moving horizontally
  var contextmenu = document.getElementById('netscrape-dialog');
  var initX, initY, mousePressX;

  document.getElementById('netscrape-dialog-toggle').addEventListener('mousedown', function (event) {

    initX =  contextmenu.offsetLeft;
    initY =  contextmenu.offsetTop;
    mousePressX = event.clientX;

    document.getElementById('netscrape-dialog-toggle').addEventListener('mousemove', repositionElement, false);

    window.addEventListener('mouseup', function () {
      document.getElementById('netscrape-dialog-toggle').removeEventListener('mousemove', repositionElement, false);
    }, false);

  }, false);

  function repositionElement(event) {
     document.getElementById('netscrape-dialog').style.left = initX + event.clientX - mousePressX + 'px';
  }
}