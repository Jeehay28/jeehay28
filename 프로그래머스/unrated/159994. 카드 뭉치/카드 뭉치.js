function solution(cards1, cards2, goal) {
    for (any of goal) {
        if (cards1[0] === any) {
            cards1.shift();
        } else if (cards2[0] === any) {
            cards2.shift();
        } else {
            return "No";
            break;
        }
    }
    console.log(cards1, cards2)
    return "Yes";
}