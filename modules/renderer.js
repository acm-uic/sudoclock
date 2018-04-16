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
    drawNumbers(draw)
}

/**
 * centerCircle(SVG: canvas)
 * Reference function to draw a circle at the center of the SVG.
 * @param {SVG} canvas 
 */
function centerCircle(canvas) {
    let circle = canvas.circle(200).attr({fill: '#a06', cx: window.innerWidth/2, cy: window.innerHeight/2 })
}

/**
 * drawNumbers(SVG: canvas)
 * Creates the reference numbers used to the clock.
 * @param {SVG} canvas 
 */
function drawNumbers(canvas) {
    var oned = 'M170,137 242,24 242,560'
    var twod = 'M68,98c0,0,71-74,183-74s195,49,192,136C370,245,68,560,68,560h376'
    var threed = 'M69,513.4c0,0,60,74,187.6,74.3S445,526,445.6,448.1C446.2,370.3,269,306,257.7,305.7 c13.3,0.3,187.5-64.6,186.9-142.4C444,85.4,383.1,23.4,255.6,23.7C128,24,68,98,68,98'
    var fourd = 'M331,588 331,24 83,306 420,306'
    var fived = 'M445,24H72c0,0,13,94,13,144s-3,129-3,129s364-59,364,151c-1,114-104,140-195,140c-114,0-183-75-183-75'
    var sixd = 'M88,403c0-139,104-166,167-166c103.3,0,167,62.7,167,166s-63.7,185-167,185S88,506.3,88,403 c0,0-10-380,167-380'
    var sevend = 'M88,68L67,23c0,0,322,0,378,0c-58,54.1-125.5,174.7-159.7,310.8C251,470,247,588,247,588'
    var eightd = 'M254,234c129,0,178,86,178,151c0,96.6-78.4,175-175,175S82,481.6,82,385C82,319.8,134,234,254,234 c77,3,126-41,126-87.5C380,78.8,325.2,24,257.5,24S135,78.8,135,146.5C135,197,170,234,254,234z'
    var nined = 'M421.9,208c0,139-104,166-167,166c-103.3,0-167-62.7-167-166s63.7-185,167-185S421.9,104.7,421.9,208 c0,0,10,380-167,380'
    var zerod = 'M281.5,560h-48C177.1,560,131,513.9,131,457.5v-332C131,69.1,177.1,23,233.5,23h48 C337.9,23,384,69.1,384,125.5v332C384,513.9,337.9,560,281.5,560z'
    var one = canvas.path(oned).stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })
    setTimeout(changeNum.bind(null,one, twod), 1000);
    setTimeout(changeNum.bind(null,one, threed), 2000);
    setTimeout(changeNum.bind(null,one, fourd), 3000);
    setTimeout(changeNum.bind(null,one, fived), 4000);
    setTimeout(changeNum.bind(null,one, sixd), 5000);
    setTimeout(changeNum.bind(null,one, sevend), 6000);
    setTimeout(changeNum.bind(null,one, eightd), 7000);
    setTimeout(changeNum.bind(null,one, nined), 8000);
    setTimeout(changeNum.bind(null,one, zerod), 9000);
}

function changeNum(item, to) {
    item.animate(250, '<>', 0).plot(to);
}