import replaceEnd from "../src/replaceEnd.mjs";


/* Corner cases */


test(
    `replaceEnd(null)`,
    () => {
        expect(
            replaceEnd(null)
        ).toBe(
            ''
        );
    }
);


test(
    `replaceEnd(null, null)`,
    () => {
        expect(
            replaceEnd(null, null)
        ).toBe(
            ''
        );
    }
);


test(
    `replaceEnd(null, null, null)`,
    () => {
        expect(
            replaceEnd(null, null, null)
        ).toBe(
            ''
        );
    }
);
