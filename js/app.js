var mainApp = angular.module("poolin", ['poolin.controllers','duScroll','ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

        when('/howitworks', {
            templateUrl: 'html/howitworks.html',
            controller: 'howworkCtrl'
        }).

        when('/home', {
            templateUrl: 'html/homepage.html',
            controller: 'myCtrl'
        }).

        when('/getstarted', {
            templateUrl: 'html/getstarted.html',
            controller: 'getstartCtrl'
        }).

        when('/faqs', {
            templateUrl: 'html/faqs.html',
            controller: 'faqCtrl'
        }).

        when('/business', {
            templateUrl: 'html/business.html',
            controller: 'businessCtrl'
        }).

        when('/accounts', {
            templateUrl: 'html/business.html',
            controller: 'accountCtrl'
        }).

        when('/examples', {
            templateUrl: 'html/examples.html',
            controller: 'exampleCtrl'
        }).

        otherwise({
            redirectTo: '/home'
        });
}]);
