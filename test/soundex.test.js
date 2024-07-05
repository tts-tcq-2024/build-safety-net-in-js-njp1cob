const { expect } = require('chai');
const {  soundexFilter } = require('../src/soundex');

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


it('should handle single characters', () => {
        expect(validate.toHaveBeenCalled());
    });
    
});
