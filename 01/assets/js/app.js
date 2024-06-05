// const a = '4.2';
// const b = 9;

const a = '4.2';
const b = 30;

console.log(a, b);
console.log('(typeof a):', typeof a);
console.log('(typeof b):', typeof b);

const c = Number(a) + b;
console.log('c' , c);

const d = Number(a) - b;
console.log('d' , d);

const e = b - Number(a);
console.log('e' , e);

const f = Number(a) * b;
console.log('f' , f.toFixed(2));

const g = Number(a) / b;
console.log('g' , g.toFixed(2));

const h = b / Number(a);
console.log('h' , h.toFixed(2));

const i = Number(a) * Number(a);
console.log('i' , i);

const j = b * b;
console.log('j' , j);

const arr =[c, d, e, f, g, h, i];

arr.forEach(function(element){
    if(element>20){
        console.log(element + ' jest większe od 20');
    }else{
        console.log(element + ' jest mniejszy od 20');
    }
    // console.log(element,'trrrtrtrtrt');
})






