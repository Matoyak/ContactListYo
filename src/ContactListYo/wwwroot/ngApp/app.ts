namespace ContactListYo {

    angular.module('ContactListYo', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/home.html',
                controller: ContactListYo.Controllers.HomeController,
                controllerAs: 'controller'
            }).state('about', {
                url: '/about/:anything',
                templateUrl: '/ngApp/about.html',
                controller: ContactListYo.Controllers.AboutController,
                controllerAs: 'controller'
            }).state('contactList', {
                url: '/contactList',
                templateUrl: '/ngApp/contactList.html',
                controller: ContactListYo.Controllers.ContactListController,
                controllerAs: "contactListControl"
            }).state('contact', {
                url: '/contact/:id',
                templateUrl: '/ngApp/contact.html',
                controller: ContactListYo.Controllers.ContactController,
                controllerAs: "contactControl"
            }).state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
}
