const stringToWide = (str) => {
    return str.split('').map((char) => {
        const code = char.charCodeAt(0);
        const wideCode = code + 65248;
        return String.fromCharCode(wideCode);
    }).join('');
};

export default stringToWide;