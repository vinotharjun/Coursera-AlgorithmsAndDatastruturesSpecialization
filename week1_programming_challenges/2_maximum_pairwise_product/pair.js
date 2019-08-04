
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("",(n)=>{
    rl.question("",(arr)=>{
      var array=arr.split(" ")
    //   var sorted =array.sort((a,b)=>{
    //       return a-b
    //   })
      
      for(var i=0; i<array.length;i++) array[i] = parseInt(array[i], 10);
      
        var sorted =array.sort((a,b)=>{
          return b-a
      })
    //   console.log(sorted)
      console.log(sorted[0]*sorted[1])


      process.exit()
    })
})