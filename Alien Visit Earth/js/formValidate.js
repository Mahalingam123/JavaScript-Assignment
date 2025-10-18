window.addEventListener('load', () => {


    const loader = document.getElementById("loading");

    const formDiv = document.getElementById("container");

    const video = document.getElementById("video");

    video.start = 3;

    fetchPlanetName();

    setTimeout(() => {

        loader.style.display = "none";

        formDiv.style.display = "block";


    }, 3000);


})

async function fetchPlanetName() {

    try {
        const resp = await fetch("/json/planet.json");

        const data = await resp.json()

        const sel = document.getElementById("planet");

        const arr = data
            .planets;

        for (let a of arr) {
            const option = document.createElement("option");

            option.value = a;

            option.innerText = a;

            sel.appendChild(option);

        }


    }

    catch (e) {
        console.error(e);
    }


}



const submit = document.getElementById("submit");

const id = document.getElementById("id");

const names = document.getElementById("name");

const antena = document.getElementById("ante");

const planet = document.getElementById("planet");

const phrase = document.getElementById("type");

const date = document.getElementById("date");

const show=document.getElementById("show");

let allCorrect=false;


setInterval(()=>{
    if (id.value != "" && names.value != "" && antena.value != "" && planet.value != "" && phrase.value != "" && date.value != "") {

        submit.style.display = "block";
        
        show.style.display = "none";

        submit.onmouseover = function () 
        {
            submit.style.display = "block";
        };

        allCorrect = false;

    }
    else {

        submit.onmouseover = function () {
            submit.style.display = "none";

            show.style.display = "block";

            allCorrect = true;

        };

        

    }
},500);

antena.addEventListener('input',() => {
    setInterval(() => {
        if (antena.value % 2 != 0) {

            surroundRed(antena);

            const anteMsg = document.getElementById("anteMsg");

            anteMsg.innerText = "Antena must be Even";

            anteMsg.style.display = "block";

            allCorrect = false;
        }
        else {
            anteMsg.style.display = "none";

            surroundGreen(antena)

            allCorrect = true;
        }
    }, 200)
})

 
id.addEventListener('input',()=>{

    if (!id.value) return;

    if (!/^[A-Z]{3}-\d{3}@[A-Z]{3}-\d{2}$/.test(id.value)) {

        const idMsg = document.getElementById("idMsg");

        surroundRed(id);

        idMsg.innerText = "ID Must Be Like eg ZOR-999@UFO-12";

        idMsg.style.display = "block";

        allCorrect = false;


    }
    else {
        idMsg.style.display = "none";

        surroundGreen(id);

        allCorrect = true;

    }
});

phrase.addEventListener('input',()=>{
   
    if (!phrase.value) return;

    if (!/^(?=.*[.,!?@#\$%\^&*\(\)_\-])(?=.*[\u{1F300}-\u{1FAFF}\u{1F600}-\u{1F64F}])[A-Za-z.,!?@#\$%\^&*\(\)_\-\u{1F300}-\u{1FAFF}\u{1F600}-\u{1F64F}]+$/u
        .test(phrase.value)) {
        const phMsg = document.getElementById("phMsg");

        surroundRed(phrase);

        phMsg.innerText = "Phrase must be like Test@😊 contains one emoji ";

        phMsg.style.position = "relative";

        phMsg.style.left = "30px";

        allCorrect = false;

        phMsg.style.display = "block";

    }
    else {
        phMsg.style.display = "none";

        surroundGreen(phrase);

        allCorrect = true;
    }

});


date.addEventListener('change',()=>{

    if (!date.value) return;

    const curdate = new Date();
    curdate.setHours(0, 0, 0, 0);

    const inputDate = new Date(date.value);
    inputDate.setHours(0, 0, 0, 0);

    const datemsg = document.getElementById("dateMsg");

    if (inputDate <= curdate) {
        datemsg.innerText = "Date can't be past or today";

        datemsg.style.display = "block";

        surroundRed(date);

        allCorrect = false;
    }

    else {
        datemsg.style.display = "none";
        surroundGreen(date);

        allCorrect = true;
    }
})

submit.addEventListener("click", (e) => {

      if(allCorrect){
        alert("Registerd Successfully press Ok to Continue");
        window.location.reload();
      }
      else{
        e.preventDefault();
      }

});




function surroundRed(input) {
    input.style.border = "2px solid red";
}

function surroundGreen(input) {
    input.style.border = "1px solid green";
}