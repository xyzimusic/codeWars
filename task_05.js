var uniqueInOrder = function(it){
    var arr = it.split('')
    var newArr = []
    arr.forEach((char,idx) => {
        if ( idx !== arr.length && char !== arr[idx+1]) newArr.push(char)
    })
    return newArr
}