function solution(num_str) {
    return num_str.split("").map(el => +el).reduce((num, sum) => sum + num, 0);
}