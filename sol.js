let questionFormEl = document.getElementById("questionForm");
let userHyderabadEl = document.getElementById("userHyderabad");
let userDelhiEl = document.getElementById("userDelhi");
let userBangaloreEl = document.getElementById("userBangalore");
let userAndhraPradeshEl = document.getElementById("userAndhraPradesh");
let resultMsgEl = document.getElementById("resultMsg");

let capitalCity = "Delhi";
let selectedCity = null;

userHyderabadEl.addEventListener("change",function(event){
    selectedCity = event.target.value;
});
userDelhiEl.addEventListener("change",function(event){
    selectedCity = event.target.value;
});
userBangaloreEl.addEventListener("change",function(event){
    selectedCity = event.target.value;
});
userAndhraPradeshEl.addEventListener("change",function(event){
    selectedCity = event.target.value;
});

questionFormEl.addEventListener("submit",function(event){
    event.preventDefault();

    if(selectedCity === null){
        resultMsgEl.textContent = "Please choose an answer";
        resultMsgEl.style.color="red";
    }else if(selectedCity === capitalCity){
        resultMsgEl.textContent = "Correct Answer";
        resultMsgEl.style.color = "green"
    }else{
        resultMsgEl.textContent = "Wrong Answer";
        resultMsgEl.style.color = "red"
    };

})