export const isValidItem= (value)=>{
    console.log('Validating the item ', value)
const isValid = value.trim() !=='' && value.trim().length >=3 && value.trim().length !==0;
return isValid;
}




// // high order function from array 
// const arr = ["one", "two", "three"]

// arr.map((item) => {return item.length <= 3}); // transformation
// arr.filter((item) => {return item.length <= 3}) //filtering
// arr.reduce((item, acc) => {acc = item.length}); // reduce - combine in a single value
// arr.find((item) => {return item === "two"}); // search


// // setter methods
// // we have state in react where having two variable one holding value for the state and other holding a setter function that mutate the state
// const [fruits, setFruits] = useState(["one", "two", "three"]);

// fruits = [] // not possible will not change

// // the way to make a change in the state is through setter method
// setFruits(["one", "two", "four"]); // its possible 

// // using a callback is the secnd way to make changes having previous state
// setFruits((prevState) => {return prevState.map()});