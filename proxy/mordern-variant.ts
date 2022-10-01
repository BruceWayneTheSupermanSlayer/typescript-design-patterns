/***
 * NEED SOME IMPROVEMENT AND FIXING
 */


const textStore = {
    save(data: string): void {
        console.log(`Called 'save' from TextStore with
      data=${data}`);
    }
}

const proxyStore = new Proxy(textStore, {
    apply(target: { save(data: string): void }, thisArg: any, argArray: any[]): any {
        console.log(`called 'save from proxy' ,${argArray[0]}`);
        target.save(argArray[0]);
    }
});

proxyStore.save('data_1')