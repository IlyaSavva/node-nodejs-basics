import process from 'node:process';

const parseArgs = () => {
    const args = process.argv;

    const results = [];

    for (let i = 2; i < args.length; i += 2) {
        results.push(`${args[i].replace("--", "")} is ${args[i + 1]}`)
    }

    console.log(results.join(", "));
};

parseArgs();