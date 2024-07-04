let soundex = [];
let prevCode;
let code;
function getSoundexCode(char) {
   
    const soundexDict = {
        'B': '1', 'F': '1', 'P': '1', 'V': '1',
        'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
        'D': '3', 'T': '3',
        'L': '4',
        'M': '5', 'N': '5',
        'R': '6'
    };
    return soundexDict[char] || '0';
}


function checkLength(soundex) {
    while (soundex.length < 4) {
        soundex.push('0');
    }
    return soundex;
}

function returnName(name) {
return name ? name.toUpperCase(): '';
}

function generateSoundex(name) {
   returnName(name);
    if (name !== '') {
  let final = checkSoundex(name);
   return final;
}
}

function test1(name, soundex, prevCode) {
      for (let i = 1; i < name.length; i++) {
         code = getSoundexCode(name[i]);
       test2(code, prevCode, soundex);
      }
}

function test2() {
  if (code !== '0' && code !== prevCode) {
            soundex.push(code);
         }
         prevCode = code;
}


function checkSoundex(name) {
     soundex = [name[0]]; 
     prevCode = getSoundexCode(name[0]);

   test1(name, soundex, prevCode); 
     checkLength(soundex);
     return soundex.join('');
 }


module.exports = {
    getSoundexCode,
    generateSoundex
};

