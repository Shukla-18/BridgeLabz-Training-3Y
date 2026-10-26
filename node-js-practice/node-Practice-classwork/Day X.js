// let bubble = ()=>{
//     console.log(a+b);
// }
// console.log(bubble(null+6));

// function sort(){
//     let arr = [5, 2, 9, 1, 5, 6];
//     arr.push(10);
//     arr.pop();
//     arr.shift();
//     arr.unshift(0);
//     arr.sort((a, b) => a - b); // asc
//     arr.sort((a, b) => b - a); // dsc
//     let iskey =arr.some((value) => value > 5);

// }


// function findLargest(nums) {
//     let largest = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > largest) {
//             largest = nums[i];
//         }
//     }
//     return largest;
// }
// let nums = [12, 45, 7, 89, 23];
// console.log(findLargest(nums));


// function findSmallest(nums) {
//     let smallest = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] < smallest) {
//             smallest = nums[i];
//         }
//     }
//     return smallest;
// }
// let nums =  [12, -5, 7, 2, 23];
// console.log(findSmallest(nums)); 


// function SecondLargest(nums) {
//     let largest = nums[0];
//     let secondLargest = -Infinity; }

// function abc(){
//     let arr = [5, 2, 9, 1, 5, 6];
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);    
// }
//     for(let a of arr){
//         console.log(a);
//     }
// }

// function abc(){


//     let obs = [{names:"mohan", classes:"XYZ"},
//         {names:"rahul", classes:"ABC"},
//         {names:"aman", classes:"PQR"},
//         {names:"jkl", classes:"STU"}

//     ]
    // for (let ob in obs){
    //     console.log(obs[ob][1]);
    // obs.sort((a, b) => a.names-b.names); // asc
    // obs.sort((a, b) => b.classes-a.classes); // dsc

//     function Names (a,b){
//         let isuser =b.some((value) => value.names === a)
//         if (isuser) {
//             return "User Found";
//         }
//         else {
//             return "User Not Found";
//         }
//     }
// console.log(Names("mohan",obs));

// filter
// let user0 = obs.every((value) => value.classes!="sc");
// let res ={
//     messege:"All students are not in sc class",
//     status:user0
// }
// console.log(res);
// }

//reverse an array in place
// function reverseInPlace(array) {
//     let left = 0;
//     let right = array.length - 1;
//     while (left < right) {
//         [array[left], array[right]] = [array[right], array[left]];
//         left++;
//         right--;
//     }
//     return array;
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(reverseInPlace(numbers)); 

// check wether a array is sorted or not

// function isSorted(array) {
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < array[i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// let sortedNumbers = [1, 2,2,4,7];
// console.log(isSorted(sortedNumbers)); 
 

