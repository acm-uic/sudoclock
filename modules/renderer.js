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
    //centerCircle(draw)
    drawNumbers_HeeboStroke(draw)
    var fnt = new Heebo();
    console.log(fnt.drawNumbers(draw,(window.innerWidth/4),(window.innerHeight/3),'23:59:59'))
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
 * Transitions to each every second.
 * **DEPRECATED FUNCTION** (Although, useful for testing...)
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

/**
 * changeNum(SVG: item, string: to)
 * Helper function to perform number transition.
 * item is the reference to the SVG.
 * to is the SVG path data represented as a string.
 * @param {SVG} item 
 * @param {string} to 
 */
function changeNum(item, to) {
    item.animate(250, '<>', 0).plot(to);
}

/**
 * drawNumbers_Heebo(SVG: canvas)
 * Creates the reference numbers used to the clock.
 * Transitions to each every second.
 * Uses the Heebo Font
 * **DEPRECATED FUNCTION**
 * @param {SVG} canvas 
 */
function drawNumbers_Heebo(canvas) {
    var oned = 'M127.8,299.3V57.1L54.8,84.5V74.2l80.4-29.7h1.9v254.7H127.8z'
    var twod = 'M51.5,299.3v-9.4l83.2-96c15.9-18.4,27.5-34.2,34.7-47.4c7.2-13.2,10.8-25.4,10.8-36.6c0-18.3-5.3-32.6-16-43.1 c-10.6-10.5-26-15.7-46-15.7c-12,0-22.8,2.9-32.5,8.5c-9.7,5.7-17.3,13.6-22.9,23.6c-5.5,10-8.3,21.2-8.3,33.7h-9.4 c0-13.7,3.1-26.3,9.3-37.8c6.2-11.5,14.9-20.6,26-27.3c11.1-6.7,23.7-10.1,37.8-10.1c14.7,0,27.3,2.6,38,7.9 c10.7,5.2,19,12.9,24.8,23.1c5.8,10.2,8.7,22.6,8.7,37.2c0,9.8-2.4,19.9-7.2,30.3c-4.8,10.4-10.8,20.4-18,30.1 c-7.2,9.7-16.2,20.9-27.1,33.7l-73.6,85.8h139.6v9.4H51.5z'
    var threed = 'M184.2,187.1c9.2,10.7,13.9,24.3,13.9,40.8c0,14.7-3.2,27.3-9.7,38c-6.5,10.7-15.4,18.8-26.9,24.4 c-11.5,5.6-24.5,8.4-39.2,8.4c-13.5,0-26.5-2.7-39.1-8.2c-12.6-5.5-22.9-13.8-30.9-24.9c-8-11.2-12-24.8-12-41h9.4 c0,12.3,3.2,23.4,9.5,33.3c6.3,9.9,15,17.6,26.1,23.1c11,5.5,23.4,8.3,37,8.3c14,0,25.9-2.4,35.9-7.2c9.9-4.8,17.5-11.8,22.7-20.9 c5.2-9.1,7.8-20,7.8-32.5c0-19.9-6.6-34.5-19.9-43.9c-13.3-9.4-31.3-14-54.3-14H95.1v-8.5V161h19.4c14.3,0,26.6-2.5,37-7.5 c10.4-5,18.2-11.7,23.6-20c5.3-8.3,8-17.5,8-27.5c0-11-2.2-21-6.7-29.8c-4.5-8.8-11.4-15.9-20.8-21.1c-9.4-5.2-21-7.9-34.8-7.9 c-12.2,0-23.3,2.5-33.3,7.4c-10,4.9-17.9,12-23.6,21.2c-5.8,9.2-8.6,19.9-8.6,32.1h-9.4c0-14.1,3.4-26.4,10.1-37.1 C62.6,60.2,71.7,52,83.1,46.3c11.4-5.7,24-8.5,37.7-8.5c14.4,0,27,2.8,37.9,8.3c10.8,5.5,19.2,13.5,25,23.9 c5.9,10.4,8.8,22.7,8.8,36.7c0,13.4-4.2,25.3-12.7,35.9c-8.5,10.5-20.1,18.1-34.7,22.8C161.9,169.2,175,176.4,184.2,187.1z'
    var fourd = 'M207.8,230h-44v69.3h-9.4V230H31.3v-5.2L152.5,45.3h8.7h2.6v175.3h44V230z M154.4,220.6V56.4l-14.7,24.3L45.9,220.6H154.4z'
    var fived = 'M66.7,43.3h123.9v9.2H75.2L65,154.4c4.9-4.2,12.3-8.1,22.2-11.6c9.9-3.5,20.2-5.3,31.1-5.3c14.7,0,27.7,3.1,39,9.4 c11.3,6.3,20.2,15.4,26.5,27.3c6.3,11.9,9.5,26,9.5,42.1c0,25.9-5.8,46.5-17.4,61.7c-11.6,15.2-29.7,22.8-54.1,22.8 c-13.6,0-25.9-2.6-36.7-7.8c-10.9-5.2-19.7-13-26.5-23.6c-6.8-10.5-10.8-23.5-12.1-39h9.6c1.9,19.8,8.4,34.9,19.6,45.3 c11.2,10.4,26.6,15.6,46.1,15.6c20.7,0,36.2-6.3,46.5-18.8s15.4-31.2,15.4-55.8c0-13.4-2.6-25.4-7.7-35.9 c-5.1-10.6-12.6-18.9-22.4-24.9c-9.8-6-21.5-9-35.2-9c-12.8,0-23.6,1.7-32.5,5.1c-8.8,3.4-16.8,8.5-23.9,15.1l-7.2-2.8L66.7,43.3z'
    var sixd = 'M162.8,139.1c11,7.2,19.5,17,25.3,29.6c5.8,12.6,8.7,26.9,8.7,42.9c0,16.3-3.1,31.1-9.2,44.4 c-6.1,13.3-14.6,23.8-25.5,31.4c-10.9,7.6-23.2,11.4-37.1,11.4c-15.7,0-29.8-3.7-42.4-11s-22.4-17.7-29.6-31.2 c-7.2-13.5-10.7-29.2-10.7-47.1v-29.3c0-32.5,5.3-59.3,16-80.6s25.1-36.9,43.3-46.8c18.2-9.9,38.8-14.9,61.7-14.9h3.3v9.4h-3.3 c-20.2,0-38.5,4.2-54.9,12.7c-16.3,8.5-29.6,21.7-39.7,39.7c-10.1,18-15.7,40.6-16.7,67.8c6.6-11.6,16.2-21.1,28.8-28.3 c12.6-7.2,26.8-10.8,42.6-10.8C138.6,128.3,151.8,131.9,162.8,139.1z M157.9,278.8c9.5-7.2,16.8-16.7,21.9-28.6 c5.1-11.9,7.7-24.8,7.7-38.6c0-14.1-2.4-26.7-7.3-37.8c-4.9-11.1-12.2-19.9-22-26.3c-9.8-6.5-21.8-9.7-35.9-9.7 c-10.7,0-21,2.2-31,6.5c-9.9,4.3-18.4,10.2-25.5,17.6c-7,7.4-11.7,15.8-13.9,24.9v22.5c0,15.9,3.1,30,9.3,42.1 c6.2,12.2,14.9,21.5,26,28.2c11.1,6.6,23.8,9.9,37.9,9.9C137.5,289.5,148.4,286,157.9,278.8z'
    var sevend = 'M93.5,299.3h-9.6L194.6,54.7H43.1v-9.4h162.3v5.9L93.5,299.3z'
    var eightd = 'M175.4,180.6c8.3,6,14.7,13.4,19.3,22.1c4.6,8.7,6.9,18.2,6.9,28.5c0,14.9-3.5,27.6-10.6,38c-7.1,10.5-16.7,18.3-29,23.6 c-12.2,5.3-25.9,7.9-41.2,7.9c-15.6,0-29.5-2.6-41.7-7.9c-12.2-5.3-21.8-13.1-28.9-23.6c-7-10.4-10.6-23.1-10.6-38.1 c0-10.4,2.3-19.8,6.8-28.4c4.5-8.6,10.9-15.9,19-22c8.1-6,17.5-10.5,28.1-13.4c-14.2-4.3-25.5-11.7-34-22.3 c-8.5-10.6-12.7-23-12.7-37.2c0-14.3,3.2-26.6,9.5-36.8c6.3-10.2,15-18,26.1-23.3c11-5.3,23.6-7.9,37.7-7.9 c13.8,0,26.4,2.6,37.7,7.9C169.1,53,178,60.8,184.5,71c6.5,10.2,9.8,22.5,9.8,36.8c0,14.2-4.3,26.5-13,37.1 c-8.7,10.5-20,18-34.1,22.4C157.8,170.1,167.2,174.5,175.4,180.6z M157.1,284.4c10.8-4.7,19.3-11.4,25.6-20.3 c6.2-8.9,9.3-19.6,9.3-32c0-11.9-3.2-22.4-9.5-31.5c-6.3-9.1-14.9-16.2-25.8-21.1c-10.9-4.9-22.9-7.4-36.2-7.4 c-13.4,0-25.5,2.5-36.4,7.4c-10.9,4.9-19.4,12-25.6,21c-6.2,9.1-9.3,19.6-9.3,31.6c0,12.4,3.1,23.1,9.3,32.1 c6.2,9,14.7,15.7,25.6,20.3c10.8,4.6,23.1,6.9,36.8,6.9C134.2,291.4,146.3,289,157.1,284.4z M64.6,136.4 c5.5,8.4,13.1,14.9,22.9,19.5c9.7,4.5,20.7,6.8,33.1,6.8c12,0,22.9-2.3,32.6-6.8c9.8-4.5,17.5-11,23.2-19.5 c5.7-8.4,8.5-18.2,8.5-29.4c0-11-2.9-21-8.6-29.7c-5.8-8.8-13.6-15.6-23.5-20.6c-9.9-4.9-20.8-7.4-32.6-7.4 c-12.2,0-23.1,2.3-32.8,7c-9.7,4.7-17.2,11.3-22.8,20.1c-5.5,8.7-8.3,19-8.3,30.7C56.3,118.1,59,127.9,64.6,136.4z'
    var nined = 'M176.2,63.1c14,16.9,20.9,41.8,20.9,74.7v28.4c0,42.9-9.6,75.7-28.9,98.5c-19.3,22.7-48.1,34.1-86.4,34.1h-5.9l0.3-9.4h5.6 c35.5,0,62-10.4,79.6-31.3c17.6-20.9,26.3-50.2,26.3-88v-1c-6.4,13.7-16.1,24.6-29,32.6c-12.9,8-27.5,12-43.6,12 c-14.4,0-27.2-3.9-38.4-11.6c-11.2-7.7-19.8-18.1-25.8-31.2c-6-13.1-9.1-27.3-9.1-42.7c0-16.4,3.1-31.5,9.4-45.3 C57.5,69.1,66.3,58.1,77.7,50c11.3-8.1,24.3-12.2,38.8-12.2C142.3,37.8,162.2,46.2,176.2,63.1z M150.2,196 c10.1-5.5,18.3-12.4,24.5-20.9c6.2-8.5,10.6-17.3,13-26.5v-10.6c0-29.8-6.1-52.3-18.4-67.7c-12.3-15.4-29.6-23-52.1-23 c-13,0-24.5,3.8-34.5,11.4c-10,7.6-17.7,17.6-23.2,30c-5.5,12.4-8.2,25.6-8.2,39.5c0,13.3,2.6,25.7,7.7,37.3 c5.1,11.6,12.5,21,22.2,28.1c9.7,7.1,21,10.6,33.9,10.6C128.3,204.2,140,201.5,150.2,196z'
    var zerod = 'M186.5,251c-5.8,16-14.4,28.3-25.7,36.9c-11.3,8.6-25.1,12.9-41.3,12.9c-16.1,0-29.8-4.3-41.3-12.9 c-11.5-8.6-20.2-20.9-26.1-37s-8.9-35.1-8.9-57.2v-46.8c0-22.1,2.9-41.2,8.8-57.3c5.9-16.1,14.5-28.5,25.9-37.1 c11.4-8.6,25.1-12.9,41.2-12.9c16.2,0,29.9,4.3,41.3,12.9c11.4,8.6,20,21,25.9,37.1c5.9,16.1,8.8,35.2,8.8,57.3v46.8 C195.2,215.9,192.3,235,186.5,251z M178.4,95.3c-4.9-14.7-12.4-26-22.3-34.1c-9.9-8.1-22.2-12.1-36.9-12.1s-26.9,4-36.8,12.1 C72.4,69.2,65,80.6,60.1,95.3c-4.9,14.7-7.4,31.9-7.4,51.6v46.4c0,19.4,2.5,36.5,7.5,51.2c5,14.7,12.5,26.2,22.5,34.5 c10,8.3,22.3,12.4,36.8,12.4c14.7,0,26.9-4.1,36.8-12.4c9.9-8.3,17.3-19.7,22.2-34.5c4.9-14.7,7.3-31.8,7.3-51.2v-46.4 C185.8,127.1,183.3,109.9,178.4,95.3z'
    var one = canvas.path(oned).fill({ color: '#f06' })
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

/**
 * drawNumbers_HeeboStroke(SVG: canvas)
 * Creates the reference numbers used to the clock.
 * Transitions to each every second.
 * Uses the Heebo Font
 * **DEPRECATED FUNCTION**
 * @param {SVG} canvas 
 */
function drawNumbers_HeeboStroke(canvas) {
    var oned = 'M55,79 133,50 132,299'
    var twod = 'M203.5,295.5h-152c0,0,131.8-125,133.7-186.2c1.2-35-20.5-62.8-67.7-62.8 C78.6,46.5,50,78.9,50,117'
    var threed = 'M44.3,224.6c0,51.9,50.5,70.1,77,69.9c25.9-0.3,72-11.3,72-67S132.5,167,95.1,167 c37.4,0,91.4-12,93.1-59.1c0.8-21.3-8.5-66.2-69-66.2c-64.7,0-69,66.2-69,66.2'
    var fourd = 'M159.3,299.3 159.3,45.3 37,224.8 207.8,225.3'
    var fived = 'M190.6,47.8H71.3L59.8,161.3c14.5-12.4,40.7-19.1,60-19.5c51.8,2.3,69.5,38.8,68.5,84.3 c0,38.3-23.5,70.8-68.5,70.8c-48.5,0-68.2-38.8-67.7-66.3'
    var sixd = 'M166.7,42.3c-26.9,0-71.4,10-92.9,40c-28,39.1-27.5,73.5-26.8,97.5S43.3,251,74.8,276 c31.8,25.3,59,19.8,77.3,11.5s39.8-33.5,40.5-76.8s-28-70.5-50.8-76.3c-19-4.8-47.5-1.5-67.5,13.8c-17.1,13-27.2,35-27.2,35'
    var sevend = 'M43.1,50 200.3,50 89,299.3'
    var eightd = 'M120.6,44.3c42.8,0,68.4,27.3,68.4,61.6c0,33.5-25.3,62.1-68.3,62.1s-76.3,21.3-76.3,69.7 c0,36.7,40.3,58.3,76.3,58.3c29.7,0,76-11.9,76-64.3s-56.3-64.7-76-64.7S51,152.8,51,105.9S89.9,44.3,120.6,44.3z'
    var nined = 'M73.4,295.8c26.9,0,71.4-10,92.9-40c28-39.1,27.5-73.5,26.8-97.5s3.7-71.2-27.8-96.3 c-31.8-25.3-59-19.8-77.3-11.5S48.3,84,47.6,127.3s28,70.5,50.7,76.3c19,4.8,47.5,1.5,67.5-13.8c17.1-13,27.2-35,27.2-35'
    var zerod = 'M119.2,44.5c48.3,0,61.9,41.8,66.6,55.5c8,21.5,6.9,104.3,1,133.5C181,262,164.4,297,119.2,297 s-67-45.4-69.2-74.5c-2.3-31-4.4-101.2,3.7-123C62.2,76.4,75.9,45.5,119.2,44.5z'
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

/**
 * Font Class
 * Base font class used to provide basic scaffolding for other fonts.
 */
class Font {
    /**
     * Font Class constructor
     * Initializes instance with the base font paths.
     */
    constructor() {
        this.oned = 'M170,137 242,24 242,560'
        this.twod = 'M68,98c0,0,71-74,183-74s195,49,192,136C370,245,68,560,68,560h376'
        this.threed = 'M69,513.4c0,0,60,74,187.6,74.3S445,526,445.6,448.1C446.2,370.3,269,306,257.7,305.7 c13.3,0.3,187.5-64.6,186.9-142.4C444,85.4,383.1,23.4,255.6,23.7C128,24,68,98,68,98'
        this.fourd = 'M331,588 331,24 83,306 420,306'
        this.fived = 'M445,24H72c0,0,13,94,13,144s-3,129-3,129s364-59,364,151c-1,114-104,140-195,140c-114,0-183-75-183-75'
        this.sixd = 'M88,403c0-139,104-166,167-166c103.3,0,167,62.7,167,166s-63.7,185-167,185S88,506.3,88,403 c0,0-10-380,167-380'
        this.sevend = 'M88,68L67,23c0,0,322,0,378,0c-58,54.1-125.5,174.7-159.7,310.8C251,470,247,588,247,588'
        this.eightd = 'M254,234c129,0,178,86,178,151c0,96.6-78.4,175-175,175S82,481.6,82,385C82,319.8,134,234,254,234 c77,3,126-41,126-87.5C380,78.8,325.2,24,257.5,24S135,78.8,135,146.5C135,197,170,234,254,234z'
        this.nined = 'M421.9,208c0,139-104,166-167,166c-103.3,0-167-62.7-167-166s63.7-185,167-185S421.9,104.7,421.9,208 c0,0,10,380-167,380'
        this.zerod = 'M281.5,560h-48C177.1,560,131,513.9,131,457.5v-332C131,69.1,177.1,23,233.5,23h48 C337.9,23,384,69.1,384,125.5v332C384,513.9,337.9,560,281.5,560z'
        this.numberArr = [this.zerod, this.oned, this.twod, this.threed, this.fourd, this.fived, this.sixd, this.sevend, this.eightd, this.nined]
        this.kerningArr = [200, 100, 50, 50, 50, 75, 50, 80, 50, 50]
    }

    /**
     * getNumber(Number: num)
     * Returns the path data for a given number.
     * num must be between 0 - 9, inclusive.
     * @param {number} num 
     */
    getNumber(num) {
        if (num > 9 || num < 0) {
            return '';
        }
        return this.numberArr[num];
    }

    /**
     * drawNumbers(SVG: canvas, Number: sx, Number: sy, String: toDraw)
     * Draws the numbers spaced out by kerning. 
     * sx & sy specify the starting point the numbers should be drawn at.
     * toDraw is a string representing the numbers to draw.
     * @param {SVG} canvas 
     * @param {Number} sx
     * @param {Number} sy
     * @param {String} toDraw
     */
    drawNumbers(canvas, sx, sy, toDraw) {
        var elems = [];
        var x = sx;
        var y = sy;
        for(var i = 0; i < toDraw.length; i++) {
            if (toDraw.charAt(i) === ':') {
                elems.push(canvas.path(this.numberArr[10]).fill({color: '#fff'}).move(x,y+30))
                x = x + this.kerningArr[10]
            } else {
            elems.push(canvas.path(this.numberArr[parseInt(toDraw.charAt(i))]).fill({opacity: 0}).stroke({ color: '#fff', width: 4, linecap: 'round', linejoin: 'round' }).move(x,y))
            x = x + this.kerningArr[parseInt(toDraw.charAt(i))]
            }
        }
        return elems
    }

    /**
     * transitionNumbers(SVG: canvas, Number: sx, Number: sy, Array[SVG.Element]: curDisplay, String: toDraw)
     * Transitions from the previous set of displayed glyphs to the next set, while applying appropriate animations.
     * sx & sy specify the starting point the numbers should be drawn at.
     * curDisplay is the current array of SVG.Elements, each representing a separate glyph in the display.
     * toDraw is the new text that the function should transition to.
     * @param {SVG} canvas
     * @param {Number} sx
     * @param {Number} sy
     * @param {Array[SVG.Element]} curDisplay
     * @param {String} toDraw
     */
    transitionNumbers(canvas, sx, sy, curDisplay, toDraw) {
        var elems = []
        var x = sx
        var y = sy
        for (var i = 0; i < toDraw.length; i++) {
            if (toDraw.charAt(i) === ':') {
                elems.push(canvas.path(this.numberArr[10]).fill({color: '#fff'}).move(x,y+30))
                x = x + this.kerningArr[10]
            } else {
            elems.push(canvas.path(this.numberArr[parseInt(toDraw.charAt(i))]).fill({opacity: 0}).stroke({ color: '#fff', width: 4, linecap: 'round', linejoin: 'round' }).move(x,y))
            x = x + this.kerningArr[parseInt(toDraw.charAt(i))]
            }
        }
        return elems
    }
}

/**
 * Font class defining the Heebo font.
 */
class Heebo extends Font {
    /**
     * Heebo Font Constructor
     */
    constructor() {
        super()
        this.oned = 'M55,79 133,50 132,299'
        this.twod = 'M203.5,295.5h-152c0,0,131.8-125,133.7-186.2c1.2-35-20.5-62.8-67.7-62.8 C78.6,46.5,50,78.9,50,117'
        this.threed = 'M44.3,224.6c0,51.9,50.5,70.1,77,69.9c25.9-0.3,72-11.3,72-67S132.5,167,95.1,167 c37.4,0,91.4-12,93.1-59.1c0.8-21.3-8.5-66.2-69-66.2c-64.7,0-69,66.2-69,66.2'
        this.fourd = 'M159.3,299.3 159.3,45.3 37,224.8 207.8,225.3'
        this.fived = 'M190.6,47.8H71.3L59.8,161.3c14.5-12.4,40.7-19.1,60-19.5c51.8,2.3,69.5,38.8,68.5,84.3 c0,38.3-23.5,70.8-68.5,70.8c-48.5,0-68.2-38.8-67.7-66.3'
        this.sixd = 'M166.7,42.3c-26.9,0-71.4,10-92.9,40c-28,39.1-27.5,73.5-26.8,97.5S43.3,251,74.8,276 c31.8,25.3,59,19.8,77.3,11.5s39.8-33.5,40.5-76.8s-28-70.5-50.8-76.3c-19-4.8-47.5-1.5-67.5,13.8c-17.1,13-27.2,35-27.2,35'
        this.sevend = 'M43.1,50 200.3,50 89,299.3'
        this.eightd = 'M120.6,44.3c42.8,0,68.4,27.3,68.4,61.6c0,33.5-25.3,62.1-68.3,62.1s-76.3,21.3-76.3,69.7 c0,36.7,40.3,58.3,76.3,58.3c29.7,0,76-11.9,76-64.3s-56.3-64.7-76-64.7S51,152.8,51,105.9S89.9,44.3,120.6,44.3z'
        this.nined = 'M73.4,295.8c26.9,0,71.4-10,92.9-40c28-39.1,27.5-73.5,26.8-97.5s3.7-71.2-27.8-96.3 c-31.8-25.3-59-19.8-77.3-11.5S48.3,84,47.6,127.3s28,70.5,50.7,76.3c19,4.8,47.5,1.5,67.5-13.8c17.1-13,27.2-35,27.2-35'
        this.zerod = 'M119.2,44.5c48.3,0,61.9,41.8,66.6,55.5c8,21.5,6.9,104.3,1,133.5C181,262,164.4,297,119.2,297 s-67-45.4-69.2-74.5c-2.3-31-4.4-101.2,3.7-123C62.2,76.4,75.9,45.5,119.2,44.5z'
        this.colond = 'M62.5,247.9c1.9,1.9,2.9,4.2,2.9,6.9c0,2.7-1,4.9-2.9,6.8c-1.9,1.9-4.2,2.8-6.9,2.8c-2.7,0-4.9-0.9-6.8-2.8 c-1.9-1.9-2.8-4.1-2.8-6.8c0-2.7,0.9-5,2.8-6.9c1.9-1.9,4.1-2.9,6.8-2.9C58.3,245,60.6,245.9,62.5,247.9z M63.3,80 c1.9,1.9,2.9,4.2,2.9,6.9c0,2.7-1,4.9-2.9,6.8c-1.9,1.9-4.2,2.8-6.9,2.8c-2.7,0-4.9-0.9-6.8-2.8c-1.9-1.9-2.8-4.1-2.8-6.8 c0-2.7,0.9-5,2.8-6.9c1.9-1.9,4.1-2.9,6.8-2.9C59.1,77.1,61.4,78.1,63.3,80z'
        this.numberArr = [this.zerod, this.oned, this.twod, this.threed, this.fourd, this.fived, this.sixd, this.sevend, this.eightd, this.nined, this.colond]
        this.kerningArr = [170, 100, 160, 165, 190, 155, 150, 160, 160, 165, 50]
    }

}