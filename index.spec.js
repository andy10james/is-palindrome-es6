import { isPalindrome } from "./index.js";

describe("When using isPalindrome", () => {

    it('".A car, a m,an, a maraca" is a palindrome', () => {
        expect(isPalindrome(".A car, a m,an, a maraca")).toBe(true);
    });

    it('an empty string is a palindrome', () => {
        expect(isPalindrome("")).toBe(true);
    });

    it('a single character is a palindrome', () => {
        expect(isPalindrome("a")).toBe(true);
    });

    it('two identical characters are a palindrome', () => {
        expect(isPalindrome("gg")).toBe(true);
    });

    it('two differing characters are not a palindrome', () => {
        expect(isPalindrome("av")).toBe(false);
    });

    it('"racecar" is a palindrome', () => {
        expect(isPalindrome("racecar")).toBe(true);
    });

    it('"Amore Roma" is a palindrome', () => {
        expect(isPalindrome("Amore Roma")).toBe(true);
    });

    it('"A man, a plan, a canal: Panama" is a palindrome', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    it(`"No 'x' in 'Nixon'" is a palindrome`, () => {
        expect(isPalindrome("No 'x' in 'Nixon'")).toBe(true);
    });

    it('42 is not a palindrome', () => {
        expect(isPalindrome(42)).toBe(false);
    });

    it('1 is a palindrome', () => {
        expect(isPalindrome(1)).toBe(true);
    });

    it('11 is a palindrome', () => {
        expect(isPalindrome(11)).toBe(true);
    });

    it('121 is a palindrome', () => {
        expect(isPalindrome(121)).toBe(true);
    });

    it('0 is a palindrome', () => {
        expect(isPalindrome(0)).toBe(true);
    });

    it('1e10 + 1 is a palindrome', () => {
        expect(isPalindrome(1e10 + 1)).toBe(true);
    });

    it('true is not a palindrome', () => {
        expect(isPalindrome(true)).toBe(false);
    });

    it('false is not a palindrome', () => {
        expect(isPalindrome(false)).toBe(false);
    });

    it('null is not a palindrome', () => {
        expect(isPalindrome(null)).toBe(false);
    });

    it('undefined is not a palindrome', () => {
        expect(isPalindrome(undefined)).toBe(false);
    });

    it('NaN is not a palindrome', () => {
        expect(isPalindrome(NaN)).toBe(true);
    })

    it('-1 is not a palindrome', () => {
        expect(isPalindrome(-1)).toBe(false);
    });

    it('"!@#$" is not a palindrome', () => {
        expect(isPalindrome("!@#$")).toBe(false);
    });

    it('"!@#$#@!" is a palindrome', () => {
        expect(isPalindrome("!@#$#@!")).toBe(true);
    });

});