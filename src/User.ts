//when we create and export a class we give it a capital name
import {Mappable} from './CustomMap'
import faker from 'faker';

//implements = Typescript make sure we implement everything in mappable
//errors will now occur here if we forget to implement something from mappable
export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red'


    constructor(){
        this.name = faker.name.firstName(); 
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }
}