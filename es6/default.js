const data=[1];
const [x,y=10]=data;
console.log(x);
console.log(y);

// default values are not dependent on data type

const person = {
    name: "Tanya",
    age: 20,
    phoneNo: 7985884079
};
const { name, age, phoneNo = 1234567890, city = "Delhi" } = person;
console.log(name);
console.log(age);
console.log(phoneNo);
console.log(city);

const{a,b,c}=person;
console.log(c);

const{name:fullname}="Vaish";
console.log(fullname);
console.log(name);