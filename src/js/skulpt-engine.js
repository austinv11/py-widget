import Sk from "../dist/skulpt.min.js"

export class SkulptEngine {
    constructor() {
        Sk.configure({
            __future__: Sk.python3
        });
        this.consoleText = "";
    }

    // eslint-disable-next-line no-unused-vars
    evaluate(script) {
        Sk.importMainWithBody()
    }
}

export function build() {
    return new SkulptEngine();
}
