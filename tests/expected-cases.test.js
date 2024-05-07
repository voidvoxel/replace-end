import replaceEnd from "../src/replaceEnd.mjs";


const hello = "hello";
const world = "world";
const friends = "friends";

const helloWorld = `${hello} ${world}`;
const helloFriends = `${hello} ${friends}`;


const valueIs = "value is";

const valueIsTrue = `${valueIs} ${true}`;
const valueIsFalse = `${valueIs} ${false}`;


/* Expected cases */


test(
    `replaceEnd('${helloWorld}')`,
    () => {
        expect(
            replaceEnd(helloWorld)
        ).toBe(
            'hello world'
        );
    }
);


test(
    `replaceEnd('${helloWorld}', '${hello}')`,
    () => {
        expect(
            replaceEnd(helloWorld, hello)
        ).toBe(
            `${hello} `
        );
    }
);


test(
    `replaceEnd('${helloWorld}', '${hello}', '${friends}')`,
    () => {
        expect(
            replaceEnd(helloWorld, hello, friends)
        ).toBe(
            helloFriends
        );
    }
);


test(
    `replaceEnd('${helloWorld}', '${hello}', false)`,
    () => {
        expect(
            replaceEnd(helloWorld, hello, false)
        ).toBe(
            `${hello} ${false}`
        );
    }
);


test(
    `replaceEnd('${valueIsTrue}', true, false)`,
    () => {
        expect(
            replaceEnd(valueIsTrue, true, false)
        ).toBe(
            valueIsFalse
        );
    }
);
