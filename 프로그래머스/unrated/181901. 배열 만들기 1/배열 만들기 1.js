function solution(n, k) {
    let arr = [];
    for (let i=1; i<= Math.floor(n/k); i++) {
        arr.push(k*i);
    }
    
    return arr;
}