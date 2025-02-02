// import fetch from 'node-fetch';

const genBtn = document.getElementById("gen-btn");
document.getElementById('check-box1').checked = true;
document.getElementById('check-box2').checked = true;
document.getElementById('check-box3').checked = true;
document.getElementById("num-1").defaultValue = 1;
document.getElementById("num-2").defaultValue = 2;

genBtn.addEventListener("click", function () {
    genBtn.setAttribute("disabled", true);
    document.getElementById("output").innerHTML = `
    <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `;
    let canteenArray = [];
    let finalCanteen = [];
    // const checkBox1 = document.getElementById('check-box1').checked
    // const checkBox2 = document.getElementById('check-box2').checked
    // const checkBox3 = document.getElementById('check-box3').checked
    // const checkBox4 = document.getElementById('check-box4').checked
    // const checkBox5 = document.getElementById('check-box5').checked
    // const checkBox6 = document.getElementById('check-box6').checked
    // const checkBox7 = document.getElementById('check-box7').checked
    for (let i = 1; i < 10; i++) {
        let checkBox = "checkBox"
        checkBox = eval(document.getElementById(`check-box${i}`).checked)
        // console.log(checkBox)
        if (checkBox === true) {
            canteenArray.push(i)
        }
        else {
            // console.log(i + " is not chosen")
        }
    }
    // console.log(canteenArray)
    if (canteenArray.length > 1) {
        const URL = `https://www.random.org/integers/?num=1&min=1&max=${canteenArray.length}&col=1&base=10&format=plain&rnd=new`
        // console.log(numMin)
        // console.log(numMax)
        fetch(URL)
            .then(res => res.text())
            .then(randomNum => {
                // console.log("The random number is " + randomNum)
                // console.log(canteenArray.length)
                if (canteenArray.includes(1)) {
                    finalCanteen.push("อปร")
                } if (canteenArray.includes(2)) {
                    finalCanteen.push("สธ")
                } if (canteenArray.includes(3)) {
                    finalCanteen.push("ภูมิสิริ")
                } if (canteenArray.includes(4)) {
                    finalCanteen.push("BWELL")
                } if (canteenArray.includes(5)) {
                    finalCanteen.push("สก")
                } if (canteenArray.includes(6)) {
                    finalCanteen.push("ใต้หอปรีดาลัย")
                } if (canteenArray.includes(7)) {
                    finalCanteen.push("Silom Complex")
                } if (canteenArray.includes(8)) {
                    finalCanteen.push("Silom Edge")
                } if (canteenArray.includes(9)) {
                    finalCanteen.push("รัฐศาสตร์")
                } else {
                    // console.log("Final canteen is broken")
                }
                // console.log(finalCanteen)
                document.getElementById("output").textContent = `${finalCanteen[randomNum - 1]}`
                genBtn.removeAttribute("disabled", true);
            })
            .catch(err => console.log(err))
    } else {
        document.getElementById("output").textContent = "เลือกมากกว่า 1 ที่"
        genBtn.removeAttribute("disabled", true);
    };


    // for testing
    //    const numMin = Number(document.getElementById("num-min").value)
    //    const numMax = Number(document.getElementById("num-max").value)
})

const numBtn = document.getElementById("num-btn")
const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

numBtn.addEventListener("click", function () {
    numBtn.setAttribute("disabled", true);
    document.getElementById("output-2").innerHTML = `
    <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `;
    let num1 = Number(document.getElementById("num-1").value);
    let num2 = Number(document.getElementById("num-2").value);
    if (num2 > num1) {
        fetch("https://worldtimeapi.org/api/timezone/" + tz)
        .then(response => response.json())
        .then(data => {
            document.getElementById("time-verify").textContent = "✅ " + tz + " " + data.datetime;
        });
        const URL = `https://www.random.org/integers/?num=1&min=${num1}&max=${num2}&col=1&base=10&format=plain&rnd=new`;
        fetch(URL)
            .then(res => res.text())
            .then(randomNum => {
                document.getElementById("output-2").textContent = randomNum;
                numBtn.removeAttribute("disabled", true);
            })
            .catch(err => console.log(err));
    } else {
        document.getElementById("output-2").textContent = "Invalid Value";
        numBtn.removeAttribute("disabled", true);
        document.getElementById("time-verify").remove();
        // console.log(typeof num1);
        // console.log(typeof num2);
        // console.log(num2 > num1);
    };
})