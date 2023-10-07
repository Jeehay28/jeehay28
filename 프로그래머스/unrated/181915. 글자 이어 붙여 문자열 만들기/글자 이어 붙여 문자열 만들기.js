function solution(my_string, index_list) {
    let result = "";
    
    for (index of index_list) {
        result += my_string[index]
    }
    
    return result;
}