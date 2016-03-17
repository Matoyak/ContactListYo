var ContactListYo;
(function (ContactListYo) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = 'Hello from the home page!';
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController($stateParams) {
                this.message = 'Hello from the about page!';
                this.message = $stateParams["anything"] || this.message;
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var ContactController = (function () {
            function ContactController(contactListService, $stateParams) {
                this.contactListService = contactListService;
                this.contact = this.contactListService.contacts.filter(function (c) { c.id === $stateParams["id"]; })[0];
            }
            return ContactController;
        }());
        Controllers.ContactController = ContactController;
        var ContactListController = (function () {
            function ContactListController(contactListService) {
                this.contactListService = contactListService;
                this.contacts = this.contactListService.contacts;
            }
            return ContactListController;
        }());
        Controllers.ContactListController = ContactListController;
    })(Controllers = ContactListYo.Controllers || (ContactListYo.Controllers = {}));
})(ContactListYo || (ContactListYo = {}));
//# sourceMappingURL=controllers.js.map