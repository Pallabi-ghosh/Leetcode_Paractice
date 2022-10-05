// Challenge : #10
// Problem: Write a function to sort a list of patients based on critical condition

// Disclaimer: Different variations can be there:

// 1. Show pinned contacts/groups in Whatsapp list, Recently pinned should be at top
// 2. Show contacts of family first then favourites, then friends

//Asked in TATA 1MG , UI Tech Round

// const output = [
//     { name: "Om", priority: "high" },
//     { name: "Vivek", priority: "low" },
// ]


const input = {
  patientArray: [
    { name: "Vivek", priority: "low" },
    { name: "Om", priority: "high" },
  ],
  priorityArray: ["low", "medium", "high"],
};

const criticalCondition = input.patientArray.sort((a) =>{
    if(a.priority == "high"){
        console.log(a.name, a.priority)
        //console.log(JSON.stringify(a.name, a.priority));
    } 
})