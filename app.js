var app = angular.module("ShoppingListApp",[] );

 app.controller("ListController", function ($scope) {
$scope.list = ["chips, hambuger, pie"];

$scope.addItem = function(z) { 
    $scope.list.push(z);
    $scope.newItem = "";
}

$scope.remove = function(y){
    var removeItem = $scope.list.indexof(y);
    $scope.list.splice(removeItem,1);
}
 }
);