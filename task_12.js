function getFreeUrinals(urinals){

    const str = String(urinals).split('')
    console.log(str);
    let i=0;
    let sum = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='1' && str[i+1]=='1') return -1
        if((str[i-1]=='0' | str[i-1]===undefined) && str[i]=='0' && (str[i+1]=='0' | str[i+1]===undefined)){sum++; str[i]='1'}

    }
    console.log(str);
    return sum
    }


    let urinals = '00000'
  getFreeUrinals(urinals)
  console.log(getFreeUrinals(urinals))