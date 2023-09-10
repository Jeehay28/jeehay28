function solution(strArr) {
    return strArr.map((el, index) => index % 2 === 0 ? el.toLowerCase() : el.toUpperCase());
}