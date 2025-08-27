const callinghistory=[]

// heart-increses function
const heartButtons = document.getElementsByClassName("heart-click");
for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener('click', function (e) {
    e.preventDefault();
    const lifeline = parseInt(document.getElementById("heart-increses").innerText);
    const incresesheart = lifeline + 1;
    document.getElementById("heart-increses").innerText =incresesheart;
  });
}


