export default class Person {
    constructor({id,vehicles,kmTraveled,from,to}) {
        this.id = id,
        this.vehicles = vehicles,
        this.kmTraveled = kmTraveled,
        this.from = from,
        this.to = to
    };

    formatted(language) {
        return {
            id: Number(this.id),
            vehicles: new Intl.ListFormat(language,{style:"long",type:"conjuction"}),
        }
    }
}