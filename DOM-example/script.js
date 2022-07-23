

// const theFormButton = document.querySelector("#submit-btn");
// theFormButton.onclick = function(){
//     theFormButton.style.backgroundColor = "red";
//     document.querySelector("#title-element").style.backgroundColor = "blue";
//     document.querySelector("#title-element").style.color = "white";
//     // you dont need to actually grab it in a variable in a separate 
//     // step you can just do it in one line 
//     // but i think its easier to read in 2 steps
//     let theTitle = document.querySelector("#title-element");
//     theTitle.innerText = "Capitalized Title!";
// }



document.querySelector("#submit-btn").onclick = function () {

    let allTheInputs = document.querySelectorAll("ul li input");


    let anyLeftBlank = false;

    for(eachInput of allTheInputs) {
       if(eachInput.value === ""){
        anyLeftBlank = true;
        eachInput.style.border = "1px solid red";
        eachInput.parentElement.style.color = "red";
        eachInput.classList.add("error");
        eachInput.placeholder = "please fill in this field"
       }
    }
    if(anyLeftBlank){
        let errorMessage = document.createElement("p");
        // this line creates a hypothetical p tag like this <p></p>
        errorMessage.innerText = "Please fill in any fields marked in red";
        errorMessage.style.color = "red";
        document.querySelector(".user-info").prepend(errorMessage);    
    }

}






    let answerDiv = document.getElementById("answer");
    let firstInput = document.getElementById("first-num");
    let secondInput = document.getElementById("second-num");

    document.getElementById("add").onclick = function () {
        let res = Number(firstInput.value) + Number(secondInput.value);
        answerDiv.innerText = res;
    }



    document.getElementById("subtract").onclick = function () {
        let res = Number(firstInput.value) - Number(secondInput.value);
        answerDiv.innerText = res;  
    }

    document.getElementById("multiply").onclick = function () {
        let res = Number(firstInput.value) * Number(secondInput.value);
        answerDiv.innerText = res;     
    }

    document.getElementById("divide").onclick = function () {
        let res = Number(firstInput.value) / Number(secondInput.value);
        answerDiv.innerText = res;   
    }

    document.getElementById("clear").onclick = function () {
        answerDiv.innerText = "";
        firstInput.value = "";
        secondInput.value = "";
    }
  