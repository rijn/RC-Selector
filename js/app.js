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
        rclist: '../app/rclist',
        database: '../app/database',
    }

});

// Start the main app logic.
requirejs(['jquery', 'rclist', 'database'],
    function($, rclist, database) {
        $(document).ready(function() {
            console.log(database.data.resistor[0]);
            rclist.test();
        });
    }
);
