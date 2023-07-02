// How many urinals are free?
// In men's public toilets with urinals, there is this unwritten rule that you leave at least one urinal free between you and the next person peeing. For example if there are 3 urinals and one person is already peeing in the left one, you will choose the urinal on the right and not the one in the middle. That means that a maximum of 3 people can pee at the same time on public toilets with 5 urinals when following this rule (Only 2 if the first person pees into urinal 2 or 4).

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