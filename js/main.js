//1

const sentence = ["sense.", "make", "all", "will", "This"];
const newReverseArray = []

function reverseArray (sentence){
    for(i=4; i>=0; i--){
        newReverseArray.push(sentence[i])
    }
}

reverseArray(sentence)

console.log(newReverseArray);
 

//2

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(aliens){
    for(i=0; i<=3; i++){
    
        console.log("Oh powerful" +" " + aliens[i] + ", " + "we humans offer our unconditional surrender!" )
    }
}
greetAliens(aliens);


//3
let newArr=[]

const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos"
  ];

  const myStuff = [
    "sweaters",
    "skateboards",
    "family-night",
    "my room",
  ];
  
  function justCoolStuff(myStuff, coolStuff) {
    for(let i=0; i<=4; i++){
        for(let j=0; j<=3; j++){
        if(coolStuff[i] == myStuff[j]){
        newArr.push(coolStuff[i])}
        }
    }

  }
justCoolStuff(myStuff, coolStuff)

  console.log(newArr);

  //4

  const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
  ];
  const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
  ];

  function isTheDinnerVegan(array){
    for(let elements of array){
  if(Object.values(elements)[1]=="plant"){
    return true
  }
  return false
}
}

  console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));
