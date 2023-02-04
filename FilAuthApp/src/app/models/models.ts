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

    constructor(address: string) {
        this.address = address;
    }
}

class Link {
    uuid: string = "";
    url: string = "";
    read: boolean = false;
    write: boolean = false;

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

class Response {
    code: ResponseStatus;
    data: any;

    constructor(code: ResponseStatus, data: any) {
        this.code = code;
        this.data = data;
    }
}

enum ResponseStatus {
    FOUND,
    CREATED,
    DELETED,
    UPDATED,
    SUCCESS,
    ERROR,
    NOTFOUND
}

export {
    Statistics, Organization, Link, AccessRule, User, Response, ResponseStatus
}