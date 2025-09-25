// TODO: write your code here
/*import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));*/

export default function orderByProps(object,myArray){
let resultarray =[]
let resultnotarray =[]
const {...data} = object
const properties =myArray
for(let i in data){
    if (properties.includes(i)) {
        const result ={}
        result["key"]=i
        result["value"] =data[i]
        resultarray.push(result)

    }
    else {const result ={}
        result["key"]=i
        result["value"] =data[i]
        resultnotarray.push(result)}
    
}

resultnotarray.sort((a, b) =>
   a.key.localeCompare(b.key))

const resultall = resultarray.concat(resultnotarray);
return resultall
}

