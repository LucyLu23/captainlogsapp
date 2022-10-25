for(let i=1; i<+100;i++){
    console.log(i);
}
let i1=1;
while(i1<=100){
    console.log(i1);
    i1++
}
let num=12;
if(num%3==0){
    console.log('Fizz')
};
console.log(num%3==0? 'Fizz': num);

let num1=16;
if (num1%5==0){
    console.log('Buzz');
}
console.log(num1%5 == 0? "Buzz":num1)


let num2=30;
console.log(num2%5 == 0 && num2%3==0 ? "FizzBuzz":num2)

const wolfy =['Wolfy',"wolf", 16, 'Yukon Territory'];
const sharky = ['Sharky', 'shark', 20, 'Left Coast'];
const plantee = ['Plantee','plant', 5000, 'Mordor']
const  porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
const dart = [ "D'Art ", "Demogorgan Dog", 2,"Upside Down"]

plantee[2] += 1; 
console.log(plantee[2]);
//console.log(wolfy[3]='Gotham City', wolfy); 
wolfy[3]='Gotham City';
console.log(wolfy);
console.log(wolfy[3]);
dart.splice (4,0,'Hawkins');
console.log(dart);
dart.push('Hawkins');
console.log(dart);
/* wolfy.splice(0,1,'Gameboy');
console.log(wolfy); */
delete wolfy[0];
console.log(wolfy);
wolfy[0]='Gameboy';
console.log(wolfy);
console.log(wolfy.unshift("Gameboy"));
console.log('-----------------------')
var ninjaTurtle = ['Donatello','Leonardo','Raphael','Michaelangelo'];
for (i=0; i<ninjaTurtle.length; i++){
    console.log(ninjaTurtle[i].toUpperCase());
}
ninjaTurtle.forEach(word=>{
    console.log(word.toUpperCase())
})
ninjaTurtle.map(word => {
    console.log(word.toUpperCase())
})
var ninjaTurtle1 = ['Donatello','Leonardo','Raphael','Michaelangelo'];

let j=0;
while (j<ninjaTurtle1.length){
    console.log(ninjaTurtle1[j])
    console.log(ninjaTurtle1[j].toUpperCase());
    console.log(ninjaTurtle1[j].toLowerCase());
    j++;
}

const favMovies = ['Jaws','The Fellowship of the Ring','HowI\'s Moiving castle',
'Django Unchained', 'Cloud Atlas', 'The Usual suspects', 'Toy Story','Conan the Barbarian',
'Titanic', 'Harry Potter','Fried Green Tomatoes', 'Volver', 'Oculus','Seven','Black Panther',
'Harry Potter','Imitation of Life', 'Snatch','Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));
console.log(favMovies.push('Dragon'));
console.log(favMovies);
console.log('--------')
console.log(favMovies.sort());
console.log(favMovies.pop());
console.log(favMovies);
console.log(favMovies.indexOf('Django Unchained'));
console.log(favMovies.splice(3,1, 'Avatar'));
console.log(favMovies);
favMovies.slice(0,3);
console.log(favMovies);//slice does not affect the original array.
console.log(favMovies.slice(0,3));
console.log('--------')
console.log(favMovies.indexOf('Fast and Furious'));
console.log(favMovies.indexOf('Goodness'));

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
console.log(whereIsWaldo.splice(1,1));
console.log(whereIsWaldo);
whereIsWaldo[1][2]='No one';
console.log(whereIsWaldo);

for (i=1;i<=20; i++){
    console.log('Love me, pet me! hsssssss');
}
/* for (i=1;i<=10; i++){
    if (i%2==0)
        console.log('....human..why you taking pictures of me?');
    else if(1%3==0){
        console.log('.time for lunch?');
    }else{
        alert('what are you doing here?')
    }

} */

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
let sum=0;
for (i=0; i<nums.length; i++){
    sum += nums[i];
   
}
console.log(sum/(nums.length +1));
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

let kristynsShoe = kristynsCloset.slice(0,2);
console.log(kristynsShoe);

let kristynsShoe1 = kristynsCloset.splice(0,2);
console.log(kristynsCloset);
console.log(kristynsShoe1);

/* thomsCloset[2].push(kristynsShoe1);
console.log(thomsCloset[2]);
thomsCloset[2].push(kristynsShoe1[0],kristynsShoe1[1]);
console.log(thomsCloset[2]); */
thomsCloset[2].splice(3,0,kristynsShoe1[0],kristynsShoe1[1]);
console.log(thomsCloset[2]); 
console.log(`Kristyn will be super cool with ${kristynsCloset[0]}`);
console.log(`Thom will be awesome with ${thomsCloset[0][1]}, ${thomsCloset[1][2]}`);











class Hamster{
    constructor(name){
        this.owner = ''
        this.name =name
        this.price =15
    }
    wheelRun(){
        console.log('squeak squeak')
    }
    eatFood(){
        console.log("nibble nibble")

    }
    getPric(){
        return this.price
    }
}
class Person{
    constructor(name){
        this.name =name
        this.age =0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`I am ${this.name} hello`)
    }
    eat(){
        this.weight++
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
}

const Timmy = new Person('Timmy');

Timmy.age =5;
Timmy.height="1.2meters";
Timmy.weight =60;
Timmy.eat();
Timmy.exercise();
console.log(Timmy);
