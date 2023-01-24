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

export {
    Statistics, Organization
}