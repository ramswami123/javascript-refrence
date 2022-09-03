//print function -> console.log('data'); in js
console.log('hello');

//alter is send pop-up messages
alert('you are in danger');

//create variable 
//variable ->var
//var is not datatype speacified
var h = 'geeta krishna';
console.log(h);

// taking input we use ->prompt() function
var age = prompt('enter age');
console.log(age);

//increement in variable 
age++;
console.log(age);

//decrement in variable
age--;
console.log(age);

//manipulating DOM 
//fancy name for changing HTML
document.getElementById('ids').innerHTML = age;

function gen() {
    console.log('gen function is working');
}
//calling function
//gen();

function fun() {
    var name = prompt('name');
    alert('you have been hacked ' + name);
}
//fun();

function pro(h1, h2) {
    console.log(h1 * h2);
    console.log(h1 ** h2);
}
pro(2, 3);

/**********************************************************************************************************************************************/
//loops

//while loops
num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

//for loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//let is used block scoped declaration ->local variable
//var is used for -> gobal and local variable declaration

//to print new line -> /n;
console.log('\n');



/**************************************************************************************************************************************** */
/*strings concept*/


var st = 'japanese';

//to find length
//length()->is not correct syntax
console.log('string lenght ->', st.length);
console.log(st.indexOf('pan'));

console.log(st.slice(2, ));
console.log(st.slice(2, 5));
//silicing
//in python we use : for remaining part 
//in js .just leave it

//replace function
console.log(st.replace('pan', '45678i'));
//output ja45678iese

//to change all letter to lower case
st.toLowerCase();
console.log(st);

st.toUpperCase();
console.log(st); //this does not output uppercase version of st

//to change all letter to upper case
console.log(st.toUpperCase()); //->this is the correct method

//split function 
var st2 = 'xew rty yuv opi ert 234u';
console.log(st2.split(' '));
//here in split function we should speacify how split strings

//another example case for split function
var st2 = 'xew,rty yuv,opi ert,234u';
console.log(st2.split(','));

/**************************************************************************************************************************************** */
/**arrays */

//array declaration
let arr = ['furits', 'hello', 'fang', 'Gang'];
console.log(arr);

let arr1 = new Array('furits', 'cute', 'fang', 'rey');
console.log(arr1);

//array common methods 

//to add new element to array
console.log(arr.push('hyuT'));
console.log(arr);

//to delete element
console.log(arr.pop(), arr); //removes last element

//to attach new element to every element present in array
//->simply replaces blank places with this
console.log(arr.join('new'), arr); //furitsnewhellonewfangnewGang

//to remove first element of arrray 
arr.shift();
console.log(arr);

//to add new element to first in array
arr.unshift('hot');
console.log(arr);

//to combine 2 arrays 
var f = ['q', 'w', 'e', 'f'];
var o = ['a', 'c', 'b', 'e'];
f = f.concat(o);
console.log(f);

//silicing in arrays
console.log(f.slice(2, 6));

//to reverse elements
console.log(f.reverse());

//to sort array
console.log(f.sort());
/****************************************************************************************************************************************************** */

/*objects*/

//declaring objects
let employe = { first: 'geeta', middle: 'krishna', last: 'pirla' };

//calling attributes in class
console.log(employe.first);

//we can change properties of class(attributes in python)
employe.first = 'pirla';
employe.last = 'pop';
console.log(employe);

/********************************************************************************************* */

/**if/else control flows */

/**logical operators
 * OR =||
 * AND=&&
 */

//donot use "let" for declaring vaible while taking input

var age = prompt('enter your age');

if ((age >= 18) && (age <= 100)) {
    console.log('you are free to watch content');
} else {
    alert('you are restricted');
}