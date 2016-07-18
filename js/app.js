var miniRouting = angular.module('miniRouting', ['ui.router']);

miniRouting.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/home/homeTmpl.html',
        controller: 'homeCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'js/settings/settingsTmpl.html',
        controller: 'settingsCtrl'
      })
      .state('products', {
        url: '/products/:id',
        templateUrl: 'js/products/productsTmpl.html',
        controller: 'productsCtrl'
      });

      $urlRouterProvider
        .otherwise('/');
});
