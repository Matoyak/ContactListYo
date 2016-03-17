var ContactListYo;
(function (ContactListYo) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies');
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('ContactListYo').service('movieService', MovieService);
        var ContactListService = (function () {
            function ContactListService() {
                this.contacts = [
                    {
                        id: "jd0",
                        firstName: "John",
                        lastName: "Doe",
                        phone: "555-555-5555"
                    },
                    {
                        id: "jd1",
                        firstName: "Jane",
                        lastName: "Doe",
                        phone: "666-666-6666"
                    },
                ];
            }
            return ContactListService;
        }());
        Services.ContactListService = ContactListService;
        angular.module('ContactListYo').service('contactListService', ContactListService);
        var Contact = (function () {
            function Contact(firstName, lastName, phone) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.phone = phone;
                this.id = "defaultId";
                this.id = firstName.charAt(0) + lastName.charAt(0) + Contact.count++;
            }
            Contact.count = 2; //The first two array indexes are the defaults
            return Contact;
        }());
        Services.Contact = Contact;
    })(Services = ContactListYo.Services || (ContactListYo.Services = {}));
})(ContactListYo || (ContactListYo = {}));
//# sourceMappingURL=services.js.map