let equal = document.getElementById("equal");
let inp1 = document.getElementById("inp1");
let alldel = document.querySelector("#alldel");
let del = document.querySelector("#delete");
let result = document.getElementById("result");
let ques = '';
function btn_click(num) {
    ques += num;
    inp1.textContent = ques;
}
equal.onclick = () => {
    if (ques.trim() === "") {
        return
    } else {
        try {
            let finalResult = eval(ques);
            result.textContent = finalResult;
        } catch {
            result.textContent = "Error";
        }
    }
}
alldel.onclick = () => {
    ques = '';
    result.textContent = '';
    inp1.textContent = ques;
}
del.onclick = () => {
    ques = ques.slice(0, -1);
    inp1.textContent = ques;
    result.textContent = '';
}