import "./numToWords";
import numToWords from "./numToWords";

test('Number to words', () => {
    expect(numToWords(1000)).toBe("One thousand");
    expect(numToWords(101)).toBe("One hundred and one");
    expect(numToWords(365)).toBe("Three hundred and sixty-five");
    expect(numToWords(12365781)).toBe("Twelve million three hundred and sixty-five thousand seven hundred and eighty-one");
    expect(numToWords(100000000)).toBe("One hundred million");
    expect(numToWords(1000000000)).toBe("One billion");
    expect(numToWords(1000000001)).toBe("One billion and one");
    expect(numToWords(1000000101)).toBe("One billion one hundred and one");
    expect(numToWords(1000001201)).toBe("One billion one thousand two hundred and one");
    expect(numToWords(1000001231)).toBe("One billion one thousand two hundred and thirty-one");
    expect(numToWords(1010001231)).toBe("One billion ten million one thousand two hundred and thirty-one");
    expect(numToWords(1000000000001)).toBe("Oh no! We can't support a number that big!");
});