/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { sayBunny } from './example';


// HINT:
// The globals `Bun` and `document` serve as guards here, since they are
// only defined within the bun and browser environment, respectively.
// Normally, these guards are not necessary, because you won't target both
// environments at the same time / whithin the same project. It's done here
// solely for demonstration purposes.


// bun example code
if (typeof Bun !== 'undefined') {
    const server = Bun.serve({
        port: 8472,
        fetch(req) {
            return new Response(sayBunny());
        }
    });
    console.log(`Listening on http://localhost:${server.port} ...`);
}

// browser example code
if (typeof document !== 'undefined') {
    const element = document.getElementById('message');
    if (element) {
        element.innerText = sayBunny();
    }
}
