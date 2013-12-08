YaCyIndexerGreasemonkey
=======================

This is a Greasemonkey script to index visited websites with the [YaCy P2P search engine](http://yacy.net/).  It has the advantage over YaCy's proxy server that it can index pages with cookies, pages which use HTTPS encryption, and (in many case) pages with query strings, without leaking private data.  It can also crawl visited pages with a depth other than 0 (something YaCy's proxy does not support).

Installation (Basic)
--------------------

First off, if you haven't installed [YaCy](http://yacy.net/en/index.html), you should do that first.

You should also install Greasemonkey in Firefox, or a compatible add-on depending on your browser.

Finally, just view the yacy_indexer.user.js file in GitHub and click the "Raw" link.  Greasemonkey should prompt you to install the script.

If you want to use the default settings (crawl depth 1), you're done!  Otherwise, see the next section.

Installation (Custom Settings)
------------------------------

If you'd like to customize the settings, perform the Basic Installation above, and then use the Edit User Script feature in your browser.  In Firefox, this is Tools -> Greasemonkey -> Manage User Scripts -> YaCyIndexer -> Options -> Edit This User Script.

The following settings are customizable:

###var paramYaCyLocation = 'http://localhost:8090';
If your YaCy installation is on a different host or port from the default, change this setting.

###var paramEnableQueryString = false;
Set this to true if you wish to index pages with a query string (something after a question mark in the URL).  Note that this is a potential privacy leak.  The default setting (false) will remove the query string before indexing pages to protect your privacy.

###var paramDepth = 1;
This is the crawl depth for each page you visit.  0 will only index the visited page.  Higher values will index deeper but use exponentially more bandwidth.

###var paramAgeNum = 7; and var paramAgeUnit = 'day';
These control how frequently YaCy will re-index content which was previously indexed.

###Other settings
The other YaCy API arguments can be changed too, if you've read the [YaCy API documentation](http://www.yacy-websuche.de/wiki/index.php/Dev:API#Managing_crawl_jobs).
