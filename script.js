// getting input in str
var str = ""; 
// ans is used for displaying output on calculator screen
var ans = document.querySelector(".output");
//getting inputs from eadh button 
var buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
    button.addEventListener("click",function(){
        if(button.innerHTML == "C"){ // clear the screen if we get c as input
            ans.innerHTML = "";
            str = "";
        }
        else if(button.innerHTML == "="){ // compute our expression 
            compute(str);
            str = "";
        }

        else{ // continue taking the expression 
        str = str + button.innerHTML;
        ans.innerHTML = str;
        }
    })
}); 
//computing the input expression 
function compute(str){
    for(let i =0;i<str.length;i++){
    if(str[i]=="+" || str[i]=="-" || str[i]=="X" || str[i]=="/"){
        var operand1 = parseFloat(str.slice(0,i));
        var operand2 = parseFloat(str.slice(i+1,));
        switch(str[i]){
            case "+":
                ans.innerHTML = operand1 + operand2;
                break;
            case "-":    
                ans.innerHTML = operand1 - operand2;
                break;
            case "X":    
                ans.innerHTMLs = operand1 * operand2;
                break;
            case "/":    
                ans.innerHTML = operand1 / operand2;
                break;
            default:
                break;
        }
    break;
    }
    if(str[i]=="√"){
        var operand = parseFloat(str.slice(i+1,));
        ans.innerHTML = Math.sqrt(operand);
        break;
    }

   }
}
