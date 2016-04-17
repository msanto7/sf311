'use strict';

angular.module('myApp.view2', ['ngRoute', 'nvd3'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}])


    .controller('Category2', ['$scope', '$http', function($scope, $http){

        $http.get('data/categories.json').then(function(response) {
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

    }]);