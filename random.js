// import fetch from 'node-fetch';

const genBtn = document.getElementById("gen-btn")

document.getElementById('check-box1').checked = true
document.getElementById('check-box2').checked = true
document.getElementById('check-box3').checked = true

genBtn.addEventListener("click", function () {
    document.getElementById("output").textContent = "Generating...";
    let finalCanteen = ""
    let canteenArray = []
    const checkBox1 = document.getElementById('check-box1').checked
    const checkBox2 = document.getElementById('check-box2').checked
    const checkBox3 = document.getElementById('check-box3').checked
    for (let i = 1; i < 4; i++){
        let checkBox = "checkBox"
        checkBox = eval(checkBox + i)
        console.log(checkBox)
        if (checkBox === true) {
            canteenArray.push(i)
        }
        else {
            // console.log(i + " is not chosen")
        }
    }
    console.log(canteenArray)
    if (canteenArray.length > 1) {
        const URL = `https://www.random.org/integers/?num=1&min=1&max=${canteenArray.length}&col=1&base=10&format=plain&rnd=new`
        // console.log(numMin)
        // console.log(numMax)
        fetch(URL)
            .then(res => res.text())
            .then(randomNum => {
                console.log("The random number is " + randomNum)
                console.log(canteenArray.length)
                for (let i= 0; i < 4; i++) {
                    if (canteenArray[i] == randomNum) {
                        if (randomNum == 1) {
                            finalCanteen = "อปร"
                        } else if (randomNum == 2) {
                            finalCanteen = "สธ"
                        } else if (randomNum == 3) {
                            finalCanteen = "ภูมิสิริ"
                        } else {
                            console.log("Final canteen is broken")
                        }
    
                        document.getElementById("output").textContent = finalCanteen
                    } else {
                        // console.log("Canteen " + canteenArray[i] + " is not chosen")
                    }
                }
                
            })
            .catch(err => console.log(err))    
    } else {
        document.getElementById("output").textContent = "เลือกให้มันมากกว่า 1 ที่ดิ"
    }


// for testing
//    const numMin = Number(document.getElementById("num-min").value)
//    const numMax = Number(document.getElementById("num-max").value)
})
