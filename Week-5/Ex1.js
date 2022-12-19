function* gen() {
    let arrFuncs = [];
    for(let i = 0; i < 3; i++) {
        async function doTask() {
            await new Promise((resolve) => {
                let timer = (i+1) * 1000;
                setTimeout(() => {
                    let taskName =  `doTask ${i+1} `;
                    console.log(taskName);
                    resolve(taskName); 
                }, timer);
            }).then((taskName) => console.log(`${taskName} done`)) 
            .catch((err) => console.log(`error - ${err}`));            
        }
        yield doTask();
    }
}


const g = gen();
g.next();
g.next();
g.next();
g.next(); // no yeild for this one.