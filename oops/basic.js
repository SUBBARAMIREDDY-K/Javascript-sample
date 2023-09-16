const circle = {
    radius:1,
    location:{
        x:1,
        y:2
    },
    draw:function()
    {
        console.log('Draw')
    }
}
console.log(circle.draw())

//ES6

//For creating the Objects we use Factory functions,Constructor
n=12345
arr=String(n).split('').map(a=>Number(a))
let mul=arr.reduce((a,b)=> {
    let t=b>0?b:1
    return a*b
},1)
console.log(arr)
console.log(mul)
let arr1=[1,-2,3,-1,9,-2]
let count=arr1.filter(a=>a>0).length
console.log(count)

//Exercise on StopWatch

function StopWatch()
{
    let startTime,endTime,running,duration=0;
    this.start=function(){
        if(running)
            throw new Error('Stopwatch is Already Running');
        running=true
        startTime=new Date();
    };

    this.stop=function(){
        if(!running)
            throw new Error('StopWatch is not started')
        running=false
        endTime=new Date();
        const seconds =(endTime.getTime()-startTime.getTime())/1000
        duration+=seconds
    };
    
    this.reset=function(){
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    };

    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    })
    
}

let st=new StopWatch()
console.log(st.start())