chrome.webRequest.onBeforeRequest.addListener(
    function(imgurOriginalLink) {
         var newUrl = imgurOriginalLink.url.replace("imgur.com", "imgurp.com");
         return {redirectUrl: newUrl};
    },{urls: [ "*://*.imgur.com/*"], types: ["main_frame", "sub_frame", "other"]}, ["blocking"]
);