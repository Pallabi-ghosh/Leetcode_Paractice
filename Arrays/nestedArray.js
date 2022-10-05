let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];

//console.log(activities)

//console.table(activities);

for (i = 0; i < activities.length; i++) {
  //console.log(activities[i]);
  //console.log(activities.length)
  //console.log(activities[i][0])
  if (activities[i][0] == "Commute") {
    //console.log(activities[i][0]);
  }
}

activities.splice(1, 0, ["Programming", 2]);

//console.log(activities);

var nestedCourses = {
  courses: [
    { name: "Java", category: ["Spring", "Hibernate", "Servlets"] },
    { name: "Python", category: ["Django", "Machine Learning", "Automation"] },
    { name: "C", category: ["Windows Scripting", "C++"] },
  ],
};

console.log(nestedCourses.courses[0]); //output- { name: 'Java', category: [ 'Spring', 'Hibernate', 'Servlets' ] }

console.log(nestedCourses.courses[0].category); //output- [ 'Spring', 'Hibernate', 'Servlets' ]

const names = ["Bilbo", "Gandalf", "Nazgul"];

const length = names.map((e) => e.length);

console.log(length);

const courses = [
  { name: "Java", category: ["Spring", "Hibernate", "Servlets"] },
  { name: "Python", category: ["Django", "Machine Learning", "Automation"] },
  { name: "C", category: ["Windows Scripting", "C++"] },
];

const coursesName = courses.map((e) => e.name);

console.log(coursesName);

const coursesCategory = courses.map((e) => e.category);

console.log(coursesCategory);


