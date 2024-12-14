
export let name:string ='abebe';
name = 'Almaz' // if we assign number or boolean we get error

let isNice:boolean = true;

isNice=false // only boolean can assign here
console.log(isNice)

//Explicite and inplicit 
//Explicite write with type here type number added
let age:number = 10;
console.log(age)

//Inplicete declaring variable with no type the typescript guess the type 

let isGirl = true;
console.log(isGirl);
//here if we assign isGirl without boolean we get an error Typescript guess boolean based on value
// This guess is called infer. on Exmple on above TS infered boolean


//Specal type 
//Type any
export let any:any = "Abebe";
any = true; // no error
any = 100 // no error
//here is type any disable type check of typeScript
//NB TS will not provide type sefty

//Type unknown
// unknown is similar but safer alternative to any

export let myName:unknown ="Kebede";

myName = true;
myName = 50;// Not assignable in reactNode


//Array
export let number:number[] = [1,2,3,4];
export let employee:string[];

employee = ['kedir', 'xenebe', 'addis'];

//tuples array with multiple type (Tuples)

let person: [string, number]= ['abebe', 123];

console.log(person)

//Read Only array
export let student: readonly string[] = ['Belete'];

//Named tuples
export let graph:[number, number] = [12, 45];


//Typescript array

export let music:{ title:string,artist:string,track:number} ;

 music = { title:'ethiopia',track:2, artist:'teddy afro'}

 // Here if we miss one of this we will get error

 //export let music:{ title:string,artist:string,track:number} 
 //   music = { title:'ethiopia',track:2} error arist missed  to solve we put optional property "?"

 let car:{type:string, model?:string,year:number}
 //Model is optional property so we can assign without model value

car = {type:"Sedan", year:2020};// no error model is optional

console.log(car);

//Index signiture string index
export let nameAge:{[index:string]:number} = {}

nameAge.Kebede = 22;

//Index signiture number index

export let idIndex:{[index:number]:string} ={}

idIndex[1] = "Zeleke";
idIndex[2] = "Kebede";
idIndex[3] = "Hailu";

//Numeric Enums

//Enums is a spechal that represent a grup of constant if value assigned by default start from Zero
export enum AlphaBet {
    A,
    B,
    C
}

// AlphaBet.A = 0 and AlphaBet[0] = A
// AlphaBet.B = 1 and AlphaBet[0] = B
// AlphaBet.C = 2 and AlphaBet[0] = C

// if we Assign the value the rest will be automatically increment
enum CarModel {
    Toyota = 7,
    Mazda,
    Nissan=101,
    Honda=222,
    Suzuki
}

console.log(CarModel.Toyota);

//CarModel.Toyota = 7  and      CarModel[7] = Toyota
//CarModel.Mazda  = 8   and     CarModel.[8] = Mazda
//CarModel.Nissan = 101 and     CarModel.[101] = Nisan
//CarModel.Honda  = 222  and    CarModel.[222] = Honda
//CarModel.Suzuki = 223 and     CarModel[223] = Sizuki



// String Enums
//This allows to assign string value to each member

export enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }
  console.log(Direction);

//Direction.Up = "UP"
//Direction.Down = "DOWN"
//Direction.Left = "LEFT"
//Direction.Right = "RIGHT"

export enum MixedEnu {
    Banana,
    Orange="ORANGE",
    Apple=2,
    Avocado
}



//Allias and interface

//Aliases

type CarYear = number; // here number type replaced by CarYear
type CarModele = string;//here string type replace by CarModel

type Car = {   // here put all single type inside of an array with type
    year:CarYear,
    model:CarModele
}
 
const myCar:Car = { // giving the value for each inside array 
    year:2010,      // here all value declared which is transfered from type Car    
    model:'Yaris'   // we should fill all values with correct type
}
console.log(myCar);


// Interface

interface vehecles {
    type:string,
    model:string,
    year:number
}

const Spacific:vehecles ={
    type:'Toyota',
    model:'Yaris',
    year:2010
};
console.log(Spacific);

//Interface with extend
//extend hepes to add some additional caracter 
interface vehiclesType {
    type:string,
    model:string,
    year:number
}
//additional to vehiclesType below added owner name
interface Licence extends vehiclesType{
    owner:string
}

//new if we want to add value on Licence we must give value for all vehicleType and Licence unless we put condition "?"
// we will get an error 

const OwnerCerteficate:Licence = {
  type:'Nissan',
  model:"Patrol",
  year:2019,   // comes from origin
  owner:"Zeleke Gesese"   // this is cames from extended
}

console.log(OwnerCerteficate);


//Union type 
//union type for those which has morethan a single type 
// let model has either string or number this experss as model:string|number  or => " | "



const ModelofCar = (models : string | number) =>{
  console.log(`the model of this car is ${models}`)
}
ModelofCar('2019'); // both string and number are accepted value
ModelofCar(2019)


//Functions 

//Retern type

        const getNumber = ():number => {
            return new Date().getTime();
        }
    console.log(getNumber)
            // reture value here is number but you can avoid return type TS can "Guess" or infer the returen value

            //Below without return type

            const getNewNumber = () => {
                return new Date().getTime();
            }
            console.log(getNewNumber())
            // both "getNumber" and " getNewNumber" have the same return 
//Void return type which means with no return value

const noReturn = ():void => {
  console.log("Hello world");
}

noReturn() // NB this console.log is just to avoid warning

// the same as the preveus one we can avoid type void

export const multiply = (a:number, b:number) => {
    return a*b;
}

//Optional parameter
// here if we do not add age finally when we call inputParam function the age value will be undefined
const inputParam = (name:string, age? :number)=>{
    console.log(`name is ${name} and age is ${age}`)
}
inputParam("abebe");


//Default Parameter
//in default alwayes there is a value at initial we get 10 and if we set value we gat latest
 const inputDefault = (name:string, age:number = 10) =>{
    console.log(`name is ${name} and age is ${age}`)
 }
 inputDefault('Kebede');

//Named Parameter 

const divide = ({dividend, deviser} : {dividend:number, deviser:number}) => {
     console.log(dividend / deviser);
}

divide({dividend:4,deviser:4});