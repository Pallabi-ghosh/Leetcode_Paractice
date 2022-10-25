function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

const todoAsyncFunction = async () => {
  let response = await fetch("./todos/todos.json");
  let data = await response.json();
  return data;
};

todoAsyncFunction().then(function (data) {
  return console.log("resolved :", data);
});
