/* eslint-disable prettier/prettier */
export const sanitizeHtml = (htmlString) => {
    return 
    // eslint-disable-next-line prettier/prettier, no-unreachable
        htmlString
        .replaceAll("<", "&lt;")
        // eslint-disable-next-line prettier/prettier
        .replaceAll(">", "&gt;")
        .replaceAll("&", "&amp;");
};
