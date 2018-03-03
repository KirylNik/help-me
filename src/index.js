module.exports = function count(s, pairs) {
    let n = arrayCounting(pairs);
    let accumulatorJ0 = [];
    let accumulatorJ1 = [];
    bitMaskHandler(s);
    let matchingElem = [];
    matchingElem = matchingElements(accumulatorJ1, accumulatorJ0);
    return((matchingElem.length) %  1000000007);



    function matchingElements(accumulatorJ1, accumulatorJ0) {
        let arrayTemp = []
        for (let i = 0; i < accumulatorJ0.length; i++) {
            if (accumulatorJ1.indexOf(accumulatorJ0[i]) != -1) {
                arrayTemp.push(accumulatorJ0[i]);
            }
        }
        return (arrayTemp);
    };
    // Выполняет основное условие: возвращает колличество чисел K, соответствующих обоим условиям для всех s[j].
    function bitMaskHandler(s) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] == 0) {
                for (let k = 1; k <= n; k++) {
                    let temp = nod(k+j, n);
                    if (temp != 1 && (accumulatorJ0.indexOf(k) == -1)) {
                        accumulatorJ0.push(k);
                    }
                    else {
                        continue;
                    };
                }
            }
            else if (s[j] == 1) {
                for (let k = 0; k <= n; k++) {
                    let temp = nod(k+j, n);
                    if (temp == 1 && (accumulatorJ1.indexOf(k) == -1)) {
                        accumulatorJ1.push(k);
                    }
                    else {
                        continue;
                    };
                };
            };
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