/* eslint-disable prettier/prettier */
export const sanitizeHtml = (htmlString) => {
    return htmlString // нельзя разделять return и htmlString, иначе эта ф-ция не вернёт ничего и дальнейший код не выполнится
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("&", "&amp;");
};
