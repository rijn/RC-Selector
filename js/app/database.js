/**
 * RC-Selector
 * database.js
 * @author  Rijn
 * @link https://github.com/rijn/RC-Selector
 */

define("database", [],
    function() {
        var repository = [{
            id: "REP1",
            row: 6,
            column: 16
        }, {
            id: "REP2",
            row: 6,
            column: 16
        }, {
            id: "REP3",
            row: 6,
            column: 16
        }];
        var resistor = [{
            repository: "REP1",
            row: 1,
            column: 1,
            value: 5600,
            accuracy: 0.001,
            package: "0805",
            label: "5601"
        }, {
            repository: "REP1",
            row: 1,
            column: 2,
            value: 1000,
            accuracy: 0.001,
            package: "0805",
            label: "1001"
        }, ];
        var capacity = [];
        return {
            data: {
                repository: repository,
                resistor: resistor,
                capacity: capacity,
            }
        }
    }
);
