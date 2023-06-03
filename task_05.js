var uniqueInOrder = function(it){
    var arr
    typeof it === 'string' ? arr = it.split(''): arr= it
    var newArr = []
    arr.forEach((char,idx) => {
        if ( idx !== arr.length && char !== arr[idx+1]) newArr.push(char)
    })
    return newArr
}