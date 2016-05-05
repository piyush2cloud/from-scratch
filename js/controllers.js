angular.module('poolin.controllers', [])

    .controller("myCtrl", function ($scope, $timeout, $window, $interval) {

        $scope.linewidth = 0;
        $scope.hideline = 0;
        $scope.showtagline = 0;
        $scope.starttimerlogo=1;
        $scope.endtimerlogo=0;

        $scope.splittextone = 0;
        $scope.splittexttwo = 0;
        $scope.splittextthree=0;
        $scope.splittextfour=0;

        $scope.splitsettleimageonefading=0;
        $scope.splitsettleimagetwofading=0;
        $scope.splitsettleimagethreefading=0;
        $scope.splitsettleimagefourfading=0;



        $scope.callAtInterval = function () {
            $timeout(function () {
                console.log(1);

                $scope.splittextone = 1;
                $scope.splittexttwo = 0;
                $scope.splittextthree = 0;
                $scope.splittextfour = 0;
                $scope.splitsettleimageonefading=1;
                $scope.splitsettleimagetwofading=0;
                $scope.splitsettleimagethreefading=0;
                $scope.splitsettleimagefourfading=0;

                $timeout(function () {
                    console.log(2);

                    $scope.splittextone = 0;
                    $scope.splittexttwo = 1;
                    $scope.splittextthree = 0;
                    $scope.splittextfour = 0;
                    $scope.splitsettleimageonefading=0;
                    $scope.splitsettleimagetwofading=1;
                    $scope.splitsettleimagethreefading=0;
                    $scope.splitsettleimagefourfading=0;

                    $timeout(function () {
                        console.log(2);
                        $scope.pathimage = 'Split%20&%20Settle/Split%20&%20Settle/SnS_3.png';

                        $scope.splittextone = 0;
                        $scope.splittexttwo = 0;
                        $scope.splittextthree = 1;
                        $scope.splittextfour = 0;
                        $scope.splitsettleimageonefading=0;
                        $scope.splitsettleimagetwofading=0;
                        $scope.splitsettleimagethreefading=1;
                        $scope.splitsettleimagefourfading=0;

                        $timeout(function () {
                            console.log(2);
                            $scope.pathimage = 'Split%20&%20Settle/Split%20&%20Settle/SnS_4.png';

                            $scope.splittextone = 0;
                            $scope.splittexttwo = 0;
                            $scope.splittextthree = 0;
                            $scope.splittextfour = 1;
                            $scope.splitsettleimageonefading=0;
                            $scope.splitsettleimagetwofading=0;
                            $scope.splitsettleimagethreefading=0;
                            $scope.splitsettleimagefourfading=1;
                        }, 4000);
                    }, 4000);
                }, 4000);
            }, 4000);


        }


        $interval(function () {
                $scope.callAtInterval();
            },
            16000);

        $timeout(function () {
            $scope.linewidth = !$scope.linewidth;
            $scope.hideline = !$scope.hideline;
        }, 500);

        $timeout(function () {
            $scope.showlogo = 1;

        }, 3000);

        $timeout(function () {
            $scope.showtagline = 1;
            $scope.lightbackground=1;
            $scope.navcolour=1;
            $scope.iconbarchange=1;
            $scope.callAtInterval();

        },1000);

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

        $scope.iconbarchange=0;

        $(document).ready(function () {
            $(window).scroll(function () { // check if scroll event happened
                if ($(document).scrollTop() > 350) { // check if user scrolled more than 50 from top of the browser window
                    $(".navbar-fixed-top").css("background-color", "#5585B5"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".hidelogo").css("opacity", "1"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".starttimerlogo").css("display", "none"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".endtimerlogo").css("display", "initial"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)

                } else {
                    $(".navbar-fixed-top").css("background-color", "#FFFFFF"); // if not, change it back to transparent
                    $(".hidelogo").css("opacity", "0"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".starttimerlogo").css("display","initial"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                    $(".endtimerlogo").css("display","none"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)

                }
            });
        });

    });
