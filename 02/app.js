
/* rozwiązanie z pętlą for */
const x = 4;
const z = Number(prompt('Podaj liczę!'))



if(z>=1&&z<9){
    for(let i = 1; i <= 9; i++){
        let result = i * z;
        console.log(z + ' x '+ i + ' = ' + result);
    }
}else{
    console.log('Podałeś błędną liczbę');
}
 

/* rozwiązanie z pętlą while  */
const a = Number(prompt('Podaj podstawę potęgowania!'));;
const n = Number(prompt('Podaj wykładnik!'));

let iter = 0;
let result = 1;
let info ='';
while(iter < n){
    
    result *= a

   if(iter > 0){
    info += ' * '
   }
   info += a ;
   iter++;
}
info = info + ' = ' + result;


console.log(info);

// let j = 1;
// let toNumber = 9;

// while(j <== toNumber){

//     let resultWhile = j * x;

//     console.log(x + ' x '+ toNumber + ' = ' + resultWhile);
// }




