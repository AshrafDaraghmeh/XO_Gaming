let turn = 'x';
let head = document.querySelector('.head');
let square = [];
function winner (){

    for(let i =1 ; i<10 ; i++){
     square[i]= document.getElementById('item' + i).innerHTML;
    }
    if (square[1] == square[2] && square[2] == square[3] && square[3] !=' '){
        head.innerHTML= square[1] + " is winner"
        document.getElementById('item'+1).style.background='#000';
        document.getElementById('item'+2).style.background='#000';
        document.getElementById('item'+3).style.background='#000';
    } 
    if (square[4] == square[5] && square[5] == square[6] && square[6] !=' '){
        head.innerHTML= square[5] + " is winner"
        document.getElementById('item'+4).style.background='#000';
        document.getElementById('item'+5).style.background='#000';
        document.getElementById('item'+6).style.background='#000';
    }
    if (square[7] == square[8] && square[8] == square[9] && square[9] !=' '){
        head.innerHTML= square[7] + " is winner"
        document.getElementById('item'+7).style.background='#000';
        document.getElementById('item'+8).style.background='#000';
        document.getElementById('item'+9).style.background='#000';
    }
    if (square[1] == square[5] && square[5] == square[9] && square[9] !=' '){
        head.innerHTML= square[1] + " is winner"
        document.getElementById('item'+1).style.background='#000';
        document.getElementById('item'+5).style.background='#000';
        document.getElementById('item'+9).style.background='#000';
    }if (square[3] == square[5] && square[5] == square[7] && square[7] !=' '){
        head.innerHTML= square[5] + " is winner"
        document.getElementById('item'+3).style.background='#000';
        document.getElementById('item'+5).style.background='#000';
        document.getElementById('item'+7).style.background='#000';
    }
    if (square[1] == square[4] && square[4] == square[7] && square[7] !=' '){
        head.innerHTML= square[1] + " is winner"
        document.getElementById('item'+1).style.background='#000';
        document.getElementById('item'+4).style.background='#000';
        document.getElementById('item'+7).style.background='#000';
    }
    if (square[2] == square[5] && square[5] == square[8] && square[8] !=' '){
        head.innerHTML= square[2] + " is winner"
        document.getElementById('item'+2).style.background='#000';
        document.getElementById('item'+5).style.background='#000';
        document.getElementById('item'+8).style.background='#000';
    }
    if (square[3] == square[6] && square[6] == square[9] && square[9] !=' '){
        head.innerHTML= square[3] + " is winner"
        document.getElementById('item'+3).style.background='#000';
        document.getElementById('item'+6).style.background='#000';
        document.getElementById('item'+9).style.background='#000';
    }


}
function game(id){
    let element = document.getElementById(id);
    if (turn == 'x' && element.innerHTML ==' '){
        element.innerHTML = 'X';
        turn = 'o';
        head.innerHTML = 'O turn '
    }
    else if (turn == 'o' && element.innerHTML==' '){
        element.innerHTML='O';
        turn = 'x';
        head.innerHTML = 'X turn';
    }
    winner();

    }
