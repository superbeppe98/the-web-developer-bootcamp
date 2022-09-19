const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let spans = document.querySelectorAll('span');
for(let i in colors){
    spans[i].style.color = colors[i];
    console.log(i)
}