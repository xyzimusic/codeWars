function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    
    const averageMark = classPoints.reduce((acc,value)=>acc+=value)/classPoints.length
      console.log(averageMark)
    return yourPoints>averageMark
}



