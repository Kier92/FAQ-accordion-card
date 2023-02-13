const questions = document.querySelectorAll(".question");
const title = document.querySelectorAll(".question-title");
const button = document.querySelectorAll(".btn");
const text = document.querySelectorAll(".question-title-text");
let count = 0;

questions.forEach(((question, index) => {    
    button[index].addEventListener("click", () => {
        text[index].classList.toggle("show-text");
        button[index].classList.toggle("rotate-arrow");
        title[index].classList.toggle("dark-title");
        questions.forEach((item, itemIndex) => {
            if(itemIndex != index){
                text[itemIndex].classList.remove("show-text");
                button[itemIndex].classList.remove("rotate-arrow");
                title[index].classList.remove("dark-title")
            }
        })
    })
        title[index].addEventListener("click", () => {
        text[index].classList.toggle("show-text");
        button[index].classList.toggle("rotate-arrow");
        title[index].classList.toggle("dark-title")
        questions.forEach((item, itemIndex) => {
            if(itemIndex != index){
                text[itemIndex].classList.remove("show-text");
                button[itemIndex].classList.remove("rotate-arrow");
                title[itemIndex].classList.remove("dark-title")
            }
        })
    })
}))
