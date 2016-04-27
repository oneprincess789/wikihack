angular.module('myApp', ["ngSanitize"])

.controller('homeController', ['$scope', '$http', function ($scope, $http) {

    $scope.input;
    $scope.beginUrl = "http://en.wikipedia.org/w/api.php?titles="
    $scope.endUrl = "&rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK"
    $scope.showResult = false;
    $scope.loading = false;


    $scope.searchButton = function () {
        $scope.loading = true;
        $http.jsonp($scope.beginUrl + $scope.input + $scope.endUrl).then(function (data) {
            var obj = data.data.query.pages;
            var pageId = Object.keys(obj)[0];
            console.log(data);
            $scope.wikiObject = obj[pageId].extract; 
            $scope.showResult = true;
            $scope.input = "";
            $scope.loading = false;
        })

    }; 
}]);
