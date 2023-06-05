// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    let ss = seconds % 60 
    let hh = Math.floor(seconds / 3600) 
    let mm = (seconds - hh*3600 - ss)/60

    function addZero(myVar){
        if(myVar<=0){
            myVar = `00`
        }
        if(myVar>0 && myVar<10){
            myVar = `0${myVar}`
        }
        return myVar
    }

    ss = addZero(ss)
    hh = addZero(hh)
    mm = addZero(mm)

    return `${hh}:${mm}:${ss}`;
  }


console.log(humanReadable(0));