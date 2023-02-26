class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }

}

class Instructor extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web team'
    constructor(name, location){
        super(name,location)
    }
    statSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }   
}

class Developer extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;
    constructor(name, location,tech){
        super(name,location)
        this.tech = tech;
    }
    developreFeature(feature){
        console.log(`Please Develop the feature ${feature}`)
    }
}
class jobPlacement extends TeamMember{
    designation = 'Job Placement Instructor'
    team = 'Job Placement Team'
    region;
    constructor(name, location,region){
        super(name,location)
        this.region = region;
    }
    ProvideResume(feature){
        console.log(`Please Check the feature ${feature}`)
    }
}

const alia = new Developer('Alia','Dhaka','React');
console.log(alia);
alia.provideFeedback();