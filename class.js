class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    supportSession(time){
        console.log(`Start the support session at ${time}`)
    }
}
const aamir = new Instructor('aamir', 'dhaka');
console.log(aamir);
aamir.supportSession('9:00pm');

const rinku = new Instructor('Rinku', 'Kushtia');
console.log(rinku);
