let string = "";

let buttons= document.querySelectorAll('.btn');
for(x of buttons){
    x.addEventListener('click', e=>{
        let a= e.target.innerText;
        switch(a){
            case "C":
                document.getElementById('input-screen').innerHTML = string;
                break;
            case "AC":
                document.getElementById('input-screen').innerHTML = string;
                document.getElementById('answer').innerHTML = string;
                break;
            case "=":
                var y = document.getElementById('input-screen').innerHTML;
                try{
                    document.getElementById('answer').innerHTML = eval(y);
                } catch(x){
                    document.getElementById('answer').innerHTML = x.name;
                }
            break;
            case "*":
                if(document.getElementById('answer').innerHTML !==""){
                    
                    let newv = document.getElementById('answer').innerHTML ;
                    document.getElementById('answer').innerHTML = "";
                    
                    newv += e.target.innerText;
                    document.getElementById('input-screen').innerHTML = newv;
                }
                else{
                    document.getElementById('input-screen').innerHTML += e.target.innerText;
                }
            break;
            case "+":
                if(document.getElementById('answer').innerHTML !==""){
                    
                    let newv = document.getElementById('answer').innerHTML ;
                    document.getElementById('answer').innerHTML = "";
                    
                    newv += e.target.innerText;
                    document.getElementById('input-screen').innerHTML = newv;
                }
                else{
                    document.getElementById('input-screen').innerHTML += e.target.innerText;
                }
            break;
            case "-":
                if(document.getElementById('answer').innerHTML !==""){
                    
                    let newv = document.getElementById('answer').innerHTML ;
                    document.getElementById('answer').innerHTML = "";
                    
                    newv += e.target.innerText;
                    document.getElementById('input-screen').innerHTML = newv;
                }
                else{
                    document.getElementById('input-screen').innerHTML += e.target.innerText;
                }
            break;
            case "/":
                if(document.getElementById('answer').innerHTML !==""){
                    
                    let newv = document.getElementById('answer').innerHTML ;
                    document.getElementById('answer').innerHTML = "";
                    
                    newv += e.target.innerText;
                    document.getElementById('input-screen').innerHTML = newv;
                }
                else{
                    document.getElementById('input-screen').innerHTML += e.target.innerText;
                }
            break;
            default:
                if(document.getElementById('answer').innerHTML == ""){
                        document.getElementById('input-screen').innerHTML += e.target.innerText;
                        break;
                }
                else if(document.getElementById('answer').innerHTML !== ""){
                    document.getElementById('input-screen').innerHTML = "";
                    document.getElementById('answer').innerHTML = "";
                    document.getElementById('input-screen').innerHTML += e.target.innerText;
                }
                
            
        }

    }) 
}

function modes() {
    var element = document.getElementById("mode");
    element.classList.toggle("dark");
  }


// let clear= document.querySelectorAll('#clear');
// for(x of clear){
//     x.addEventListener('click', e=>{
//         var a = string;
//         console.log(a);
//         document.getElementById('input-screen').innerHTML = a;
//     }) 
// }

// let equals = document.querySelector('#equal');
// for(x of equals){
//     x.addEventListener('click', e=>{
//         if(e.target.innerHTML == '='){
            
//             document.getElementById('answer').innerHTML = eval(document.getElementById('input-screen').innerHTML);
//           }
//     }) 
// }