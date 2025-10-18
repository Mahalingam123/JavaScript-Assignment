function generateMeme() {
  const tank = document.getElementById("memeText");

  const value = tank.options[tank.selectedIndex].text;

  const meme = document.getElementById("meme");

  if (value === "Cat") {
    const dialogue = window.prompt("Enter a Dialogue: ");

    const div = document.createElement('div');

    const img = document.createElement('img');

    const text = document.createElement('text');

    const DelButton = document.createElement("button");

    DelButton.addEventListener('click',()=>{
      
      const parentDiv = DelButton.parentElement;

      const memeDiv = parentDiv.previousElementSibling;

      meme.removeChild(memeDiv);

      meme.removeChild(parentDiv);

    });

    DelButton.className = "catDel";

    const imgDel = document.createElement("img");

    imgDel.src = "/Images/delete.png";
    
    imgDel.height="30";

    imgDel.width="30";
   
    const EditButton = document.createElement("button");

    EditButton.className = "catEdit";

    const imgEdit = document.createElement("img");

    imgEdit.src = "/Images/pencil.png";

    imgEdit.height = "30";

    imgEdit.width = "30";

    EditButton.appendChild(imgEdit);

    DelButton.appendChild(imgDel);

    const divButton=document.createElement("div");

    divButton.appendChild(EditButton);

    EditButton.addEventListener('click', () => {
      text.innerText = window.prompt("Enter a new Dialouge");
    })

    divButton.appendChild(DelButton);

    text.innerText = dialogue;

    text.className = "catDialouge";

    img.src = tank.value;

    div.className = "catDiv";

    img.className = "img";

    div.appendChild(text);

    div.appendChild(img);

    meme.appendChild(div);

    meme.appendChild(divButton);

  }
  else if (value === "Diwali") {
    const dialogue = window.prompt("Enter a Dialogue:1 ");

    const dialogue2 = window.prompt("Enter a Dialogue: 2");

    const DelButton = document.createElement("button");

    const div = document.createElement('div');

    const img = document.createElement('img');

    const text = document.createElement('text');

    const text1 = document.createElement('text');

    text.innerText=dialogue;

    text1.innerText=dialogue2;

    DelButton.className = "catDel";



    const imgDel = document.createElement("img");

    imgDel.src = "/Images/delete.png";

    imgDel.height = "30";

    imgDel.width = "30";

    const EditButton = document.createElement("button");

    EditButton.className = "catEdit";

    const imgEdit = document.createElement("img");

    imgEdit.src = "/Images/pencil.png";

    imgEdit.height = "30";

    imgEdit.width = "30";

    EditButton.appendChild(imgEdit);

    EditButton.addEventListener('click', () => {
      text.innerText = window.prompt("Enter a new Dialouge");
    })

    DelButton.addEventListener('click', () => {

      const parentDiv = DelButton.parentElement;

      const memeDiv = parentDiv.previousElementSibling;

      meme.removeChild(memeDiv);

      meme.removeChild(parentDiv);

    });

    DelButton.appendChild(imgDel);

    const divButton = document.createElement("div");

    divButton.appendChild(EditButton);

    divButton.appendChild(DelButton);

    img.src = tank.value;

    div.className = "catDiv";

    img.className = "img";
 
    div.appendChild(text);

    div.appendChild(text1);

    div.appendChild(img);

    text.className="diwaliText1";

    text1.className = "diwaliText2";

    meme.appendChild(div);

    meme.appendChild(divButton);

  }
  else if (value === "Mouse") {
    const dialogue = window.prompt("Enter a Dialogue: ");

    const div = document.createElement('div');

    const img = document.createElement('img');

    const text = document.createElement('text');

    const DelButton = document.createElement("button");

    DelButton.className = "catDel";

    const imgDel = document.createElement("img");

    imgDel.src = "/Images/delete.png";

    imgDel.height = "30";

    imgDel.width = "30";

    const EditButton = document.createElement("button");

    EditButton.className = "catEdit";

    const imgEdit = document.createElement("img");

    imgEdit.src = "/Images/pencil.png";

    imgEdit.height = "30";

    imgEdit.width = "30";

    EditButton.appendChild(imgEdit);

    EditButton.addEventListener('click', () => {
      text.innerText = window.prompt("Enter a new Dialouge");
    })

    DelButton.addEventListener('click', () => {

      const parentDiv = DelButton.parentElement;

      const memeDiv = parentDiv.previousElementSibling;

      meme.removeChild(memeDiv);

      meme.removeChild(parentDiv);

    });

    DelButton.appendChild(imgDel);

    const divButton = document.createElement("div");

    divButton.appendChild(EditButton);

    divButton.appendChild(DelButton);

    text.innerText = dialogue;

    text.className = "catDialouge";

    img.src = tank.value;

    div.className = "catDiv";

    img.className = "img";

    div.appendChild(text);

    div.appendChild(img);

    meme.appendChild(div);

    meme.appendChild(divButton);

  }
  else {
    const dialogue = window.prompt("Enter a Dialogue: ");

    const div = document.createElement('div');

    const img = document.createElement('img');

    const text = document.createElement('text');

    const DelButton = document.createElement("button");

    DelButton.className = "catDel";

    const imgDel = document.createElement("img");

    imgDel.src = "/Images/delete.png";

    imgDel.height = "30";

    imgDel.width = "30";

    const EditButton = document.createElement("button");

    EditButton.className = "catEdit";

    const imgEdit = document.createElement("img");

    imgEdit.src = "/Images/pencil.png";

    imgEdit.height = "30";

    imgEdit.width = "30";

    EditButton.appendChild(imgEdit);

    EditButton.addEventListener('click',()=>{
      text.innerText=window.prompt("Enter a new Dialouge");
    });

    DelButton.addEventListener('click', () => {

      const parentDiv = DelButton.parentElement;

      const memeDiv = parentDiv.previousElementSibling;

      meme.removeChild(memeDiv);

      meme.removeChild(parentDiv);

    });

    DelButton.appendChild(imgDel);

    const divButton = document.createElement("div");

    divButton.appendChild(EditButton);

    divButton.appendChild(DelButton);

    text.innerText = dialogue;

    text.className = "dogDialouge";

    img.src = tank.value;

    div.className = "catDiv";

    img.className = "img";

    div.appendChild(text);

    div.appendChild(img);

    meme.appendChild(div);

    meme.appendChild(divButton);


  }



}
