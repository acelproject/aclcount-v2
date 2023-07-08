var hasil = document.inputNumber.isiNumber;

function Ins(num){
    hasil.value = hasil.value + num;
}

function c(){
    hasil.value = '';
}

function Bkscp(){
    hasil.value = hasil.value.substr(0,hasil.value.length-1);
}

function samaDengan (){
    hasil.value = eval(hasil.value);
}