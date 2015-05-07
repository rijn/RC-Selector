/**
 * RC-Selector
 * Main app.js
 * @author  Rijn
 * @link https://github.com/rijn/RC-Selector
 */

requirejs.config({

    baseUrl: 'js/lib',

    paths: {
        jquery: 'jquery-1.11.3',
        rclist: '../app/rclist'
    }
});

// Start the main app logic.
requirejs(['jquery', 'rclist'],
    function($, rclist) {
        console.log(rclist.test());
    }
);
