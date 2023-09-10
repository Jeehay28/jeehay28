function solution(num_list) {
    return num_list.sort((num1, num2) => num1 - num2).slice(5, num_list.length);
}