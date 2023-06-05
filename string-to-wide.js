const stringToWide = (str) => {
    return str.split('').map((char) => {
        const code = char.charCodeAt(0);
        if(char === '`' || char === '’' || char === '‘' || char === '\''){
            return '＇';
        }
        if(char === '‟' || char === '"' || char === '“' || char === '”' || char === '"'){
            return '＂';
        }
        if(!char.match( /^[A-Za-z0-9]+$/)){
            return char;
        }
        const wideCode = code + 65248;
        return String.fromCharCode(wideCode);
    }).join('');
};

export default stringToWide;