for(let i = 1; i <= 3; i++){
    document.getElementById('text-done' + i ).style.visibility = "hidden";
}

isHidden = HTMLElement.hidden;
HTMLElement.hidden = true | false;


let x = 0;
document.getElementById('add-list').addEventListener('click', function(){
    x++;
    document.getElementById(x).hidden = false;
})

let y = 0;
document.getElementById('add-doing').addEventListener('click', function(){
    y++;
    document.getElementById('doing' + y).hidden = false;
    document.getElementById('text-done' + y ).style.visibility = "visible";

})



document.getElementById('proc1').addEventListener('click', function(){
    document.getElementById('proc1').style.backgroundColor  = '#dc3545';
    for(let i = 2; i <= 3; i++){
        document.getElementById('proc' + i).style.backgroundColor  = '#ffffff';
    }
})

document.getElementById('proc2').addEventListener('click', function(){
    document.getElementById('proc2').style.backgroundColor  = '#ffc107';
    document.getElementById('proc1').style.backgroundColor  = '#ffffff';
    document.getElementById('proc3').style.backgroundColor  = '#ffffff';
})

document.getElementById('proc3').addEventListener('click', function(){
    document.getElementById('proc3').style.backgroundColor  = '#28a745';
    for(let i = 1; i < 3; i++){
        document.getElementById('proc' + i).style.backgroundColor  = '#ffffff';
    }  
})

document.getElementById('proc4').addEventListener('click', function(){
    document.getElementById('proc4').style.backgroundColor  = '#dc3545';
    for(let i = 5; i < 7; i++){
        document.getElementById('proc' + i).style.backgroundColor  = '#ffffff';
    }  
})

document.getElementById('proc5').addEventListener('click', function(){
    document.getElementById('proc5').style.backgroundColor  = '#ffc107';
    document.getElementById('proc4').style.backgroundColor  = '#ffffff';
    document.getElementById('proc6').style.backgroundColor  = '#ffffff';
})

document.getElementById('proc6').addEventListener('click', function(){
    document.getElementById('proc6').style.backgroundColor  = '#28a745';
    for(let i = 4; i < 6; i++){
        document.getElementById('proc' + i).style.backgroundColor  = '#ffffff';
    }  
})


document.getElementById('proc7').addEventListener('click', function(){
    document.getElementById('proc7').style.backgroundColor  = '#dc3545';
    for(let i = 8; i < 10; i++){
        document.getElementById('proc' + i).style.backgroundColor  = '#ffffff';
    }
})

document.getElementById('proc8').addEventListener('click', function(){
    document.getElementById('proc8').style.backgroundColor  = '#ffc107';
    document.getElementById('proc7').style.backgroundColor  = '#ffffff';
    document.getElementById('proc9').style.backgroundColor  = '#ffffff';
})

document.getElementById('proc9').addEventListener('click', function(){
    document.getElementById('proc9').style.backgroundColor  = '#28a745';
    document.getElementById('proc7').style.backgroundColor  = '#ffffff';
    document.getElementById('proc8').style.backgroundColor  = '#ffffff';
})