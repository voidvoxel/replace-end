function polyfill () {
    if (this.hasBeenRun) {
        return;
    }

    String.prototype.replaceEnd = function (
        original,
        replacement
    ) {
        return replaceEnd(
            this,
            original,
            replacement
        );
    }

    this.hasBeenRun = true;
}


export default function replaceEnd (
    text,
    original,
    replacement
) {
    if (typeof text !== 'string') {
        return '';
    }

    if (typeof original === 'undefined' || original === null) {
        return text;
    }

    if (typeof original !== 'string') {
        original = original.toString();
    }

    if (typeof replacement === 'undefined' || replacement === null) {
        replacement = '';
    }

    if (typeof replacement !== 'string') {
        replacement = replacement.toString();
    }

    return text
        .substring(
            0,
            text.length - original.length
        )
            + replacement;
}


replaceEnd.polyfill = polyfill;
