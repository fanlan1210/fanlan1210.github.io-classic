/*
Guess Number v1.0 By fanlan
*/
function init() {
    console.log("初始化");
    answer_number = Math.round(Math.random() * 1000);
    clean_guess();
    console.log("Debug:Answer is " + answer_number);
}
function clean_guess() {
    guess_number = '';
    console.log('使用者猜測數字已清空');
}
function input_number_num0() {
    var num = 0;
    guess_number += '0';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function input_number_num1() {
    var num = 1;
    guess_number += '1';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function input_number_num2() {
    var num = 2;
    guess_number += '2';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function input_number_num3() {
    var num = 3;
    guess_number += '3';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function input_number_num4() {
    var num = 4;
    guess_number += '4';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function input_number_num5() {
    var num = 5;
    guess_number += '5';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function input_number_num6() {
    var num = 6;
    guess_number += '6';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function input_number_num7() {
    var num = 7;
    guess_number += '7';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function input_number_num8() {
    var num = 8;
    guess_number += '8';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function input_number_num9() {
    var num = 9;
    guess_number += '9';
    console.log(num);
    document.getElementById("screen").value = guess_number;
}
function enter(){
    console.log(guess_number);
    if (guess_number == answer_number){
        document.getElementById("screen").value = "BINGO!";
        console.log("game over");
        init()
    }
    else if(guess_number > answer_number){
        document.getElementById("screen").value = "太大囉!";
        clean_guess();
    }
    else if(guess_number < answer_number){
        document.getElementById("screen").value = "太小囉!";
        clean_guess();
    }
     else {
        console.log("Debug:Error");
    }
}
init();