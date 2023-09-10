function solution(num_list, n) {
    return num_list.filter((el, index) => index % n === 0);
}