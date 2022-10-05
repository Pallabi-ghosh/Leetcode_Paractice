let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

//To find the city whose population is greater than 3 million
let byCities = cities.filter((e) => {
  return e.population > 3000000;
});

console.log(byCities)

//To find all name of the cities 
let names = cities.map((e) => {
  return e.name
})

console.log(names)

const data = {
  customerName: "Google",
  invoices: [
    { id: 123, name: "Pallabi", total: "20.44", paymentStatus: "paid" },
    { id: 321, name: "Arnab", total: "66.44", paymentStatus: "paid" },
    { id: 555, name: "Sikha", total: "29.88", paymentStatus: "paid" },
  ],
};

console.log(data.customerName);

const invoicesData = data.invoices.map((e) => e.id);

console.log(invoicesData);

const totalFilter = data.invoices.filter((e) => {
  return e.total > "20.44";
});

console.log(totalFilter);