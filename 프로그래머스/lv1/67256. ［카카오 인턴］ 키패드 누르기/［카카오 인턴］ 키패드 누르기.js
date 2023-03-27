function solution(numbers, hand) {
  let answer = '';
  let left = [3, 0];
  let right = [3, 2];
  let numPos = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    0: [3, 1]
  };

  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      answer += 'L';
      left = numPos[num];
    } else if (num === 3 || num === 6 || num === 9) {
      answer += 'R';
      right = numPos[num];
    } else {
      let distL = getDistance(left, numPos[num]);
      let distR = getDistance(right, numPos[num]);
      if (distL < distR) {
        answer += 'L';
        left = numPos[num];
      } else if (distL > distR) {
        answer += 'R';
        right = numPos[num];
      } else {
        if (hand === 'left') {
          answer += 'L';
          left = numPos[num];
        } else {
          answer += 'R';
          right = numPos[num];
        }
      }
    }
  }

  return answer;
}

function getDistance(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}
