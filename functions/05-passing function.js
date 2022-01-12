function makeTable(start, finish, step, func){
    for (let x=start; x<=finish;x+=step)
        console.log(x, '=>',func(x))
}

makeTable(0, Math.PI/4, 0.1, Math.cos) //!!!without (x)

// makeTable(0, Math.PI/4, 0.1, function (arg){return Math.sin(arg)*Math.cos(arg)})

function getMetriks(func, x){
    const start= new Date().getTime()
    func(x)
    const end = new Date().getTime()
    console.log(`miliseconds: ${end - start}ms`)
}
const fact = require('./04-factor')
getMetriks(fact, 80000)
