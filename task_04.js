var uniqueInOrder=function(iterable){
    let result;
    //your code here - remember iterable can be a string or an array

   iterable.forEach((element,i) => {
    
    if(iterable.lastIndexOf(element)!= i){
        delete iterable[i]
    }

   });
    result = iterable.filter((item)=>item)
    console.log(result);
    return result
  }

  uniqueInOrder([1,2,2,3,3])