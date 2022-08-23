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


let numberOfFilms;
function start(){
    numberOfFilms = +prompt("How many movies have you watched already?","");
    while(numberOfFilms=="" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many movies have you watched already?","");
    }
}
start();
personalMovieDB = {
    count : numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:true
};
function rememberMyFilms(){
    for(let i=1;i<=numberOfFilms;i++){
        const last_movie=prompt("What last movie have you watched?","").trim();
              grade=prompt("How would you evaluate this movie?","");
        if(last_movie!=null && grade!=null && last_movie!='' && grade !="" && last_movie.length<50){
            personalMovieDB.movies[last_movie] =grade ;
            console.log("done!");
        }else{
            console.log("error!");
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonallevel(){
    if(personalMovieDB.count<10){
        console.log("Not too many movies watched");
    }else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
        console.log("You are classic viewer");
    }else{
        console.log("You are cinephile");
    }
}
detectPersonallevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }

}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i=1;i<=3;i++){
        personalMovieDB.genres[i-1]=prompt("What is your favourite genres `${i}`?","");

    }
}
writeYourGenres();
// console.log(personalMovieDB);