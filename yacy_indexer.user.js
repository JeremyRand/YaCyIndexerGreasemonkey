// ==UserScript==
// @name YaCyIndexer
// @namespace https://veclabs.posterous.com/
// @description Indexes visited pages with YaCy.
// @version 0.1
// @match *://*/*
// @grant GM_xmlhttpRequest
// @grant GM_log
// ==/UserScript==

// User parameters:
var paramYaCyLocation = 'http://localhost:8090';
var paramEnableQueryString = false; // Index pages with query strings (possible privacy leak).
var paramDepth = 1; // 0 = only the visited page; 1 = all links on visted page; higher values will index deeper but use exponentially more bandwidth.
var paramAgeNum = 7; // pages already indexed since this time won't be re-indexed.
var paramAgeUnit = 'day'; // units for above

// YaCy Arguments -- Don't change these unless you've read the YaCy API docs.
var crawlingstart = '';
var crawlingMode = 'url';
var crawlingURL = paramEnableQueryString ? window.location.href : [location.protocol, '//', location.host, location.pathname].join('');
var bookmarkTitle = '';
var crawlingDepth = paramDepth;
var directDocByURL = 'off';
var crawlingDepthExtension = '';
var range = 'wide';
var mustmatch = '.*';
var mustnotmatch = '';
var ipMustmatch = '.*';
//var ipMustnotmatch = '(^127\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)'; // http://stackoverflow.com/questions/2814002/private-ip-address-identifier-in-regular-expression
var ipMustnotmatch = '';
var indexmustmatch = '.*';
var indexmustnotmatch = '';
var deleteold = 'off';
var recrawl = 'reload';
var reloadIfOlderNumber = paramAgeNum;
var reloadIfOlderUnit = paramAgeUnit;
var countryMustMatchSwitch = 'false';
var crawlingDomMaxCheck = 'off';
var crawlingQ = paramEnableQueryString ? 'on' : 'off';
var storeHTCache = 'off';
var cachePolicy = 'iffresh';
var indexText = 'on';
var indexMedia = 'on';
var crawlOrder = 'off';
var collection = 'user';

var yacy_url = paramYaCyLocation + '/Crawler_p.html?crawlingstart=' + encodeURIComponent(crawlingstart) + '&crawlingMode=' + encodeURIComponent(crawlingMode) + '&crawlingURL=' + encodeURIComponent(crawlingURL) + '&bookmarkTitle=' + encodeURIComponent(bookmarkTitle) + '&crawlingDepth=' + encodeURIComponent(crawlingDepth) + '&directDocByURL=' + encodeURIComponent(directDocByURL) + '&crawlingDepthExtension=' + encodeURIComponent(crawlingDepthExtension) + '&range=' + encodeURIComponent(range) + '&mustmatch=' + encodeURIComponent(mustmatch) + '&mustnotmatch=' + encodeURIComponent(mustnotmatch) + '&ipMustmatch=' + encodeURIComponent(ipMustmatch) + '&ipMustnotmatch=' + encodeURIComponent(ipMustnotmatch) + '&indexmustmatch=' + encodeURIComponent(indexmustmatch) + '&indexmustnotmatch=' + encodeURIComponent(indexmustnotmatch) + '&deleteold=' + encodeURIComponent(deleteold) + '&recrawl=' + encodeURIComponent(recrawl) + '&reloadIfOlderNumber=' + encodeURIComponent(reloadIfOlderNumber) + '&reloadIfOlderUnit=' + encodeURIComponent(reloadIfOlderUnit) + '&countryMustMatchSwitch=' + encodeURIComponent(countryMustMatchSwitch) + '&crawlingDomMaxCheck=' + encodeURIComponent(crawlingDomMaxCheck) + '&crawlingQ=' + encodeURIComponent(crawlingQ) + '&storeHTCache=' + encodeURIComponent(storeHTCache) + '&cachePolicy=' + encodeURIComponent(cachePolicy) + '&indexText=' + encodeURIComponent(indexText) + '&indexMedia=' + encodeURIComponent(indexMedia) + '&crawlOrder=' + encodeURIComponent(crawlOrder) + '&collection=' + encodeURIComponent(collection);

//GM_log(yacy_url);

GM_xmlhttpRequest({
  method: "GET",
  url: yacy_url,
  onload: function(response) {
    //GM_log("YaCy indexing should commence.");
  }
});

