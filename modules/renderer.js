//import { SVG } from '../node_modules/svg.js/dist/svg.js'
//TODO: Figure out how to import this module here, rather than having the dependency within the document page.

/**
 * renderer_start(string: cssSelector)
 * Bootstraps the element being used to render the content.
 * Expects a string passed in representing a CSS selector ID.
 * Must already exist on the DOM.
 * @param {string} cssSelector
 */
export function renderer_start(cssSelector) {
    var draw = SVG(cssSelector).size(window.innerWidth, window.innerHeight)
    var rect = draw.rect(100, 100).attr({ fill: '#f06' })
    centerCircle(draw)
}

/**
 * centerCircle(SVG: canvas)
 * Reference function to draw a circle at the center of the SVG.
 * @param {SVG} canvas 
 */
function centerCircle(canvas) {
    let circle = canvas.circle(200).attr({fill: '#a06', cx: window.innerWidth/2, cy: window.innerHeight/2 })
    var one = canvas.path('M480,245 555,137 557,573').stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
    one.animate().plot('M150 100 C 70 20, 120 20, 120 10')
}

/**
 * drawNumbers(SVG: canvas)
 * Creates the reference numbers used to the clock.
 * @param {SVG} canvas 
 */
function drawNumbers(canvas) {

}