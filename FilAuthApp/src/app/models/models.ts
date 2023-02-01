import { v4 as uuid4 }  from 'uuid';

class Statistics {
    systems : number = 0;
    rules : number = 0;
    users : number = 0;
}

class Organization {
    address: string = "";
    name : string = "";
    country : string = "";
    province : string = "";
    city : string = "";
    zip : string = "";
    statistics : Statistics = new Statistics();
}

class Link {
    uuid: string = "";
    url: string = "";
    read: boolean = true;
    write: boolean = true;

    constructor() {
        this.uuid = uuid4();
    }
}

class AccessRule {
    address: string = "";
    uuid: string = "";
    description: string = "";
    links: Link[] = [];

    constructor() {
        this.uuid = uuid4();
    }
}

class User {
    address: string = "";
    uuid: string = "";
    number: string = "";
    fullName: string = "";

    constructor() {
        this.uuid = uuid4();
    }
}

export {
    Statistics, Organization, Link, AccessRule, User
}