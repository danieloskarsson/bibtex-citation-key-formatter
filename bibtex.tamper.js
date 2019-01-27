// ==UserScript==
// @name         Google Scholar Bibtex Key
// @namespace    http://github.com/danieloskarsson/bibtex-citation-key-formatter
// @version      1
// @description  Rename Bibtex citation-keys provided by Google Scholar according to the format "Author1Author2Author3...YYYY"
// @author       Daniel Oskarsson
// @match        https://scholar.googleusercontent.com/scholar.bib*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var element = document.getElementsByTagName('pre')[0]
    var bibtex = element.innerText;
    var key = '';
    /author={(.*)},?\r?\n/.exec(bibtex)[1].split(' and ').forEach(author => {
        author = author.substring(0, author.indexOf(','))
        author = author.charAt(0).toUpperCase() + author.slice(1)
        author = author.replace(/\s+/g, '');
        key += author;
    });
    key += /year={(.*)},?\r?\n/.exec(bibtex)[1];
    element.innerText = bibtex.replace(/@(.*){(.*),/.exec(bibtex)[2], key);
})();

