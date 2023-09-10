function solution(num_list) {
    let evenNum = num_list.filter(el => el % 2 === 0).join("");
    let oddNum = num_list.filter(el => el % 2 !== 0).join("");
    return parseInt(evenNum) + parseInt(oddNum);
}
