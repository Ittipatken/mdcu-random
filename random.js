// import fetch from 'node-fetch';

const genBtn = document.getElementById("gen-btn")

genBtn.addEventListener("click", function () {
    const numMin = Number(document.getElementById("num-min").value)
    const numMax = Number(document.getElementById("num-max").value)
    document.getElementById("output").textContent = "Generating...";
    const URL = `https://www.random.org/integers/?num=1&min=${numMin}&max=${numMax}&col=1&base=10&format=plain&rnd=new`;
    console.log(numMin)
    console.log(numMax)
    fetch(URL)
        .then(res => res.text())
        .then(randomNum => {
            console.log(randomNum);
            document.getElementById("output").textContent = randomNum;
        })
        .catch(err => console.log(err));
})
