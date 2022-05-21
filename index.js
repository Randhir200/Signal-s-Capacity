// Brute Force
function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let t=0;t<tc;t++){
        let n = +input[line];
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++
        let stack = [];
        let sg = [];
        let top = -1
        let k = 1
        for(let i=arr.length-1;i>=0;i--){
            top++;
            stack.push(arr[i])
            k++
            let pstr = 1;
            for(let j=arr.length-k;j>=0;j--){
               if(stack[top]>arr[j]){
                   pstr++
               }else{
                   break
               } 
            }
            sg.push(pstr)
        }
        console.log(sg.reverse().join(" "))
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  