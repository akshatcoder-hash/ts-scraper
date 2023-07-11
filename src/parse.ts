import * as cheerio from 'cheerio';

const $ = cheerio.load('<ul id="libs">  <li class="axiom">Axiom</li>  <li class="superagent">SuperAgent</li>  <li class="cheerio">Cheerio</li></ul>');

// Output the HTML directly
console.log($.html());