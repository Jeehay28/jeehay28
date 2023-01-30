function solution(citations) {
    let h = Math.max(...citations);
    while (citations.filter(x => x >= h).length < h || citations.filter(x => x < h).length > h) {
        h -= 1;
    }
    return h;
}