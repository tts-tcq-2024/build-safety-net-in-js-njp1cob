const { expect } = require('chai');
const {  generateSoundex, validate, soundexFilter } = require('../src/soundex');

describe('Soundex Algorithm', () => {

    // let soundex;
    // beforeEach(() => {
    //    soundex = [];
    // });
         
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

    it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
    });


    it('should call Validate', () => {
        let a = [];
        let prevCode = ''; 
        let code = 'A123'; 
        validate(code, prevCode, a);
    });

     it('should call soundexFilter', () => {
        expect(soundexFilter("B", "B", 0)).to.equal("B000");
    });
});
