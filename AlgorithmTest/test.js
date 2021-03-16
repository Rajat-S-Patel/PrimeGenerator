const fn=require('../Prime_Server/bin/functions');

function getRandom(start,end)
{
    // generate random number in the range [start,end]
    return Math.round(Math.random()*(end-start) + start);
}

const r1=1000;
const r2=100000;
const iterations=10;
console.log("Given range:= [",r1,",",r2,"]", " No. of iterations:= ",iterations);
console.log();
for(let i=0;i<iterations;i++)
{
    const start=getRandom(r1,r2);
    const end=getRandom(start,r2);
    var a1=fn.findPrimesSieve(start,end);
    var a2=fn.naivePrimes(start,end);
    var a3=fn.segmentedSieve(start,end);
    
    if(a1.length!==a2.length || a1.length!==a3.length)
    {
        console.log("start:= ",start," end:= ",end);
        console.log("size mismatch ",a1.length,a2.length,a3.length); 
    }
    else
    {   
        let ok=1;
        for(let i in a1)
        {
            if(a1[i]!==a2[i] || a1[i]!==a3[i])
            {
                console.log("WA on ",i,a1[i],a2[i],a3[i]);
                ok=0;
                break;
            }
        }
        if(ok) console.log("test:= ",i," start:= ",start," end:= ",end," result=OK");
    }
}
console.log();