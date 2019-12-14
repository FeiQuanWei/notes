async function test() {
    await Promise((resolve,reject)=>{
        throw new Error ("have a mistake")
    })
}