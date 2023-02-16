// let mathString = "-2*(-1)=";
// console.log(getResultCalculate(mathString));
function getResultCalculate(mathString) {
    const calculate = function (mathString, end = "=") {
        let res = 0;
        let resSmal;
        if (mathString[0] === "(") {
            mathString = mathString.substring(1);
            const resAndStr = calculate(mathString, ")");
            resSmal = resAndStr[0];
            mathString = resAndStr[1];
        } else if (mathString[0] === "-" && mathString[1] === "(") {
            mathString = mathString.substring(2);
            const resAndStr = calculate(mathString, ")");
            resSmal = -1 * resAndStr[0];
            mathString = resAndStr[1];
        } else {
            resSmal = parseInt(mathString);
            mathString = mathString.substring(
                (parseInt(mathString) + "").length
            );
        }

        while (mathString[0] !== end) {
            const operator = mathString[0];
            mathString = mathString.substring(1);
            let namber;
            if (mathString[0] === "(") {
                mathString = mathString.substring(1);
                const resAndStr = calculate(mathString, ")");
                namber = resAndStr[0];
                mathString = resAndStr[1];
            } else {
                namber = parseInt(mathString);
                mathString = mathString.substring(
                    (parseInt(mathString) + "").length
                );
            }
            switch (operator) {
                case "+":
                    res += resSmal;
                    resSmal = namber;
                    break;
                case "-":
                    res += resSmal;
                    resSmal = -1 * namber;
                    break;
                case "*":
                    resSmal *= namber;
                    break;
                case "/":
                    resSmal /= namber;
                    break;
            }
        }
        res += resSmal;
        mathString = mathString.substring(1);
        return [res, mathString];
    };
    return calculate(mathString)[0];
}

// function calculate(res, str, index, end) {
//     let subStr;
//     let space = "";
//     while (str[index] !== end) {
//         subStr = str.substring(index);
//         if (subStr[0] === "+") {
//             space = " ";
//         } else {
//             space = "";
//         }
//         namber = parseInt(subStr);
//         if (
//             str[index + (namber + space).length] === "+" ||
//             str[index + (namber + space).length] === "-"
//         ) {
//             res += namber;
//             index += (namber + space).length;
//         } else {
//             const indexAndRes = calTo(str, index, res);
//             index = indexAndRes[0];
//             res = indexAndRes[1];
//         }
//         console.log("res " + res);
//     }
//     return res;
// }

// function calTo(str, index, res) {
//     let subStr = str.substring(index);
//     let namber = parseInt(subStr);
//     let resFunc = namber;
//     if (subStr[0] === "+") {
//         index += (namber + " ").length;
//     } else {
//         index += (namber + "").length;
//     }
//     console.log(subStr);
//     while (str[index] !== "+" && str[index] !== "-" && str[index] !== "=") {
//         switch (str[index]) {
//             case "*":
//                 index++;
//                 subStr = str.substring(index);
//                 namber = parseInt(subStr);
//                 index += (namber + "").length;
//                 resFunc *= namber;
//                 break;
//             case "/":
//                 index++;
//                 subStr = str.substring(index);
//                 namber = parseInt(subStr);
//                 index += (namber + "").length;
//                 resFunc /= namber;
//                 break;
//         }
//     }
//     console.log("resFn = " + resFunc);
//     res += resFunc;
//     return [index, res];
// }

let textBox = document.querySelector(".text");
let mathtext = "";
document.querySelector(".button-delete").addEventListener("click", () => {
    mathtext = mathtext.substring(0, mathtext.length - 1);
    textBox.textContent = mathtext;
});

document.querySelector(".button-bracket-l").addEventListener("click", () => {
    mathtext += "(";
    textBox.textContent = mathtext;
});

document.querySelector(".button-bracket-r").addEventListener("click", () => {
    mathtext += ")";
    textBox.textContent = mathtext;
});

document.querySelector(".button-one").addEventListener("click", () => {
    mathtext += "1";
    textBox.textContent = mathtext;
});

document.querySelector(".button-two").addEventListener("click", () => {
    mathtext += "2";
    textBox.textContent = mathtext;
});

document.querySelector(".button-three").addEventListener("click", () => {
    mathtext += "3";
    textBox.textContent = mathtext;
});

document.querySelector(".button-four").addEventListener("click", () => {
    mathtext += "4";
    textBox.textContent = mathtext;
});

document.querySelector(".button-five").addEventListener("click", () => {
    mathtext += "5";
    textBox.textContent = mathtext;
});

document.querySelector(".button-six").addEventListener("click", () => {
    mathtext += "6";
    textBox.textContent = mathtext;
});

document.querySelector(".button-seven").addEventListener("click", () => {
    mathtext += "7";
    textBox.textContent = mathtext;
});

document.querySelector(".button-eight").addEventListener("click", () => {
    mathtext += "8";
    textBox.textContent = mathtext;
});

document.querySelector(".button-nine").addEventListener("click", () => {
    mathtext += "9";
    textBox.textContent = mathtext;
});

document.querySelector(".button-zero").addEventListener("click", () => {
    mathtext += "0";
    textBox.textContent = mathtext;
});

document.querySelector(".button-comma").addEventListener("click", () => {
    mathtext += ".";
    textBox.textContent = mathtext;
});

document.querySelector(".button-divided").addEventListener("click", () => {
    mathtext += "/";
    textBox.textContent = mathtext;
});

document.querySelector(".button-times").addEventListener("click", () => {
    mathtext += "*";
    textBox.textContent = mathtext;
});

document.querySelector(".button-minus").addEventListener("click", () => {
    mathtext += "-";
    textBox.textContent = mathtext;
});

document.querySelector(".button-plus").addEventListener("click", () => {
    mathtext += "+";
    textBox.textContent = mathtext;
});

document.querySelector(".button-clean").addEventListener("click", () => {
    mathtext = "";
    textBox.textContent = mathtext;
});

// -------Кнопка '='--------------------------
const button_calculate = document.querySelector(".button-calculate");

button_calculate.addEventListener("click", (e) => {
    button_calculate.className = "button-calculate";
    if (mathtext.split("(").length === mathtext.split(")").length) {
        button_calculate.classList.add("button-calculate-active");
        mathtext += "=";
        textBox.textContent = getResultCalculate(mathtext);
        mathtext = "";
    }
});

button_calculate.addEventListener("mousemove", () => {
    button_calculate.className = "button-calculate";
    if (mathtext.split("(").length === mathtext.split(")").length) {
        button_calculate.classList.add("button-calculate-hover");
    } else {
        button_calculate.classList.add("button-calculate-uncorrect");
    }
});

button_calculate.addEventListener("mouseout", () => {
    button_calculate.className = "button-calculate";
});
