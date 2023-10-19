// ==UserScript==
// @name         Youtube embedder
// @namespace    http://youtube.com/
// @version      0.1
// @description  Vive la résistance!
// @author       TheClockworkVoid
// @match        https://www.youtube.com/*
// ==/UserScript==

(function () {
    var embedBaseURL = "https://youtube.com/embed/";

    /**
     * Converts string to a DOM object
     * @param{string} htmlString - stringified representation of element you want to add
     * @return{object} dom element
     */
    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        return div.firstChild;
    }


    /**
     * Tailored placement of video link. Takes parent element and inserts a generated link as a first child.
     * @param{object} parentEl - element zou want the link inserted into
     * @param{string} videoID - video id (from url v=ABCDEF1234)
     */
    function insertLinkSingleVideo(parentEl, videoID){
        var linkStr = "<a id='" + ytLinkID + "' style='margin:5px; padding:5px; background:red; border-radius:5px; color:white; display:inline-block' href='" + embedBaseURL + videoID + "' target='blank'>► Play embedded</a>";
        parentEl.insertBefore(createElementFromHTML(linkStr), parentEl.firstChild);
    }

    //single page block *****************************************
    var lastKnownWatchVideoID = "";
    var ytLinkID = "customYTEmbedResistance";
    setInterval(function () {
        //no params, basically main page.
        if (!window.location.search) {
            return;
        }
        var videoParamsObj = JSON.parse('{"' + decodeURI(window.location.search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        //no video param
        if (!Object.prototype.hasOwnProperty.call(videoParamsObj, "v")) {
            return;
        }
        //same video opened, orn navigated without url change(?)
        if(videoParamsObj.v == lastKnownWatchVideoID){
            return;
        }

        var linkDomObj = document.getElementById(ytLinkID);
        //we have already created the link, just update the href attribute
        if(linkDomObj){
            linkDomObj.href = embedBaseURL+ videoParamsObj.v;
            lastKnownWatchVideoID = videoParamsObj.v;
        }
        else{
            //set a new link element
            var el = document.getElementById("below");
            if(el){
                insertLinkSingleVideo(el, videoParamsObj.v);
                var checkLinkEl = document.getElementById("ytLinkID");
                if(checkLinkEl){
                    lastKnownWatchVideoID = videoParamsObj.v;
                }
            }
        }

    }, 3000);

})();
