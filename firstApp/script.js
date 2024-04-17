//input
birthYear = 1999;
name = 'Minoua'

//processing
today = new Date()
actualYear = today.getFullYear()
age = actualYear - birthYear
msg = 'Im ' + name + ' and Im ' + age + ' years old.'

alert(msg)