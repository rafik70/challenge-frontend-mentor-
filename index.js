const unorderedList = document.querySelectorAll("li");
const  selectN = document.getElementById('selectN');
let Numberselect = 0 ; 
unorderedList.forEach(item => {
    item.addEventListener("click", () => {
        const activeItem = document.querySelector(".active");
        activeItem?.classList.remove("active");
        item.classList.add("active");
        selectN.innerHTML  = item.value;
    })
});
const button =  document.getElementById("submit");
button.addEventListener('click',(Event) => {
    const afterFeedback = document.getElementById('after-feedback');
    const  feedbackState = document.getElementById('thankyoustate');
    afterFeedback.style.display="none";
    feedbackState.style.display= "block";

});