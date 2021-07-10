var salon={
    name:"The Fashion Pet",
    address:{
        street:"University at Larchmont",
        number:"605"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
    }
}

var scooby=new Pet("Scooby",8,"Male","Great Dane","Shower","Shaggy","555-555-5555");
var scrappy=new Pet("Scrappy",1,"Male","Nails Cut","Shaggy","666-666-6666");
var flux=new Pet("Flux",3,"Male","Mane Coon Mix","Hair Cut","Carrie","777-777-7777");
var luna=new Pet("Luna",5,"Boxer","Cut and Wash","Robbie","888-888-8888");
var vex=new Pet("Vex",2,"Mixed","Nail Trim","Carrie","999-999-9999");

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(flux);
salon.pets.push(luna);
salon.pets.push(vex);

function displayPet(){
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`<li>${salon.pets[i].name}</li>`;
    }
    console.log(tmp)
}
displayPet();

function registerPet(){
 //get and store the values
 var inputName=document.getElementById("petName").value;
 var inputAge=document.getElementById("petAge").value;
 var inputGender=document.getElementById("petGender").value;
 var inputBreed=document.getElementById("petBreed").value;
 var inputService=document.getElementById("petService").value;
 var inputOwnerName=document.getElementById("ownerName").value;
 var inputPhone=document.getElementById("ownerPhone");
 // console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputPhone);
 //create the generic object
 var thePet=new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputPhone);
 console.log(thePet);
 //push object into the array
 salon.pets.push(thePet);
 //clear the inputs   
}

function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("ownerName").value="";
    document.getElementById("ownerPhone").value="";
} //clearInputs();, then displayPet();