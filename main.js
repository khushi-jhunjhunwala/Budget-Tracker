var app=angular.module('BudgetTrackerApp',[]);
app.controller('BudgetTrackerController', function($scope, $http){

    $http.get("http://127.0.0.1:7006/");

    var x=0;
    $scope.totalYourExpenses= function(){
        x=(
        parseInt($scope.Housing||0)+
        parseInt($scope.Electricity||0)+
        parseInt($scope.Shopping||0)+
        parseInt($scope.Food||0)+
        parseInt($scope.Books||0)+
        parseInt($scope.Household||0)+
        parseInt($scope.Transport||0)+
        parseInt($scope.Entertain||0)+
        parseInt($scope.Others||0)+
        parseInt($scope.Medical||0)
        )
        return x;
    }

    $scope.totalDiff= function(){
        x=(
        parseInt($scope.income||0)-(
        parseInt($scope.Housing||0)+
        parseInt($scope.Electricity||0)+
        parseInt($scope.Shopping||0)+
        parseInt($scope.Food||0)+
        parseInt($scope.Books||0)+
        parseInt($scope.Household||0)+
        parseInt($scope.Transport||0)+
        parseInt($scope.Entertain||0)+
        parseInt($scope.Others||0)+
        parseInt($scope.Medical||0)
        ))
        return x;
    }
    

    var t=0;

    //Benchmarks

    $scope.ElectricityBench=function()
    {
        t=0.1*(parseInt($scope.income||0)-parseInt($scope.Housing||0));
        return t;
    }

    $scope.ShoppingBench=function()
    {
        t=0.1*(parseInt($scope.income||0)-parseInt($scope.Housing||0));
        return t;
    }

    $scope.FoodBench=function()
    {
        t=0.2*(parseInt($scope.income||0)-parseInt($scope.Housing||0));
        return t;
    }

    $scope.BooksBench=function()
    {
        t=0.05*(parseInt($scope.income||0)-parseInt($scope.Housing||0));
        return t;
    }

    $scope.HouseholdBench=function()
    {
        t=0.2*(parseInt($scope.income||0)-parseInt($scope.Housing||0));
        return t;
    }

    $scope.TransportBench=function()
    {
        t=0.15*(parseInt($scope.income||0)-parseInt($scope.Housing||0));
        return t;
    }

    $scope.EntertainBench=function()
    {
        t=0.1*(parseInt($scope.income||0)-parseInt($scope.Housing||0));
        return t;
    }

    $scope.OthersBench=function()
    {
        t=0.05*(parseInt($scope.income||0)-parseInt($scope.Housing||0));
        return t;
    }
    $scope.MedicalBench=function()
    {
        t=0.05*(parseInt($scope.income||0)-parseInt($scope.Housing||0));
        return t;
    }

    //Differences
    $scope.ElectricityDiff=function()
    {
        t=(0.1*(parseInt($scope.income||0)-parseInt($scope.Housing||0)))-($scope.Electricity||0);
        return t;
    }
    $scope.ShoppingDiff=function()
    {
        t=0.1*(parseInt($scope.income||0)-parseInt($scope.Housing||0))-($scope.Shopping||0);
        return t;
    }
    $scope.FoodDiff=function()
    {
        t=0.2*(parseInt($scope.income||0)-parseInt($scope.Housing||0))-($scope.Food||0);
        return t;
    }
    $scope.BooksDiff=function()
    {
        t=0.05*(parseInt($scope.income||0)-parseInt($scope.Housing||0))-($scope.Books||0);
        return t;
    }
    $scope.HouseholdDiff=function()
    {
        t=0.2*(parseInt($scope.income||0)-parseInt($scope.Housing||0))-($scope.Household||0);
        return t;
    }
    $scope.TransportDiff=function()
    {
        t=0.15*(parseInt($scope.income||0)-parseInt($scope.Housing||0))-($scope.Transport||0);
        return t;
    }
    $scope.EntertainDiff=function()
    {
        t=0.1*(parseInt($scope.income||0)-parseInt($scope.Housing||0))-($scope.Entertain||0);
        return t;
    }
    $scope.OthersDiff=function()
    {
        t=0.05*(parseInt($scope.income||0)-parseInt($scope.Housing||0))-($scope.Others||0);
        return t;
    }
    $scope.MedicalDiff=function()
    {
        t=0.05*(parseInt($scope.income||0)-parseInt($scope.Housing||0))-($scope.Medical||0);
        return t;
    }
})

