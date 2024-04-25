//input
let birthYear = parseInt(prompt('When were you born ?'));
let name = prompt('Insert your name.');
let baseSalary = parseFloat(prompt('Insert your base salary'));
let gratification = parseFloat(prompt('Insert how much is your gratification.'));
let bonus = parseFloat(prompt('Insert how much is your bonus.'));
let netSalary = 0
let discount = parseFloat(prompt("How much you're discounted?"))
let aditional = 0


//processing
today = new Date()
actualYear = today.getFullYear()
age = actualYear - birthYear
netSalary = baseSalary + gratification + bonus - discount


//output
let message ='Im ' + name + ', Im ' + age + ' years old and my wage is ' + netSalary
alert(message)

