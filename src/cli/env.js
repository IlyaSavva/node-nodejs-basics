import process from 'node:process';

const parseEnv = () => {
    const variables = Object.keys(process.env).filter((item) => item.includes("RSS_"))

    const envsValues = variables.reduce((acc, curr) => {
        acc = acc + `${curr}=${process.env[curr]} `;
        return acc;
    }, "")

    console.log(envsValues);
};

parseEnv();