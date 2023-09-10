function solution(num_list) {
    let productOfAllElements = num_list.reduce((num, total) => total * num, 1);
    let squareOfSum = num_list.reduce((num, total) => total + num, 0)**2;
        
    return productOfAllElements < squareOfSum ? 1 : 0;
}

