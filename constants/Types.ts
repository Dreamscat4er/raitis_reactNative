

export interface IAddress {
    country:string;//TODO country list
    city:string;//TODO city list
    street:string;
    house:string;
}
export interface ISignUp {
    name:string;
    email:string;
    phoneNumber:string;
    password:string;
    repeatPassword:string;
    
}

export interface IOption { //Interface for list of countries/cities
    label:string,
    value:string;
}

export interface ILogIn{
    email:string;
    password:string;
}