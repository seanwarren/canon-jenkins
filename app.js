/**
 * Canon for Jenkins Javascript Overrides
 *
 * Leverages Jenkins-included Prototype.js
 *
 * @author Rackspace Web Team
 */
document.observe("dom:loaded", function () {
    // Auto Refresh
    var autoRefreshSelector = $$('#right-top-nav #right-top-nav div.smallfont');
    if (autoRefreshSelector.length > 0) {
        var autoRefreshLink = new Element('span').update(autoRefreshSelector[0].innerHTML);
        $$('span.jenkins_ver')[0].insert({before:autoRefreshLink});
    }
    // Click logo, go home.
    $$('div.logo')[0].on('click', function(){ location = '/'; });
    
    (function() {
       var wf = document.createElement('script');
       wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
           '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
       wf.type = 'text/javascript';
       wf.async = 'true';
       var s = document.getElementsByTagName('script')[0];
       s.parentNode.insertBefore(wf, s);
     })();
    
    WebFont.load({
    google: {
      families: ['Lato']
    }
    });

    
});