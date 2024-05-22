let child = document.querySelector('.child');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');


let a=0;
inc.addEventListener('click', function(){

    if(a===5){
        alert('Enough!!!!!!!');
    }
    else{
        a++;
        child.innerHTML = a;
    }
    
});


dec.addEventListener('click', function(){
    if(a<=1){
        alert('Not any more! -_-');
    }
        else{
            a--;
            child.innerHTML = a;
        }
    }
);



let clrGenerator = document.querySelector('#clrGenerator');
let clrBtn = document.querySelector('.clrBtn');
let clr = document.querySelector('.clr');


clrBtn.addEventListener('click', function(){

    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    // console.log(red);

    clr.innerHTML = `(${red}, ${green}, ${blue})`;
    console.log('/n');
    clrGenerator.style.background = `rgb(${red}, ${green}, ${blue})`;


});