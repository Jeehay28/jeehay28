function solution(n,a,b){
    // first round
    let cnt = 1;
    let a_loc = Math.ceil(a / 2);
    let b_loc = Math.ceil(b / 2);
    while (a_loc !== b_loc) {
        cnt += 1;
        a_loc = Math.ceil(a_loc / 2);
        b_loc = Math.ceil(b_loc / 2);
    }
    return cnt;
}