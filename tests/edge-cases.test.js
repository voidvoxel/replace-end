import replaceEnd from "../src/replaceEnd.mjs";


/* Edge cases */


test(
    `replaceEnd()`,
    () => {
        expect(
            replaceEnd()
        ).toBe(
            ''
        );
    }
);


test(
    `replaceEnd('')`,
    () => {
        expect(
            replaceEnd('')
        ).toBe(
            ''
        );
    }
);


test(
    `replaceEnd('', '')`,
    () => {
        expect(
            replaceEnd('', '')
        ).toBe(
            ''
        );
    }
);


test(
    `replaceEnd('', '', '')`,
    () => {
        expect(
            replaceEnd('', '', '')
        ).toBe(
            ''
        );
    }
);
