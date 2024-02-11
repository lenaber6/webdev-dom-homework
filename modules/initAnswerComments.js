import { studentsComments } from "./main.js";
//import { text, name } from "./renderStudentsComments.js";

//Цитируем комментарий в форму
export const initAnswerComments = () => {
    //console.log(8);
    const textAreaElement = document.getElementById("add-text");
    const commentsElements = document.querySelectorAll(".comment");
    // console.log(commentsElements);
    for (const commentsElement of commentsElements) {
        commentsElement.addEventListener("click", () => {
            console.log(studentsComments);
            const index = commentsElement.dataset.index;
            console.log(index);
            const commentText = studentsComments[index].text;
            const commentAuthor = studentsComments[index].name;
            //console.log(commentText, commentAuthor);
            textAreaElement.value = `${commentText} > ${commentAuthor}`;
        });
    }
};
//initAnswerComments();
