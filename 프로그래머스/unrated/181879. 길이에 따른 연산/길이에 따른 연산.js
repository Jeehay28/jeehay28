function solution(num_list) {
    return num_list.length >= 11 
        ? num_list.reduce((num, sum) => sum + num, 0) 
        : num_list.reduce((num, product) => product * num, 1); 
}