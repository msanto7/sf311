'use strict'; 

angular.module('myApp.view4', ['ngRoute', 'nvd3'])

    .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/view4', {
      templateUrl: 'view4/view4.html',
      controller: 'View4Ctrl'
     });
    }])

    .controller('View4Ctrl', ['$scope', function($scope) {
        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                width: 600,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 65
                },
                x: function(d){ return d.label; },
                y: function(d){ return d.value; },
                showValues: true,
                staggerLabels: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'Status'
                },
                yAxis: {
                    axisLabel: '# of Requests'
                }
            }
        };
        $scope.data = [{
            key: "Cumulative Return",
            values: [
                { "label" : "Open" , "value" : 49 },
                { "label" : "Closed" , "value" : 134 }
            ]
        }];

     }])

.controller('Agency', ['$scope', function($scope) {
    $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            width: 900,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 70
            },
            x: function(d){ return d.label; },
            y: function(d){ return d.value; },
            showValues: true,
            staggerLabels: true,
            valueFormat: function(d){
                return d3.format(',.4f')(d);
            },
            transitionDuration: 500,
            xAxis: {
                axisLabel: 'Agency'
            },
            yAxis: {
                axisLabel: '# of Calls',
            }
        }
    };
    $scope.data = [{
        key: "Cumulative Return",
        values: [
            { "label" : "311 Supervisor Queue" , "value" : 4 },
            { "label" : "County Clerk - G" , "value" : 3 },
            { "label" : "CDBI Building Inspection Queue" , "value" : 2 },
            { "label" : "DPW Ops Queue" , "value" : 75 },
            { "label" : "PUC Sewer Ops" , "value" : 10 },
            { "label" : "Recology_Abandoned" , "value" : 28 },
            { "label" : "DPT Abandoned Vehicles Work Queue" , "value" : 5 },
            { "label" : "PUC - Sewer - G" , "value" : 7 },
        ]
    }];

}])