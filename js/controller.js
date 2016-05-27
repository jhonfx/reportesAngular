function obtenerFecha($scope) {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getYear();
  $scope.fecha = {
    'day': d,
    'month': m,
    'year': y
  };
}

var app = angular.module('app', []);
app.controller('ReportController', function($scope) {

});

app.controller('datCtrl', function($scope) {
    $scope.today = new Date();
});