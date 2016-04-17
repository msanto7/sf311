'use strict';

angular.module('myApp.view3', ['ngRoute', 'nvd3'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function() {

}])



    .controller('test', ['$scope', '$http', function($scope, $http) {

        //file is successfully parsing json data...I cant get it to display howeverx    
        $http.get('data/hood.json').then(function(response) {
            $scope.data = response.data;
            console.log($scope.data);
        });

        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 600,
                width: 550,
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
                        left: 35
                    }
                }
            }
        };

        }]);