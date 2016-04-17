'use strict';

angular.module('myApp.view1', ['ngRoute', 'nvd3'])

    .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
     });
    }])


    /*new
    .service("jsonService", ['$scope', function ($http, $q)
    {
        var deferred = $q.defer();   //q variable lets you say I will hold this off and call deferred will called after getting data
        $http.get('app/data/sf311,json').then(function (data)
        {
            deferred.resolve(data);
        });

        this.getHoods = function()
        {
            return deferred.promise;
        }
    }])

    //new
    //This is a new test graph for the purpose of testing the new json parsing data


        .controller('test', ['$scope', '$http', function($scope, $http) {

            $http.get('data/sf311.json').success(function(data)
            {
                $scope.test = data;
                console.log($scope.test);
            })

            /*var promise = jsonService.getHoods();
            promise.then(function (data)
            { 
                $scope.neighborhood = data.data;
                console.log($scope.neighborhood);

            }]);*/


    .controller('test', ['$scope', '$http', function($scope, $http) {

        //file is successfully parsing json data...I cant get it to display howeverx    
        $http.get('data/hood.json').then(function(response) {
            $scope.data = response.data;
            console.log($scope.data);
        });

        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 700,
                width: 700,
                x: function(d){return d.x;},
                y: function(d){return d.y;},
                showLabels: true,
               /* callback: function(){
                    d3.selectAll('.nvd3.nv-legend g').style('fill', "white");
                },*/
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 5
                    }
                }
            }
        };

        }])




    //old code ******************************************************** working controllers 

    .controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {


        //$http get method used to pull in external json data
        $http.get('data/status.json').then(function(response) {
            $scope.data = response.data;
            console.log($scope.data);
        });

        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                width: 1200,
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

     }])

.controller('Agency', ['$scope', '$http', function($scope, $http) {

    $http.get('data/agency.json').then(function(response) {
        $scope.data = response.data;
        console.log($scope.data);
        });

    $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            width: 1200,
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
}])
/*    $scope.data = [{
       // key: "Cumulative Return",
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

}])*/


    .controller('Hood', ['$scope', function($scope) {
        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 700,
                width: 700, 
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.data = [
            {
                key: "Lower Nob Hill",
                y: 5
            },
            {
                key: "Telegraph Hill 2",
                y: 2
            },
            {
                key: "Alamo Square",
                y: 3
            },
            {
                key: "Castro",
                y: 6
            },
            {
                key: "Mission",
                y: 27
            },
            {
                key: "South of Market",
                y: 6
            },
            {
                key: "Unidentified",
                y: 16
            }
        ];
    }])

    .controller('Category', ['$scope', '$http', function($scope, $http){

        $http.get('data/category.json').then(function(response) {
            $scope.data = response.data;
            console.log($scope.data);
        });

        $scope.options = {
            chart: {
                type: 'stackedAreaChart',
                height: 500,
                width: 1300,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 65
                },
                x: function(d){return d[0];},
                y: function(d){return d[1];},
                staggerLabels: true,
                useVoronoi: false,
                clipEdge: true,
                duration: 100,
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: ('Time (hours)'),
                    showMaxMin: false,
                    tickFormat: function(d) {
                        return d3.format(',.2f')(d);
                        //return d3.time.format('%x')(new Date(d));
                        //var halfHour = d % 2;
                        //var hour = (d - halfHour) / 2;
                        //return d3().hours(hour).minutes(halfHour * 30).format("h:mm A");
                    }
                },
                yAxis: {
                    axisLabel: ('# of Calls'),
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

    }])

       /* $scope.data = [
            {
                "key": "311 External Request",
                "values": [[1, 1], [2, 1], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2],[9, 2], [10, 2], [11, 2], [12, 2]]
            },

            {
                "key": "General Requests",
                "values": [[1, 1], [2, 1], [3, 2], [4, 2], [5, 4], [6, 4], [7, 5], [8, 6],[9, 9], [10, 14], [11, 18], [12, 25]]
            },
            {
                "key": "Street and Sidewalk Cleaning",
                "values": [[1, 1], [2, 1], [3, 2], [4, 3], [5, 4], [6, 9], [7, 12], [8, 16],[9, 28], [10, 48], [11, 67], [12, 80]]
            },
            {
                "key": "Street Defects",
                "values": [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 3], [7, 5], [8, 15],[9, 6], [10, 8], [11, 9], [12, 10]]
            }

        ]
    })*/





/*var circle = [
    {"cx": 20, "cy": 20, "radius": 20, "color" : "white"}];
var svgContainer = d3.select("body").append("svg")
    .attr("width",200)
    .attr("height",200);
var text = svgContainer.selectAll("text")
    .data(circleData)
    .enter()
    .append("text");
var circles = svgContainer.selectAll("circle")
    .data(circle)
    .enter()
    .append("circle");
var circleAttributes = circles
    .attr("cx", function (d) { return d.cx; })
    .attr("cy", function (d) { return d.cy; })
    .attr("r", function (d) { return d.radius; })
    .style("fill", function (d) { return d.color; });*/

    //new code for parsing json data

