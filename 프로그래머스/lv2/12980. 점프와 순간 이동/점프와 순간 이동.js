function solution(n) {
    let cnt = 1;
    while (n > 1) {
        if (n % 2 === 1 ) {
            cnt += 1;
            n -= 1;}
        while (n % 2 === 0) {
        n = n / 2;}
    }
    return cnt;
}