var app = angular.module('poolin.controllers', [])

app.controller("myCtrl", function ($scope, $timeout, $window, $interval, $document,$filter) {

    $scope.onloadimage = 1;
    $scope.containershow=0;
    $scope.navshow=0;

    $scope.logozindexblue=1;
    $scope.logozindexwhite=0;

    $scope.$on('$includeContentLoaded', function (event, target) {
        console.log(event);  //this $includeContentLoaded event object
        console.log(target); //path to the included resource, 'snippet.html' in this case

        if(target=="html/footer.html"){
            var date = new Date();
            $scope.ddMMyyyy = $filter('date')(new Date(), 'dd/MM/yyyy HH:mm:ss');
            console.log("Time until DOMready: winodw", $scope.ddMMyyyy);
            $scope.onloadimage = 0;
            $scope.navshow=1;
            $scope.containershow=1;

            $timeout(function () {
                $scope.showtagline = 1;
                $scope.lightbackground = 1;
                $scope.navbarbackgroundcolourwhite = 1;
                $scope.iconbarchange = 1;
            }, 1000);
        }

    });

    /*$scope.$watch('$viewContentLoaded',function(event, viewConfig){
        console.log("Contents did load.");
        $scope.onloadimage = 0;
        $scope.navshow=1;
        $scope.containershow=1;

        $timeout(function () {
            $scope.showtagline = 1;
            $scope.lightbackground = 1;
            $scope.navbarbackgroundcolourwhite = 1;
            $scope.iconbarchange = 1;
        }, 1000);
    });*/


    $scope.showtagline = 0;
    $scope.starttimerlogo = 1;
    $scope.endtimerlogo = 0;

    $scope.planplayfade = 0;
    $scope.splitsettlefade = 0;

    $scope.splittextone = 0;
    $scope.splittexttwo = 0;
    $scope.splittextthree = 0;
    $scope.splittextfour = 0;
    $scope.makebodyblur = 0;

    /*$timeout(function () {
        $scope.onloadimage = 0;
        $scope.navshow=1;
        $scope.containershow=1;

        $timeout(function () {
            $scope.showtagline = 1;
            $scope.lightbackground = 1;
            $scope.navbarbackgroundcolourwhite = 1;
            $scope.iconbarchange = 1;
        }, 1000);

    }, 8000);*/





    $scope.makebackgroundblur = function () {
        $scope.makebodyblur = 1;
        $scope.howitworksanimate = 1;
    }

    $scope.makebackgroundnormal = function () {
        $scope.makebodyblur = 0;
        $scope.howitworksanimate = 0;

    }



    $scope.splitsettleimageonefading = 0;
    $scope.splitsettleimagetwofading = 0;
    $scope.splitsettleimagethreefading = 0;
    $scope.splitsettleimagefourfading = 0;

    $scope.splitandsettletimerone = null;

    $scope.splitsettleimageonefading = 1;
    $scope.splittextone = 1;
    $scope.splitandsettletextchange = 0;

    //Timer start function.
    $scope.StartTimerSettle = function () {
        $scope.splitsettlefade = 1;
        $scope.splitandsettletextchange = 1;

        $scope.callAtInterval();

    };


    //Timer stop function.
    $scope.StopTimerSettle = function () {

        $scope.splitsettlefade = 0;
        $scope.splitandsettletextchange = 0;


        $timeout.cancel($scope.splitandsettletimerone);
        $scope.splittextone = 1;
        $scope.splittexttwo = 0;
        $scope.splittextthree = 0;
        $scope.splittextfour = 0;

        $scope.splitsettleimageonefading = 1;
        $scope.splitsettleimagetwofading = 0;
        $scope.splitsettleimagethreefading = 0;
        $scope.splitsettleimagefourfading = 0;

    };


    $scope.callAtInterval = function () {

        $scope.splitandsettletimerone = $timeout(function () {
            console.log(1);

            $scope.splittextone = 0;
            $scope.splittexttwo = 1;
            $scope.splittextthree = 0;
            $scope.splittextfour = 0;
            $scope.splitsettleimageonefading = 0;
            $scope.splitsettleimagetwofading = 1;
            $scope.splitsettleimagethreefading = 0;
            $scope.splitsettleimagefourfading = 0;

            $scope.splitandsettletimerone = $timeout(function () {
                console.log(2);

                $scope.splittextone = 0;
                $scope.splittexttwo = 0;
                $scope.splittextthree = 1;
                $scope.splittextfour = 0;
                $scope.splitsettleimageonefading = 0;
                $scope.splitsettleimagetwofading = 0;
                $scope.splitsettleimagethreefading = 1;
                $scope.splitsettleimagefourfading = 0;

                $scope.splitandsettletimerone = $timeout(function () {
                    console.log(2);

                    $scope.splittextone = 0;
                    $scope.splittexttwo = 0;
                    $scope.splittextthree = 0;
                    $scope.splittextfour = 1;
                    $scope.splitsettleimageonefading = 0;
                    $scope.splitsettleimagetwofading = 0;
                    $scope.splitsettleimagethreefading = 0;
                    $scope.splitsettleimagefourfading = 1;

                    $scope.splitandsettletimerone = $timeout(function () {
                        console.log(2);

                        $scope.splittextone = 1;
                        $scope.splittexttwo = 0;
                        $scope.splittextthree = 0;
                        $scope.splittextfour = 0;
                        $scope.splitsettleimageonefading = 1;
                        $scope.splitsettleimagetwofading = 0;
                        $scope.splitsettleimagethreefading = 0;
                        $scope.splitsettleimagefourfading = 0;
                        $scope.callAtInterval();
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }


    $scope.plantextone = 0;
    $scope.plantexttwo = 0;
    $scope.plantextthree = 0;
    $scope.plantextfour = 0;

    $scope.planimageonefading = 0;
    $scope.planimagetwofading = 0;
    $scope.planimagethreefading = 0;
    $scope.planimagefourfading = 0;

    $scope.plantimerone = null;

    $scope.planimageonefading = 1;
    $scope.plantextone = 1;

    $scope.planandplaytextchange = 0;

    //Timer start function.
    $scope.StartTimerPlay = function () {
        $scope.planplayfade = 1;
        $scope.planandplaytextchange = 1;

        $scope.callAtIntervalPlay();

    };


    //Timer stop function.
    $scope.StopTimerPlay = function () {

        $scope.planplayfade = 0;
        $scope.planandplaytextchange = 0;


        $timeout.cancel($scope.plantimerone);
        $scope.plantextone = 1;
        $scope.plantexttwo = 0;
        $scope.plantextthree = 0;
        $scope.plantextfour = 0;

        $scope.planimageonefading = 1;
        $scope.planimagetwofading = 0;
        $scope.planimagethreefading = 0;
        $scope.planimagefourfading = 0;

    };


    $scope.callAtIntervalPlay = function () {

        $scope.plantimerone = $timeout(function () {
            console.log(1);

            $scope.plantextone = 0;
            $scope.plantexttwo = 1;
            $scope.plantextthree = 0;
            $scope.plantextfour = 0;
            $scope.planimageonefading = 0;
            $scope.planimagetwofading = 1;
            $scope.planimagethreefading = 0;
            $scope.planimagefourfading = 0;

            $scope.plantimerone = $timeout(function () {
                console.log(2);

                $scope.plantextone = 0;
                $scope.plantexttwo = 0;
                $scope.plantextthree = 1;
                $scope.plantextfour = 0;
                $scope.planimageonefading = 0;
                $scope.planimagetwofading = 0;
                $scope.planimagethreefading = 1;
                $scope.planimagefourfading = 0;

                $scope.plantimerone = $timeout(function () {
                    console.log(2);

                    $scope.plantextone = 0;
                    $scope.plantexttwo = 0;
                    $scope.plantextthree = 0;
                    $scope.plantextfour = 1;
                    $scope.planimageonefading = 0;
                    $scope.planimagetwofading = 0;
                    $scope.planimagethreefading = 0;
                    $scope.planimagefourfading = 1;

                    $scope.plantimerone = $timeout(function () {
                        console.log(2);

                        $scope.plantextone = 1;
                        $scope.plantexttwo = 0;
                        $scope.plantextthree = 0;
                        $scope.plantextfour = 0;
                        $scope.planimageonefading = 1;
                        $scope.planimagetwofading = 0;
                        $scope.planimagethreefading = 0;
                        $scope.planimagefourfading = 0;
                        $scope.callAtIntervalPlay();
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }

    $scope.starttimernodisplaytrue = 1;  //bluelogo
    $scope.starttimernodisplaynone = 0;

    $scope.endtimerlogodisplaynone = 1;  //whitelogo
    $scope.endtimerlogodisplaytrue = 0;


    $scope.firstDivHide = 0;
    $scope.secondDivHide = 0;
    $scope.firstDivShow = 1;
    $scope.secondDivShow = 1;

    $scope.showline = 1;
    $scope.hideline = 0;

    $scope.iconbarchange = 0;


    $scope.navLogoClick = function () {
        var top = 0;
        var duration = 2; //milliseconds
        //Scroll to the exact position
        $document.scrollTop(top, duration).then(function () {
            console && console.log('You just scrolled to the top!');
        });
    };


    $scope.lefttorightsliderone=0;
    $scope.righttoleftsliderone=0;
    $scope.lefttorightslidertwo=0;
    $scope.righttoleftslidertwo=0;
    $scope.lefttorightsliderthree=0;
    $scope.righttoleftsliderthree=0;


    $scope.showslideronedisplay = 1;
    $scope.hideslideronedisplay = 0;

    $scope.showslidertwodisplay = 0;
    $scope.hideslidertwodisplay = 1;

    $scope.showsliderthreedisplay = 0;
    $scope.hidesliderthreedisplay = 1;



    $scope.changesliderone = function () {


        $scope.lefttorightsliderone=1;
        $scope.righttoleftsliderone=0;
        $scope.lefttorightslidertwo=0;
        $scope.righttoleftslidertwo=0;
        $scope.lefttorightsliderthree=0;
        $scope.righttoleftsliderthree=0;

        $timeout(function () {

            $scope.showslideronedisplay = 0;
            $scope.hideslideronedisplay = 1;

            $scope.showslidertwodisplay = 1;
            $scope.hideslidertwodisplay = 0;

            $scope.showsliderthreedisplay = 0;
            $scope.hidesliderthreedisplay = 1;


        }, 800);


    }

    $scope.changeslidertwo = function () {

        $scope.lefttorightsliderone=0;
        $scope.righttoleftsliderone=0;
        $scope.lefttorightslidertwo=1;
        $scope.righttoleftslidertwo=0;
        $scope.lefttorightsliderthree=0;
        $scope.righttoleftsliderthree=0;

        $timeout(function () {

            $scope.showslideronedisplay = 0;
            $scope.hideslideronedisplay = 1;

            $scope.showslidertwodisplay = 0;
            $scope.hideslidertwodisplay = 1;

            $scope.showsliderthreedisplay = 1;
            $scope.hidesliderthreedisplay = 0;

        }, 800);

    }

    $scope.changesliderthree = function () {

        $scope.lefttorightsliderone=0;
        $scope.righttoleftsliderone=0;
        $scope.lefttorightslidertwo=1;
        $scope.righttoleftslidertwo=0;
        $scope.lefttorightsliderthree=1;
        $scope.righttoleftsliderthree=0;



        $timeout(function () {

            $scope.showslideronedisplay = 1;
            $scope.hideslideronedisplay = 0;

            $scope.showslidertwodisplay = 0;
            $scope.hideslidertwodisplay = 1;

            $scope.showsliderthreedisplay = 0;
            $scope.hidesliderthreedisplay = 1;

        }, 800);

    }


    $scope.howitworksanimate = 0;


    /* $(document).ready(function () {
     $(window).scroll(function () { // check if scroll event happened
     if ($(document).scrollTop() > 350) { // check if user scrolled more than 50 from top of the browser window
     $(".navbar-fixed-top").css("background-color", "#5585B5"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
     $(".hidelogo").css("opacity", "1"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
     $(".starttimerlogo").css("display", "none"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
     $(".endtimerlogo").css("display", "initial"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)

     } else {
     $(".navbar-fixed-top").css("background-color", "#FFFFFF"); // if not, change it back to transparent
     $(".hidelogo").css("opacity", "0"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
     $(".starttimerlogo").css("display", "initial"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
     $(".endtimerlogo").css("display", "none"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)

     }
     });
     });*/

});

