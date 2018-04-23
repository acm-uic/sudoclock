// import { SVG } from '../node_modules/svg.js/dist/svg.js';
// TODO: Figure out how to import this module here, rather than having the dependency within the document page.

/**
 * renderer_start(string: cssSelector)
 * Bootstraps the element being used to render the content.
 * Expects a string passed in representing a CSS selector ID.
 * Must already exist on the DOM.
 * @param {string} cssSelector
 */
export function renderer_start(cssSelector) {
    const draw = SVG(cssSelector).size(window.innerWidth, window.innerHeight);
    // let rect = draw.rect(100, 100).attr({ fill: '#f06' })
    // centerCircle(draw)
    // drawNumbers_HeeboStroke(draw)
    const fnt = new Heebo();
    const disp = fnt.drawNumbers(draw,(window.innerWidth/4),(window.innerHeight/3),'20:59:59');
    console.log(disp);
    // fnt.transitionNumbers(draw, (window.innerWidth/4), (window.innerHeight/3), disp, curTimeString())
    setInterval(function() { updateClock(fnt, draw, disp); }, 1000);
}

function updateClock(font, draw, disp) {
    font.transitionNumbers(draw, (window.innerWidth/4), (window.innerHeight/3), disp, curTimeString());
}

/**
 * centerCircle(SVG: canvas)
 * Reference function to draw a circle at the center of the SVG.
 * @param {SVG} canvas 
 */
/*
function centerCircle(canvas) {
    let circle = canvas.circle(200).attr({fill: '#a06', cx: window.innerWidth/2, cy: window.innerHeight/2 });
}
*/

/**
 * changeNum(SVG: item, string: to)
 * Helper function to perform number transition.
 * item is the reference to the SVG.
 * to is the SVG path data represented as a string.
 * @param {SVG} item 
 * @param {string} to 
 */
function changeNum(item, to) {
    return item.animate(250, '<>', 0).plot(to);
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
        this.oned = 'M170,137 242,24 242,560';
        this.twod = 'M68,98c0,0,71-74,183-74s195,49,192,136C370,245,68,560,68,560h376';
        this.threed = 'M69,513.4c0,0,60,74,187.6,74.3S445,526,445.6,448.1C446.2,' +
                        '370.3,269,306,257.7,305.7 c13.3,0.3,187.5-64.6,' + 
                        '186.9-142.4C444,85.4,383.1,23.4,255.6,23.7C128,24,68,98,68,98';
        this.fourd = 'M331,588 331,24 83,306 420,306';
        this.fived = 'M445,24H72c0,0,13,94,13,144s-3,129-3,129s364-59,364,' + 
                        '151c-1,114-104,140-195,140c-114,0-183-75-183-75';
        this.sixd = 'M88,403c0-139,104-166,167-166c103.3,0,167,62.7,167,' +
                        '166s-63.7,185-167,185S88,506.3,88,403 c0,0-10-380,167-380';
        this.sevend = 'M88,68L67,23c0,0,322,0,378,0c-58,54.1-125.5,174.7-159.7,' +
                        '310.8C251,470,247,588,247,588';
        this.eightd = 'M254,234c129,0,178,86,178,151c0,96.6-78.4,175-175,175S82,' +
                        '481.6,82,385C82,319.8,134,234,254,234 c77,3,126-41,' +
                        '126-87.5C380,78.8,325.2,24,257.5,24S135,78.8,135,' +
                        '146.5C135,197,170,234,254,234z';
        this.nined = 'M421.9,208c0,139-104,166-167,166c-103.3,0-167-62.7-167-166s63.7-185,' +
                        '167-185S421.9,104.7,421.9,208 c0,0,10,380-167,380';
        this.zerod = 'M281.5,560h-48C177.1,560,131,513.9,131,457.5v-332C131,69.1,177.1,' +
                        '23,233.5,23h48 C337.9,23,384,69.1,384,125.5v332C384,513.9,337.9,560,281.5,560z';
        this.numberArr = [this.zerod, this.oned, this.twod, this.threed, 
            this.fourd, this.fived, this.sixd, this.sevend, 
            this.eightd, this.nined,];
        this.kerningArr = [200, 100, 50, 50, 50, 75, 50, 80, 50, 50,];
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
        let elems = [];
        let x = sx;
        let y = sy;
        for(let i = 0; i < toDraw.length; i++) {
            if (toDraw.charAt(i) === ':') {
                elems.push(
                    canvas.path(this.numberArr[10])
                        .fill({color: '#fff',})
                        .move(x,y+30)
                );
                x = x + this.kerningArr[10];
            } else {
                elems.push(
                    canvas.path(
                        this.numberArr[parseInt(toDraw.charAt(i))]
                    ).fill({opacity: 0,})
                        .stroke({ color: '#fff', width: 4, linecap: 'round', linejoin: 'round', })
                        .move(x,y));
                x = x + this.kerningArr[parseInt(toDraw.charAt(i))];
            }
        }
        return elems;
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
        let elems = [];
        let x = sx;
        let y = sy;
        // Loop through the string to-be drawn and update the existing display.
        for (let i = 0; i < toDraw.length; i++) {
            if (toDraw.charAt(i) === ':') {
                elems.push(
                    changeNum(curDisplay[i], this.numberArr[10])
                        .fill({color: '#fff', opacity: 1,})
                        .stroke({ opacity: 0,})
                        .move(x,y+30)
                );
                x = x + this.kerningArr[10];
            } else {
                elems.push(
                    changeNum(curDisplay[i], this.numberArr[parseInt(toDraw.charAt(i))])
                        .fill({opacity: 0,})
                        .stroke({ color: '#fff', width: 4, linecap: 'round', linejoin: 'round', })
                        .move(x,y)
                );
                x = x + this.kerningArr[parseInt(toDraw.charAt(i))];
            }
        }
        // If length of curDisplay does not match toDraw's length, match to toDraw.
        return elems;
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
        super();
        this.oned = 'M55,79 133,50 132,299';
        this.twod = 'M203.5,295.5h-152c0,0,131.8-125,133.7-186.2c1.2-35-20.5-62.8-67.7-62.8 C78.6,46.5,50,78.9,50,117';
        this.threed = 'M44.3,224.6c0,51.9,50.5,70.1,77,69.9c25.9-0.3,72-11.3,'+
            '72-67S132.5,167,95.1,167 c37.4,0,91.4-12,93.1-59.1c0.8-21.3-8.5-66.2-69-66.2c-64.7,0-69,66.2-69,66.2';
        this.fourd = 'M159.3,299.3 159.3,45.3 37,224.8 207.8,225.3';
        this.fived = 'M190.6,47.8H71.3L59.8,161.3c14.5-12.4,40.7-19.1,60-19.5c51.8,'+
            '2.3,69.5,38.8,68.5,84.3 c0,38.3-23.5,70.8-68.5,70.8c-48.5,0-68.2-38.8-67.7-66.3';
        this.sixd = 'M166.7,42.3c-26.9,0-71.4,10-92.9,40c-28,39.1-27.5,73.5-26.8,'+
            '97.5S43.3,251,74.8,276 c31.8,25.3,59,19.8,77.3,11.5s39.8-33.5,'+
            '40.5-76.8s-28-70.5-50.8-76.3c-19-4.8-47.5-1.5-67.5,13.8c-17.1,13-27.2,35-27.2,35';
        this.sevend = 'M43.1,50 200.3,50 89,299.3';
        this.eightd = 'M120.6,44.3c42.8,0,68.4,27.3,68.4,61.6c0,33.5-25.3,'+
            '62.1-68.3,62.1s-76.3,21.3-76.3,69.7 c0,36.7,40.3,58.3,76.3,'+
            '58.3c29.7,0,76-11.9,76-64.3s-56.3-64.7-76-64.7S51,152.8,51,'+
            '105.9S89.9,44.3,120.6,44.3z';
        this.nined = 'M73.4,295.8c26.9,0,71.4-10,92.9-40c28-39.1,27.5-73.5,'+
            '26.8-97.5s3.7-71.2-27.8-96.3 c-31.8-25.3-59-19.8-77.3-11.5S48.3,'+
            '84,47.6,127.3s28,70.5,50.7,76.3c19,4.8,47.5,1.5,67.5-13.8c17.1-13,27.2-35,27.2-35';
        this.zerod = 'M119.2,44.5c48.3,0,61.9,41.8,66.6,55.5c8,21.5,6.9,104.3,'+
            '1,133.5C181,262,164.4,297,119.2,297 s-67-45.4-69.2-74.5c-2.3-31-4.4-101.2,'+
            '3.7-123C62.2,76.4,75.9,45.5,119.2,44.5z';
        this.colond = 'M62.5,247.9c1.9,1.9,2.9,4.2,2.9,6.9c0,2.7-1,4.9-2.9,'+
            '6.8c-1.9,1.9-4.2,2.8-6.9,2.8c-2.7,0-4.9-0.9-6.8-2.8 c-1.9-1.9-2.8-4.1-2.8-6.8c0-2.7,'+
            '0.9-5,2.8-6.9c1.9-1.9,4.1-2.9,6.8-2.9C58.3,245,60.6,245.9,'+
            '62.5,247.9z M63.3,80 c1.9,1.9,2.9,4.2,2.9,6.9c0,2.7-1,4.9-2.9,'+
            '6.8c-1.9,1.9-4.2,2.8-6.9,2.8c-2.7,0-4.9-0.9-6.8-2.8c-1.9-1.9-2.8-4.1-2.8-6.8 c0-2.7,'+
            '0.9-5,2.8-6.9c1.9-1.9,4.1-2.9,6.8-2.9C59.1,77.1,61.4,78.1,63.3,80z';
        this.numberArr = [this.zerod, this.oned, this.twod, this.threed, 
            this.fourd, this.fived, this.sixd, this.sevend, this.eightd, this.nined, this.colond,];
        this.kerningArr = [170, 100, 160, 165, 190, 155, 150, 160, 160, 165, 50,];
    }

}

/**
 * curTimeString()
 * Returns a string of the current time string.
 */
function curTimeString() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    let strTime = hours + ':' + minutes + ':' + seconds;
    return strTime;
}
