

function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  let arr = [0,1]
  if(n > arr.length){
    for (let i=1; i <= n; i++){
      arr.push(arr[i] + arr[i-1])
    }
    return arr[n-1]
  } else{
    return arr[n-1]
  }
}