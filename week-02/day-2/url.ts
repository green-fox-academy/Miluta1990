'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let newUrl: string = url.replace('bots', 'odds');
console.log(newUrl);

// missing a : after https
let correction: string = 'https:'
let correctedUrl: string = newUrl.replace('https',correction );
console.log(correctedUrl);