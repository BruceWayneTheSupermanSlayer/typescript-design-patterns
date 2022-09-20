import { performance } from "perf_hooks";

const PATH = process.env.INIT_CWD;

process.on("unhandledRejection", exception => {
    console.log("❌ unhandled rejection", exception);
    process.exit(1);
});

async function main() {

    const importedFiles =  import(`${PATH}/index.ts`)
        .catch(e => console.error(`no index file in ${PATH}`, e))
        .then(files=>console.log("files",files)
        )




}

main();