/* Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). 
They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project. */

let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber);

var registeredEarlyOrNot = true;

var runnersAge = 18;

if (runnersAge > 18 && registeredEarlyOrNot == true) {
  console.log(
    `You will race at 9:30 am. And you race number is- ${(raceNumber += 1000)}`
  );
} else if (runnersAge > 18 && !registeredEarlyOrNot == true) {
  console.log(
    `Late adults run at 11:00 am. And you race number is- ${raceNumber}`
  );
} else if (runnersAge < 18) {
  console.log(
    `Youth registrants run at 12:30 pm. And you race number is- ${raceNumber}`
  );
} else {
  console.log(`Runner to see the registration desk.`);
}
