const stringToWide = (str) => {
    return str.split('').map((char) => {
        const code = char.charCodeAt(0);
        // ff10
        // 48 to
        const wideCode = code + 65248;
        return String.fromCharCode(wideCode);
    }).join('');
};

export default stringToWide;