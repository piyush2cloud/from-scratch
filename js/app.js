var mainApp = angular.module("poolin", ['poolin.controllers', 'duScroll']);


mainApp.directive("scroll", function ($window) {
    return function (scope, element, attrs) {

        angular.element($window).bind("scroll", function () {
            console.log(this.pageYOffset);

            if (this.pageYOffset > 350) {

                scope.navbarbackgroundcolourwhite = 0;
                scope.navbarbackgroundcolourdark = 1;

                scope.starttimernodisplaynone = 1;
                scope.starttimernodisplaytrue = 0;

                scope.endtimerlogodisplaytrue = 1;
                scope.endtimerlogodisplaynone = 0;

            }

            else {
                scope.navbarbackgroundcolourwhite = 1;
                scope.navbarbackgroundcolourdark = 0;

                scope.starttimernodisplaynone = 0;
                scope.endtimerlogodisplaytrue = 0;

                scope.starttimernodisplaytrue = 1;
                scope.endtimerlogodisplaynone = 1;
            }


            scope.$apply();
        });
    };
});
