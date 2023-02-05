function solution(fees, records) {
    // 차량번호
    let cars = records.map(x => x.split(" ")[1]).sort();
    cars = [...new Set(cars)];
    // console.log(cars)
    let obj = {};
    for (car of cars) {
        let temp = [];
        obj[car] = temp;
        for (any of records) {
            if (any.includes(car)) {
                temp.push(any.split(" ")[0])
            }
        }
    }

    let result = [];
    for (any of cars) {
        let useTime = getMins(obj[any]);
        console.log(useTime)
        if (useTime > fees[0]) {
            let calc = Math.ceil((useTime - fees[0]) / fees[2]) * fees[3] + fees[1];
            result.push(calc) 
        } else {
            result.push(fees[1]);
        }
        
    }
    return result;
}

function getMins(arr) {
    if (arr.length % 2 === 1) {
        arr.push("23:59")
    }

    let sum = 0;
    for (let i=0; i<arr.length / 2; i++) {
        let mins = 0;
        let hours = 0;
        if (arr[i * 2 + 1].split(":")[1] < arr[i * 2].split(":")[1]) {
            mins = 60 + parseInt(arr[i * 2 + 1].split(":")[1]) - parseInt(arr[i * 2].split(":")[1]);
            hours = parseInt(arr[i * 2 + 1].split(":")[0]) - parseInt(arr[i * 2].split(":")[0]) - 1;
            console.log(mins, hours)
        } else {
            mins = parseInt(arr[i * 2 + 1].split(":")[1]) - parseInt(arr[i * 2].split(":")[1]);
            hours = parseInt(arr[i * 2 + 1].split(":")[0]) - parseInt(arr[i * 2].split(":")[0]);
            console.log(mins, hours)
        }
        sum += mins + hours * 60; 
    }
    return sum;
}