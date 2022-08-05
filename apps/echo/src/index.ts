import type {IncomingMessage, ServerResponse} from "http";
import * as http from "http";

import {
  getUUID5,    // GTD: works
  maths,       // GTD: works
} from "@rusnyder/foo";
import getUUID from "@rusnyder/foo";  // GDT: broken

const server = http.createServer();

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    let body: Array<Uint8Array> = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        console.log(`==== ${request.method} ${request.url}`);

        const bodyStr = Buffer.concat(body).toString();
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 200;
        response.end(JSON.stringify({
            "request": bodyStr,
            "uuid4": getUUID(),                 // GTD: links to import (works-ish, not useful)
            "uuid5": getUUID5(bodyStr),         // GTD: links to import (works-ish, not useful)
            "sum": maths.sum(1, 2),             // GTD: broken
            "multiply": maths.multiply(1, 2),   // GTD: works
        }));
    });
}).listen(process.env.PORT || 8083);