/**
 * Created by azu on 2014/07/09.
 * LICENSE : MIT
 */
"use strict";
var titleRegExp = /<title[^>]*>([^<]+)<\/title>/i;
function getHTMLTitle(content) {
    if (content == null) {
        return undefined;
    }
    var match = content.match(titleRegExp);
    return match && match[1];
}
module.exports = getHTMLTitle;