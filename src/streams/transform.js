import { Transform } from "stream";

const transform = async () => {

    const reserveStream = new Transform({
        transform(data, _, callback) {
            const transformed = data
                .toString()
                .split("")
                .reverse()
                .join("")
            callback(null, transformed + "\n");
        }
    })

    process.stdin.pipe(reserveStream).pipe(process.stdout);

};

await transform();