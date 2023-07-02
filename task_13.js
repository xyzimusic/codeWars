const students = [
    {
        name: "Bob",   // "Hi, Bob!"
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

let getNames = (array) => {
    const result = []
    const getValueForResult = (el) => el.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getValueForResult(array[i])
    }
    return result
}

const getUpdatedStudents = (array) => {
    const result = []
    const getValueForResult = (el) => ({...el, isStudent: true})
    for (let i = 0; i < array.length; i++) {
        result[i] = getValueForResult(array[i])
    }
    return result
}

const getMappedArray = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

const getNameForResult = (el) => el.name
const addPropForResult = (el) => ({...el, isStudent: true})

// console.log(getMappedArray(students,getNameForResult))
// console.log(getMappedArray(students,addPropForResult))

let getNamesStudents = (array) => students.map((student) => student.name)

const getFilteredArray = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result.push(array[i])
        }
    }
    return result
}

// console.log(getFilteredArray(students, st => st.age >= 21))
// console.log(students.filter(st => st.age >= 21))


const myConcat = (array, param) => {
    let newArr = structuredClone(array)
    if (Array.isArray(param)) {
        for (let i = 0; i < param.length; i++) {
            newArr.push(param[i])
        }
    } else newArr.push(param)
    return newArr
}

// console.log(myConcat(students, [1, 2, 3]))

const myRevers = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }
    return array
}
let arr = [1,2,3,4]
// console.log(myRevers(arr))

const mySlice = (array, startindex, endIndex) => {
    const result = []

    for (let i = startindex; i < endIndex ; i++) {
        result.push(array[i])
    }

    return result;
}

// console.log(mySlice(arr,1,3))

const myIncludes = (array, item) => {
    for (let i = 0; i <array.length ; i++) {
        if (array[i] === item)return true
    }
    return false
}

const myIndexOf = (array,item) => {

    for (let i = 0; i <array.length ; i++) {
        if (array[i] === item) return i
    }
    return -1
}

// console.log(myIndexOf(students, students[0]))

let arr2 = [1,2,3,4]
const myEvery = (array, func) =>{
    for (let index = 0; index < array.length; index++) {
        if(!func(array[index])) return false
    }
    return true
}

const arr3 = [0, 1, 2, [[[3, 4]]]];
//еще надо бы флет сделать


// const myFlat = (array, level = 1) => {
//     const result = []
//     for(; level>0; level--){
//         for (let i = 0; i < array.length; i++) {
//             if(Array.isArray(array[i])){
//                 for (let j = 0; j < array[i].length; j++) {
//                     result.push(array[i])
//                 }
//             }else {
//                 result.push(array[i])
//             }
//     }
// }

//     return result
// }
// console.log(myFlat([1,2,[3,[4,5]]]));
// console.log(myEvery(arr2, st=>st>-1));


const myFlat = (array, level = 1) => {
    let result = []
    for(let i = 0; i< array.length; i++){
        if(level){
            if(Array.isArray(array[i])) {
                let secondResult = myFlat(array[i],level - 1)
                    for( let j = 0; j < secondResult.length; j++  ) {
                    result.push(secondResult[j])
                }      
            }
            else {
                result.push(array[i])
            }
        }
        else {
            result.push(array[i])
        }
    }
    return result
}
