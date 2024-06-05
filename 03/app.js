const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

//1 zadanie
function getSum(d, e, f){
    const dInt = parseInt(d)
    const eInt = parseInt(e)
    const fInt = parseInt(f)

    const arr = [dInt, eInt, fInt];
    arr.sort(function(a,b){
        return b - a;
    })
    return arr[0] + arr[1]
}




//2 zadanie
const isEven = function(num){
    if(typeof num !== 'number'){
        return null
    }else{
        return num %2 === 0
          
        // if(number %2 === 0){
        //     return true
        // }
        // return false
    
}
}
console.log(isEven(2), isEven(1), isEven('assdf'))


// 3 zadanie
function showInfo(value, isEven){
    switch(isEven){
        case null:
            console.log('Podany argument ' + value + ' nie jest liczbą');
            break;
        case  true:
            console.log('Podany argument ' + value + ' jest parzysty'); 
            break; 
        case  false:
            console.log('Podany argument ' + value + ' jest nieparzysty');  
            break;
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);


showInfo(sum, even);





function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}