import stringToWide from "./string-to-wide.js";

const regular = document.getElementById('regular-text');
const wide = document.getElementById('wide-text');

regular.onkeyup = (e) => {
   const wideText = stringToWide(e.target.value);
   wide.value = wideText;
};