isHidden = HTMLElement.hidden;
HTMLElement.hidden = true | false;


document.getElementById('add-list').hidden = false;
let x = 0;
document.getElementById('add-list').addEventListener('click', function(){
    x++;
    if( x == 4){
        document.getElementById('add-list').hidden = true;
        return alert("სიაში შეგვიძლია მხოლო სამი ლისტის დამატება");
    }else{
        document.getElementById(x).hidden = false;
    }
})