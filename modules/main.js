//"use strict"; Модули по умолчанию работают в строгом режиме,
// писать use strict в начале не нужно.
import { getTodos, setToken } from "./api.js";
import { renderStudentsComments } from "./renderStudentsComments.js";

export let studentsComments = [];

export const fetchAndRenderComments = () => {
    getTodos({ token: setToken })
        .then((responseData) => {
            console.log(responseData);
            const addComments = responseData.comments.map((comment) => {
                return {
                    id: comment.id,
                    // Достаём имя автора
                    name: comment.author.name,
                    // Преобразуем дату-строку в Date
                    date: comment.date,
                    text: comment.text,
                    likes: comment.likes,
                    // в апи пока вообще нет признака лайкнутости
                    // поэтому пока добавляем заглушку
                    isLiked: false,
                };
            });

            // добавим таймер при получении данных с сервера
            // setTimeout(() => {
            // обратимся по дереву к span в начале html-кода через его класс и к его css,
            // где выключим отображение фразы, записанной в span
            // Через style мы обращаемся к css
            //document.querySelector(".wait").style.display = 'none';
            studentsComments = addComments;
            //console.log(addComments);
            renderStudentsComments({
                studentsComments,
                fetchAndRenderComments,
            });
            // renderRegistration();
            // renderLogin();
            // }, 1000);
        })
        .catch((error) => {
            console.warn(error);
            //alert("К сожалению у вас пропал интернет, вам нужно повторить попытку добавить комментарий позже");
        });
};
//1 шаг
fetchAndRenderComments();

// 2.17 Подключите библиотеку date-fns к вашему приложению. С ее помощью отформатируйте дату в формате
// yyyy-MM-dd hh.mm.ss
//  (это шведский формат отображения даты).

// Создайте в проекте файл .gitignore и добавьте туда папку node_modules.
