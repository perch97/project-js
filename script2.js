// const numberOfFilms = +prompt("How many movies have you watched already?","");

// personalMovieDB = {
//     count : numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
// };

// const last_movie=prompt("What last movie have you watched?","");
// const grade=prompt("How would you evaluate this movie?","");
// const last_movie1=prompt("What last movie have you watched?","");
// const grade1=prompt("How would you evaluate this movie?","");
// personalMovieDB.movies[last_movie] =grade ;
// personalMovieDB.movies[last_movie1] =grade1 ;

// console.log(personalMovieDB);
// num=19;
// if (num<11){
//     console.log("Hello");
// }else if(num>19){
//     console.log("Byye");
// }else{
//     console.log("Everything is all right");
// }
// a=10;
// (a===15)?console.log("Hello"):console.log("Bye");

// b = 18;
// switch(b){
//     case 49:
//         console.log("Good attempt, not true!");
//         break;
//     case 59:
//         console.log("Good attempt, not true!");
//         break;
//     default:
//         console.log("Failed");
//         break;
        
        
// };

// const hamburger = 3;
// const fries=null;
// const cola=0;
// const nuggets=2;
// //console.log((hamburger===3 || cola || fries));

// if(hamburger===3&&cola===2 || fries===3 || nuggets){
//     console.log("I am full");
// }else{
//     console.log("False");
// };

// console.log(1&&0);
// console.log(1&&5);
// console.log(null&&5);
// console.log(0&&'fsdfsdf');

// let johnReport, alexReport, samReport, mariaReport="done";
// console.log(johnReport||alexReport||samReport||mariaReport);

// console.log(!0);

// console.log(1|| 2||3);

// let num =50;

// while(num<=55){
//     console.log(num);
//     num++;
// };
// let num =50;
// do{
//     console.log(num);
//     num++;
// }
// while(num<60);


// let a=11;
// for(let i=1;i<10;i++){
    
//     a++;
//     console.log(a);
// };


// let b=6;

// for(let i=1;i<=10;i++){
//     if(i===6){
//         continue;
//     }
//     b++;
//     console.log(b);

// };

// for(let i=1;i<=3;i++){
//     console.log(i);
//     for(let j=1;j<=3;j++){
//         console.log(j);

//     };
// }

// let result = "";
// const length =7;
// for(let i=1;i<length;i++){
//     for(let j=0;j<i;j++){
//         result+="*";
//     }

//     result+="\n";
// };

// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
    
// // Пишем решение вот тут
// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for(let i=0;i<data.length;i++){
//         result[i]=data[data.length-i];
//     }
    
//     // Не трогаем
//     console.log(result)


    // const lines = 5;
    // let result = '';
    
    // for (let i = 0; i <= lines; i++) {
    //     for (let j = 0; j < lines - i; j++) {
    //         result += " ";
    //     }
    //     for (let j = 0; j < 2 * i + 1; j++) {
    //         result += "*";
    //     }
    //     result += "\n";
    // }
    
    // console.log(result);

// function showFirstMessage(){
//     console.log("Hello World!");
// }

// showFirstMessage();
// let num=20;
// function showFirstMessage(text){
//     console.log(text);
//     let num=10;
//     console.log(num);
// };
// showFirstMessage("Hello");
// console.log(num);
// showFirstMessage("Privet!");
// console.log(calc(4,5));
//  function calc(a,b){
//      return(a+b);
//  }



// const logger = function(){
//     console.log("Hello");
// };

// logger();

// function convert(amount){
//     console.log(28*amount);
// }

// convert(500);

// function sayHello(name){
//     let str="Hello,"+name;
//     return str;
// }

// console.log(sayHello("Ivan"));

// function returnNeighboringNumbers(number){
//     let arr=[];
//     for(let i=0;i<3;i++){
//         arr[2-i]=number+1-i;
//     }
//     return arr;
// }
// console.log(returnNeighboringNumbers(5));

// function getMathResult(num1,num2){
//     if(typeof(num2)!="number"){
//         return num1;
//     }
//     let str=num1;
//     let k=num1;
    
//         for (let i=0;i<num2-1;i++){
//             k+=num1;
//         str=str+"---"+k;
//     }

//     return str;
// }
// console.log(getMathResult(10,"5"));
// console.log("fbjrbfjrfb".toUpperCase());

// const fruit = "Some fruit";
// console.log(fruit.slice(5,11));
// console.log(fruit.indexOf("fruit"));
// console.log(fruit.substring(5,11));

// const num=12.2;
// console.log(Math.round(num));

// const test="12.2px";
// console.log(parseInt(test));

// number=5;
//     let arr1=[0,1];
//     for(let i=2;i<number+2;i++){
//         arr1[i]=arr1[i-1]+arr1[i-2];
//     }


//     let arr2=[];
// for(let j=0;j<number;j++){
   
//     arr2[j]=arr1[j+2];
// }



// console.log(arr2);

// let k=arr2.toString();
// for(let i=1;i<=number-1;i+=2){
//     k[i]="";
// }
// console.log(k,typeof(k));
// g=[1,2,3]
// result="";
// for(let i=0;i<=2;i+=1){
//     result+=`${g[i]}`;
// }
// console.log(result);

// function first(){
//     setTimeout(function(){
//         console.log(1);
//     },500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// // function learnJS(lang,callback){
// //     console.log(`I learn:${lang}`);
// //     callback();
// // }
// // learnJS("JavaScript",function(){
// //     console.log('I passed the exam');
// // });

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{ 
        border: "black",
        bg: 'red'},
    makeTest: function(){
        console.log("Test");
    }
};

// options.makeTest();
const {border,bg}=options.colors;
console.log(border);
// // console.log(options.name);

// // // delete options.name;

console.log(options);
let counter =0;
for (let key in options){
    if (typeof(options[key])=='object'){
        for(let i in options[key]){
            console.log(`Property ${i} has value ${options[key][i]} `);
        }
    }else{console.log(`Property ${key} has value ${options[key]} `);
          counter++;}
}
console.log(counter);
    
// console.log(Object.keys(options).length);

// const arr = [2,3,4,5,6,10];
// console.log(arr.length);
// console.log(arr);
// arr.forEach(function(item,i,arr){
//     console.log(`${i}:${item} inside of array${arr}`);
// }
// );
// for(let i=0;i<arr.length;i+=1){
//     console.log(arr[i]);
// }

// const str = prompt("","");
// const products = str.split(",");
// console.log(products.join("; "));

function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key]=mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);
newNumbers.a=10;
newNumbers.c.x=10;

console.log(newNumbers);
console.log(numbers);

const add={
    d:17,
    e:20
};
// console.log(Object.assign(numbers,add));

const clone = Object.assign({},add);
clone.d=20;
console.log(clone);
console.log(add);

const oldArray = ["a",'b','c'];
const newArray = oldArray.slice();

newArray[0]=1;

console.log(oldArray);
console.log(newArray);

const cars = ["volvo",'bmw',"porsche","mercedes"],
      colors = ["red","blue","yellow","white"],
      set = [...cars,...colors];
console.log(set);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [1,2,3];

log(...num);

const chisla = ["a","b"];
const chisla1=[...chisla];
console.log(chisla1);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan){
        
        const {age}= plan;
        const {languages}=plan.skills;
        let str = `I am ${age} years old and I speak`;
        languages.forEach(function(lang){
            str+=`${lang.toUpperCase()}`;
        });
        return str;

    }
};

function showExperience(plan) {
    const {exp}=plan.skills;
    return exp;
}
function showProgrammingLangs(plan){
    let str= "";
    const{programmingLangs}=plan.skills;
    for(let i in programmingLangs){
        str+=`Язык ${i} изучен на ${programmingLangs[i]} \n`;
    }
    console.log(str);
    return str;
}

showProgrammingLangs(personalPlanPeter);
showExperience(personalPlanPeter);
console.log(showExperience(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); 


const family = ["Peter","Ann","Alex","Linda"];
console.log(family.length);
function showFamily(arr){
    let res = "The family consists of";
    arr.forEach(function(fam){
        res+=` ${fam}`;
    });
    console.log(typeof(res));
    return res;
}

showFamily(family);

const str1="mamapapap";
function reverse(str){
    let a=[...str];
    let str_new="";
    a.forEach(function(num,i,a){
        str_new+=a[(a.length-1)-i];
    });
    return str_new;
}
reverse(str1);

console.log(typeof(reverse(str1)));


console.log("papaMamaVanya".split("").reverse().join(""));

const soldier ={
    health:400,
    armor:100,
    sayHello: function (){
        console.log("Hello!");
    }
};

const john={
    health:100
};

Object.setPrototypeOf(john,soldier);

john.sayHello();