var person = {

	gender: 'Male',
	eyeColor: 'brown'
};

person.firstName = 'Ronald';

person.lastName = 'Hernandez'
person.age = 25;


delete person.age;
console.log(person);

function greetUser(person){

	console.log(person.firstName + ' ' + person.lastName);
}


greetUser(person);