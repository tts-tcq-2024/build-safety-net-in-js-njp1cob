const { expect } = require('chai');
const {  generateSoundex, validate, soundexFilter, checkSoundex } = require('../src/soundex');

describe('Soundex Algorithm', () => {

    // let soundex;
    // beforeEach(() => {
    //    soundex = [];
    // });
         
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

     it('should handle generateSoundex', () => {
        expect(generateSoundex("ABC")).to.equal("A120");
    });

     it('should handle generateSoundex with special characters', () => {
        expect(generateSoundex("@14##")).to.equal("");
    });
      it('should handle generateSoundex', () => {
        expect(generateSoundex("ABC")).to.equal("A120");
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
       soundexFilter('ABC', [], '');
    });

     it('should call checkSoundex', () => {
       checkSoundex('ABC')
    });
});
