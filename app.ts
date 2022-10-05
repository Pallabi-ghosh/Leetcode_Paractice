
const now = new Date();

console.log(now.toLocaleString());

  
function getDate(date: Date) {
    console.log(`Today's date is ${date}`);
}
  
getDate(new Date());