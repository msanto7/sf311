'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
     });
    }])

    .controller('View1Ctrl', ['$scope',
     function($scope) {
      $scope.exampleData = "please show up";

     }]);


/*.controller('View1Ctrl', ['$scope', 'exampleData' {
//var app = angular.module("nvd3TestApp", ['nvd3ChartDirectives']);
var app = angular.module('nvd3TestApp',[]);

app.controller('display', ['$scope', function($scope) {

 $scope.exampleData = 'hello';

 function ExampleCtrl($scope) {
  $scope.exampleData = [ 'hello'
  {key: "One", y: 5},
  {key: "Two", y: 2},
  {key: "Three", y: 9},
  {key: "Four", y: 7},
  {key: "Five", y: 4},
  {key: "Six", y: 3},
  {key: "Seven", y: 9}
  ];
}])*/





/*'use strict';

angular.module('myApp.view1', ['ngRoute', 'nvd3'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'dataService', function($scope, dataService) {

        //An array of Regular Expressions and offense group names used to aggregate similar charge descriptions
        var serviceCategory = [{
            exp: /General Requests/,
            name: 'General Requests'
        },{
            exp: /Street and Sidewalk Cleaning/,
            name: 'Street and Sidewalk Cleaning'
        },{
            exp: /Sewer Issues/,
            name: 'Sewer Issues'
        },{
            exp: /Street and Sidewalk Cleaning/,
            name: 'Street and Sidewalk Cleaning'
        },{
            exp: /Abandoned Vehicle/,
            name: 'Abandoned Vehicle'
        },{
            exp: /Graffiti Private Property/,
            name: 'Graffiti Private Property'
        },{
            exp: /Tree Maintenance/,
            name: 'Tree Maintenance'
        },{
            exp: /311 External Request/,
            name: '311 External Request'
        },{
            exp: /Street Defects/,
            name: 'Street Defects'
        },{
            exp: /Catch Basin Maintenance/,
            name: 'Catch Basin Maintenance'
        },{
            exp: /SFHA Requests/,
            name: 'SFHA Requests'
        },{
            exp: /Rec and Park Requests/,
            name: 'Rec and Park Requests'
        },{
            exp: /Damaged Property/,
            name: 'Damaged Property'
        },{
            exp: /Sign Repair/,
            name: 'Sign Repair'
        },{
            exp: /MUNI Feedback/,
            name: 'MUNI Feedback'
        },{
            exp: /Streetlights|/,
            name: 'Streetlights'
        },{
            exp: /Noise Report/,
            name: 'Noise Report'
        }]

        //Configuration for charts using controller scope variable
        angular.extend($scope, {
            description: 'Loading Description...',
            data: {
                categories: [],
                source: {
                    voiceIn: [],
                    open311: [],
                    webSelfService: [],
                    integratedAgency: []
                },
                time: []
            },
            nvd3: {
                chart1: {
                    options: {
                        chart: {
                            type: 'discreteBarChart',
                            height: 450,
                            margin: {
                                top: 20,
                                right: 20,
                                bottom: 60,
                                left: 55
                            },
                            x: function (d) {
                                return d.label;
                            },
                            y: function (d) {
                                return d.value;
                            },
                            clipEdge: true,
                            showValues: true,
                            valueFormat: function (d) {
                                return d3.format('d')(d);
                            },
                            transitionDuration: 500,
                            yAxis: {
                                axisLabel: '',
                                axisLabelDistance: 30,
                                tickFormat: function (d) {
                                    return d3.format('d')(d);
                                }
                            },
                            staggerLabels: true
                        }
                    },
                    data: []
                },
                chart2: {
                    options: {
                        "chart": {
                            "type": "multiBarHorizontalChart",
                            "height": 450,
                            "margin": {
                                "top": 20,
                                "right": 20,
                                "bottom": 60,
                                "left": 130
                            },
                            "clipEdge": true,
                            "staggerLabels": true,
                            "transitionDuration": 500,
                            "stacked": true,
                            "xAxis": {
                                showMaxMin: false
                            },
                            valueFormat: function (d) {
                                return d3.format('d')(d);
                            },
                            x: function (d) {
                                return d.label;
                            },
                            y: function (d) {
                                return d.value;
                            },
                            yAxis: {
                                tickFormat: function (d) {
                                    return d3.format('d')(d);
                                }
                            }
                        }
                    },
                    data: []
                },
                chart3: {
                    options: {
                        chart: {
                            type: 'stackedAreaChart',
                            height: 450,
                            margin: {
                                top: 20,
                                right: 20,
                                bottom: 60,
                                left: 55
                            },
                            x: function (d) {
                                return d.time;
                            },
                            y: function (d) {
                                return d.count;
                            },
                            clipEdge: true,
                            showValues: true,
                            valueFormat: function (d) {
                                return d3.format('d')(d);
                            },
                            transitionDuration: 500,
                            yAxis: {
                                axisLabel: '',
                                axisLabelDistance: 30,
                                tickFormat: function (d) {
                                    return d3.format('d')(d);
                                }
                            },
                            xAxis: {
                                tickFormat: function (d) {
                                    var halfHour = d % 2;
                                    var hour = (d - halfHour) / 2;
                                    return moment().hours(hour).minutes(halfHour * 30).format("h:mm A");
                                }
                            },
                            staggerLabels: true
                        }
                    },
                    data: []
                }
            }
        });

        var searchCategory = function(category){
            for(var i = 0; i < serviceCategory.length; i++){
                var exp = serviceCategory[i].exp;
                if(exp.exec(category) != null)
                    return serviceCategory[i].name;
            }
            return "Other";
        };

        var searchForCategoryIndex = function(category){
            for(var i = 0; i < serviceCategory.length; i++){
                if(serviceCategory[i].name == category)
                    return i;
            }
            return 0;
        };

        var searchForLabel = function(value, arr){
            for (var i=0; i < arr.length; i++) {
                if (arr[i].label === value) {
                    return i;
                }
            }
            return -1;
        };

        //Formats and adds an arrest record to multiple data collections for use by nvD3 charts
        var addToCategoryData = function(record){
            var category = searchCategory(record.category);

            var chart1Data = $scope.data.categories;
            var chart1OffenseIndex = searchForLabel(category, chart1Data);
            if(chart1OffenseIndex < 0){
                $scope.data.categories.push({
                    label: category,
                    value: 1
                });
            }else{
                $scope.data.categories[chart1OffenseIndex].value++;
            }

            var voiceInData = $scope.data.source.voiceIn;
            var voiceInIndex = searchForLabel(category, voiceInData);
            var open311Data = $scope.data.source.open311;
            var open311Index = searchForLabel(category, open311Data);
            if(record.source === 'voiceIn'){
                if(voiceInIndex < 0){
                    $scope.data.source.voiceIn.push({
                        label: category,
                        value: 1
                    });
                }else{
                    $scope.data.source.voiceIn[voiceInIndex].value++;
                }
                if(open311Index < 0){
                    $scope.data.source.open311.push({
                        label: category,
                        value: 0
                    });
                }
            }else if(record.source === 'open311'){
                if(open311Index < 0){
                    $scope.data.source.open311.push({
                        label: category,
                        value: 1
                    });
                }else{
                    $scope.data.source.open311[open311Index].value++;
                }
                if(voiceInIndex < 0){
                    $scope.data.source.voiceIn.push({
                        label: category,
                        value: 0
                    });
                }
            }

            var hours = record.date.getHours();
            var min = record.date.getMinutes();

            var scaledTime = (hours * 2) + parseInt(min/30);

            $scope.data.time[searchForCategoryIndex(category)].values[scaledTime].count++;

        };

        //Load local JSON file using data service
        dataService.loadData('sf311.json').then(function(response){
            var data = response.data,
                description = response.meta.view.description;

            var jsonData = dataService.parseJson(data);

            $scope.description = description;

            for(var j = 0; j < serviceCategory.length; j++){
                $scope.data.time.push({
                    key: serviceCategory[j].name,
                    values: []
                });

                for(var k = 0; k < 48; k++){
                    $scope.data.time[j].values.push({
                        time: k,
                        count: 0
                    });
                }
            }

            for(var i = 0; i < jsonData.length; i++){
                addToCategoryData(jsonData[i]);
            }

            $scope.nvd3.chart1.data = [{
                key: '',
                values: $scope.data.categories
            }];

            $scope.nvd3.chart2.data = [{
                key: "Male",
                color: "rgb(214, 39, 40)",
                values: $scope.data.gender.male
            }, {
                key: "Female",
                color: "rgb(31, 119, 180)",
                values: $scope.data.gender.female
            }];

            $scope.nvd3.chart3.data = $scope.data.time;

        });

    }]);




*/






















/*'use strict';

angular.module('myApp.view1', ['ngRoute', 'nvd3'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }])

    .controller('View1Ctrl', [function() {

    }]);*/

