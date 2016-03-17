namespace ContactListYo.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }

    export class AboutController {
        public message = 'Hello from the about page!';

        constructor($stateParams:any) {
            this.message = $stateParams["anything"] || this.message;
        }
    }

    export class ContactController {
        public contact;

        constructor(private contactListService, $stateParams) {
            this.contact = this.contactListService.contacts.filter((c) => { c.id === $stateParams["id"] })[0];
        }
    }

    export class ContactListController {
        constructor(private contactListService) { }
        public contacts = this.contactListService.contacts;
    }
}
