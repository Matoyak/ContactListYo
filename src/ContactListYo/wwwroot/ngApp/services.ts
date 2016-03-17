namespace ContactListYo.Services {

    export class ContactListService {
        public contacts: Contact[] = [
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
        ]
    }
    angular.module('ContactListYo').service('contactListService', ContactListService);

    export class Contact {

        static count = 2; //The first two array indexes are the defaults

        id: string = "defaultId";
        constructor(public firstName: string, public lastName: string, public phone: string) {
            this.id = firstName.charAt(0) + lastName.charAt(0) + Contact.count++;
        }
    }
}
