var app=angular.module("myApp",[]);
app.controller("indexCtrl",["$scope",function($scope){
    $scope.title="This is Text!";
    $scope.bread=["Home","Current","item"];
    $scope.myAsideNav=[{title:"我是导航111111",content:"什么导航啊我的天，明明我就是内容啊！"},{title:"我是导航222222",content:"什么导航啊我的天，明明我就是内容啊！"}];
    $scope.tabid="tab1";
}]);