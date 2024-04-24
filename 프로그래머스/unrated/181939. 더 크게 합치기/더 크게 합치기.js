function solution(a, b) {
    let ab = parseInt(`${a}` + `${b}`);
    let ba = parseInt(`${b}` + `${a}`);
    
    return ab > ba ? ab : ba;
}