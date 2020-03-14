document.addEventListener("DOMContentLoaded", function(event) { 
    function insertCss( code ) {
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = code;
        } else {
            style.innerHTML = code;
        }
        document.getElementsByTagName("head")[0].appendChild( style );
    }
    
    var whoLanguages = ['es','en','fr', 'ru', 'zh'];
    var userLanguage = navigator.language.slice(0,2);
    
    if (!whoLanguages.includes(userLanguage)) {
        languageFolder = 'en';
    } else {
        languageFolder = userLanguage;
    }
    
    if (userLanguage == 'es') {
        hashtag = '#FrenarLaCurva';
    } else if (userLanguage == 'fr') {
        hashtag = '#arrêterlacourbe';
    } else if (userLanguage == 'it') {
        hashtag = '#fermarelacurva';
    } else if (userLanguage == 'it') {
        hashtag = '#kurveanhalten';
    } else {
        hashtag = '#FlattenTheCurve';
    }
    
    var codvid = '<a href="https://www.who.int/' + languageFolder + '/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses" target="_blank" rel="nofollow" rel="noopener" id="covid19">' +
                    '<img src="https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/' + languageFolder + '/h-logo-blue.svg">' +
                    '<p class="covid19__hashtag">' + hashtag + '</p>' +
                '</a>';
    document.querySelector('body').innerHTML += codvid;
    insertCss(
    "#covid19 {position:fixed;bottom:10px;left:10px;width: 15%;background-color: #f5f5f5;z-index: 9999999999;border: 1px solid #ccc;}" +
    "#covid19 img {max-width: 100%;max-height: 50px;margin: 10px;}" +
    ".covid19__hashtag {color: #555;font-size: 19px;font-weight: 800;text-align: center;}" +
    "@media (max-width: 767px) { #covid19 {width: 100%;bottom:0;left:0;} #covid19 img, .covid19__hashtag {width: 45%; float:left;} .covid19__hashtag {margin-top: 25px;}  }"
    );
});
