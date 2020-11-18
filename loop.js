for( var i = 0; i < 10; i++ ) {
    console.log( i );
}for( var i = 9; i >= 0; i-- ) {
    console.log( i );
}
var fruit = ["banana", "orange", "apple", "kiwi",]
for( var i = 0; i < fruit.length; i++ ) {
    console.log( fruit[i] )
}

var numbers = [];

for( var i = 0; i < 10; i++ ) {
    numbers[i] = i;
}
console.log( numbers );

for( var i = 0; i < 101; i++ ) {
    if( i % 2 === 0 ) {
        console.log( i + " is even");
    }
    
}
  var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]  
var fruite2 = [];

for( var i = 0; i < fruit.length; i++ ) {
   if( i % 2 === 0) {
       fruite2.push( fruit[i] )
   }
    
}

console.log(fruite2);

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

for( let i=0; i < peopleArray.length; i++ ) {
    console.log( peopleArray[i].name );
}
let names = [];
let occupations = [];


for( let i=0; i < peopleArray.length; i++ ) {
    names.push( peopleArray[i].name );
    occupations.push( peopleArray[i].occupation );
}

console.log( names );
console.log(occupations);

let names2 = [];
let occupations2 = [];


for( let i=0; i < peopleArray.length; i++ ) {
    i % 2 === 0 ? names2.push( peopleArray[i].name ) : occupations2.push( peopleArray[i].occupation );
    
}

console.log( names2 );
console.log( occupations2 );

var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] );    
    for( var a = 0; a < 3; a++ ) {
        grid[i].push( 0 );
    }
}

console.log( grid );


var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] );    
    for( var a = 0; a < 3; a++ ) {
        grid[i].push( i );
    }
}

console.log( grid );

var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] );    
    for( var a = 0; a < 3; a++ ) {
        grid[i].push( a );
    }
}

console.log( grid );

var grid = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];

for( var i = 0; i < grid.length; i++ ) {
    
    for( var a = 0; a < 3; a++ ) {
        grid[i][a] = "x";
    }
}

console.log( grid );