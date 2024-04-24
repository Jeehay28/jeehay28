function solution(arr, n) {
    if (arr.length % 2 !== 0) {
        return arr.map((el, index) => index % 2 === 0 ? el + n : el);
    } else {
        return arr.map((el, index) => index % 2 !== 0 ? el + n : el);
    }
}