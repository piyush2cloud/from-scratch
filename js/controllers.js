angular.module('poolin.controllers', [])

    .controller("myCtrl", function ($scope, $timeout, $window) {



        $scope.linewidth = 0;
        $scope.hideline = 0;
        $scope.showtagline = 0;
        $scope.navcolor = 0;


        $timeout(function () {
            $scope.linewidth = !$scope.linewidth;
            $scope.hideline = !$scope.hideline;
        }, 500);

        $timeout(function () {
            $scope.showlogo = 1;

        }, 1);

        $timeout(function () {
            $scope.showtagline = 1;

        }, 3000);

        $(document).ready(function(){
            $(window).scroll(function() { // check if scroll event happened
                if ($(document).scrollTop() >350) { // check if user scrolled more than 50 from top of the browser window
                    $(".navbar-fixed-top").css("background-color","#0C77AD"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".hidelogo").css("opacity","1"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)

                } else {
                    $(".navbar-fixed-top").css("background-color","#2E3842"); // if not, change it back to transparent
                    $(".hidelogo").css("opacity","0"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)

                }
            });
        });


        $scope.firstDivHide = 0;
        $scope.secondDivHide = 0;
        $scope.firstDivShow = 1;
        $scope.secondDivShow = 1;

        $scope.showline = 1;
        $scope.hideline = 0;

        $scope.fadeRight = function () {
            $scope.secondDivHide = 1;
            $scope.firstDivShow = 1;
            $scope.firstDivHide = 0;
        }

        $scope.fadeLeft = function () {
            $scope.firstDivHide = 1;
            $scope.secondDivShow = 1;
            $scope.secondDivHide = 0;
        }

        setInterval(function () {

            if ($window.scrollY > 300) {
                $scope.navcolor = 1;
            }
            console.log($window.scrollY);


        }, 100)


    });
