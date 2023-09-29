function solution(n, control) {
    
    let num = n;
    
    control.split("").map(el => {
        if (el === "w") num += 1;
        if (el === "s") num -= 1;
        if (el === "d") num += 10;
        if (el === "a") num -= 10;
    })
    return num;
}