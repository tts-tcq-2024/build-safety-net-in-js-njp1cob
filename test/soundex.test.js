const { expect } = require('chai');
const { generateSoundex, soundexFilter } = require('../src/soundex');

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


    it('should validate function', () => {
         // Mock necessary parameters for the function
        const name = 'ABC';
        const soundex = [];
        const prevCode = '';

        // Spy on soundexFilter function
        const soundexFilterSpy = jest.spyOn(global, 'soundexFilter').mockImplementation(() => {
            // Mock implementation if needed
        });

        // Call the function to test
        soundexFilter(name, soundex, prevCode);

        // Assert that soundexFilter has been called
        expect(soundexFilterSpy).toHaveBeenCalled();

        // Restore the spy
        soundexFilterSpy.mockRestore();
    });
    
});
