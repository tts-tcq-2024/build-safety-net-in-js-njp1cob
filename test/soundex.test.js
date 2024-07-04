const { expect } = require('chai');
const { generateSoundex } = require('../src/soundex');
const { soundexFilter } = require('../src/soundex');
const { validate } = require('../src/soundex');

describe('Soundex Algorithm', () => {

    let soundex;
    beforeEach(() => {
        soundex = [];
    });
        
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

    it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
    });
    
     it('should handle empty input correctly', () => {
        const name = '';
        soundexFilter(name, soundex, '');

        
        expect(soundex).toEqual([]);
    });


    it('should validate function', () => {
        expect(validate()).toHaveBeenCalled();
    });
    
});
