// Eightball Random Generator

let userName = 'Madelyn';
  userName ? console.log(`Hello, ${userName}!`)
  : console.log('Hello')

let userQuestion = 'Is it going to snow?';
  console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'Use Angel 2.0'
    break;
  case 1:
    eightBall = 'It is certain'
    break;
  case 2:
    eightBall = 'It is decidedly so'
    break;
  case 3:
    eightBall = 'Reply hazy try again'
    break;
  case 4:
    eightBall = 'Cannot predict now'
    break;
  case 5:
    eightBall = 'Do not count on it'
    break;
  case 6:
    eightBall = 'My sources say no'
    break;
  case 7:
    eightBall = 'Outlook not so good'
    break;
  case 8:
    eightBall = 'Signs point to yes'
    break;
}
  console.log(`The eightBall answered: ${eightBall}`);

// Race Participation Log

let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 18;

if (registeredEarly === true && runnerAge > 18) {
  raceNumber += 1000;
} 

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30am for registering early with the race number ${raceNumber}.`)
} else if (registeredEarly === false && runnerAge > 18) {
  console.log(`You will race at 11:00 for not registering early, your race number is ${raceNumber}.`)
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30pm, your race number is ${raceNumber}.`)
} else {
  console.log('Please see the registration desk if you are 18 years old.')
}