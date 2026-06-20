let data={
  "name":"XYZ",
  "age":44
}

console.log(typeof(data));
data = JSON.stringify(data);
console.log(data);
console.log(typeof(data));

data = JSON.parse(data)
console.log(data);
console.log(typeof (data));