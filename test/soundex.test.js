const { expect } = require('chai');
const { generateSoundex } = require('../src/soundex');
const { soundexFilter } = require('../test/soundex');

describe('Soundex Algorithm', () => {
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

    it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
    });
    it('should validate sundex', () => {
        expect(soundexFilter("B", "B", 1 )).to.equal("B000");
    });
    
});
