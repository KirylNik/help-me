module.exports = function count(s, pairs) {
    let n = arrayCounting(pairs);
    let accumulatorK = [];
    bitMaskHandler(s);
    let simpleNumbersK = [];
    siftSimpleNumber(accumulatorK);
    return (simpleNumbersK.length);


    // Оставляет только простые числа.
    function siftSimpleNumber(arr) {
        for (var i = 0; i < arr.length; i++) {
            let delitel = arr[i];
            let flagDeleniya = 0;
            while (flagDeleniya < 2) {
                if (arr[i]%delitel == 0) {
                    flagDeleniya++;
                    delitel--;
                } else {
                    delitel--;
                }
                if (delitel == 0 && flagDeleniya == 2) {
                    simpleNumbersK.push(arr[i]);
                    break;
                } else if (delitel == 0 && flagDeleniya != 2) {
                    break;
                }
            }
        };
    };
    // Выполняет основное условие: возвращает колличество чисел K, соответствующих обоим условиям для всех s[j].
    function bitMaskHandler(s) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] == 0) {
                for (let k = 1; k <= n; k++) {
                    let temp = nod(k+j, n);
                    if (temp != 1 && (accumulatorK.indexOf(k) == -1)) {
                        accumulatorK.push(k)
                    }
                    else {
                        continue;
                    };
                }
            }
            else if (s[j] == 1) {
                for (let k = 0; k <= n; k++) {
                    let temp = nod(k+j, n);
                    if (temp == 1 && (accumulatorK.indexOf(k) == -1)) {
                        accumulatorK.push(k)
                    }
                    else {
                        continue;
                    };
                }
            }
        };
    };
    // Находит наибольший общий делитель.
    function nod(kj, n) {
        if(n > 0) {
            let k = kj%n;
            return nod(n, k);
        }
        else {
            return Math.abs(kj);
        }
    };
    // Обработчик массива с парама. Возвращает N.
    function arrayCounting(pairs) {
        let arrayPow = [];
        let nTemp = 1;
        for (let i = 0; i < pairs.length; i++) {
            arrayPow.push(Math.pow(pairs[i][0], pairs[i][1]));
        };
        for (let i = 0; i < arrayPow.length; i++) {
            nTemp = nTemp * arrayPow[i]
        };
        return (nTemp);
    };

};