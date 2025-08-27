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

//  Calling-function
document.getElementById("button1").addEventListener('click',function name(e) {
  e.preventDefault()
  const coins=parseInt(document.getElementById("coins").innerText)
  const availablecoin= coins-20
  if (availablecoin<0) {
    // console.log("your coin finish");
    alert("Not enough coins to make this call!");
    return;
  }
  document.getElementById("coins").innerText=availablecoin
  alert("Calling National Emergency 999...")

  const data={
     name:"National Emergency ",
     number: "999",
     Date: new Date().toLocaleTimeString()
  }
  callinghistory.push(data)
  
  
})


document.getElementById("button2").addEventListener('click',function name(e) {
  e.preventDefault()
  const coins=parseInt(document.getElementById("coins").innerText)
  const availablecoin= coins-20
  if (availablecoin<0) {
    // console.log("your coin finish");
    alert("Not enough coins to make this call!");
    return;
  }
  document.getElementById("coins").innerText=availablecoin
  alert("Calling Police Helpine Number 999 ...")

  const data={
     name:"Police Helpline",
     number: "999",
     Date: new Date().toLocaleTimeString()
  }
  callinghistory.push(data)
  
})


document.getElementById("button3").addEventListener('click',function name(e) {
  e.preventDefault()
  const coins=parseInt(document.getElementById("coins").innerText)
  const availablecoin= coins-20
  if (availablecoin<0) {
    // console.log("your coin finish");
    alert("Not enough coins to make this call!");
    return;
  }
  document.getElementById("coins").innerText=availablecoin
  alert("Calling Fire Service Number 999 ...")
  const data={
     name:"Fire Service",
     number: "999",
     Date: new Date().toLocaleTimeString()
  }
  callinghistory.push(data)
  
})

document.getElementById("button4").addEventListener('click',function name(e) {
  e.preventDefault()
  const coins=parseInt(document.getElementById("coins").innerText)
  const availablecoin= coins-20
  if (availablecoin<0) {
    // console.log("your coin finish");
    alert("Not enough coins to make this call!");
    return;
  }
  document.getElementById("coins").innerText=availablecoin
  alert("Calling Ambulance Service Number 1994-999999...")
  const data={
     name:"Ambulance Service",
     number: "1994-999999",
     Date: new Date().toLocaleTimeString()
  }
  callinghistory.push(data)
  
})

document.getElementById("button5").addEventListener('click',function name(e) {
  e.preventDefault()
  const coins=parseInt(document.getElementById("coins").innerText)
  const availablecoin= coins-20
  if (availablecoin<0) {
    // console.log("your coin finish");
    alert("Not enough coins to make this call!");
    return;
  }
  document.getElementById("coins").innerText=availablecoin
  alert("Calling Women & Child Helpline Number 109 ...")

  const data={
     name:"Women & Child Helpline",
     number: "109 ",
     Date: new Date().toLocaleTimeString()
  }
  callinghistory.push(data)
})

document.getElementById("button6").addEventListener('click',function name(e) {
  e.preventDefault()
  const coins=parseInt(document.getElementById("coins").innerText)
  const availablecoin= coins-20
  if (availablecoin<0) {
    // console.log("your coin finish");
    alert("Not enough coins to make this call!");
    return;
  }
  document.getElementById("coins").innerText=availablecoin
  alert("Calling Anti-Corruption Helpline 106...")

   const data={
     name:"Anti-Corruption",
     number: "106 ",
     Date: new Date().toLocaleTimeString()
  }
  callinghistory.push(data)
})

document.getElementById("button7").addEventListener('click',function name(e) {
  e.preventDefault()
  const coins=parseInt(document.getElementById("coins").innerText)
  const availablecoin= coins-20
  if (availablecoin<0) {
    // console.log("your coin finish");
    alert("Not enough coins to make this call!");
    return;
  }
  document.getElementById("coins").innerText=availablecoin
  alert("Calling Electricity Helpline Number 16216...")
    const data={
     name:"Electricity Helpline",
     number: "16216 ",
     Date: new Date().toLocaleTimeString()
  }
  callinghistory.push(data)
})

document.getElementById("button8").addEventListener('click',function name(e) {
  e.preventDefault()
  const coins=parseInt(document.getElementById("coins").innerText)
  const availablecoin= coins-20
  if (availablecoin<0) {
    // console.log("your coin finish");
    alert("Not enough coins to make this call!");
    return;
  }
  document.getElementById("coins").innerText=availablecoin
  alert("Calling Brac Helpline Number 16445...")

    const data={
     name:"Brac Helpline",
     number: "16445 ",
     Date: new Date().toLocaleTimeString()
  }
  callinghistory.push(data)
})
document.getElementById("button9").addEventListener('click',function name(e) {
  e.preventDefault()
  const coins=parseInt(document.getElementById("coins").innerText)
  const availablecoin= coins-20
  if (availablecoin<0) {
    // console.log("your coin finish");
    alert("Not enough coins to make this call!");
    return;
  }
  document.getElementById("coins").innerText=availablecoin
  alert("Calling Bangladesh Railway Helpline 163...")
  const data={
     name:"Bangladesh Railway ",
     number: " 163 ",
     Date: new Date().toLocaleTimeString()
  }
  callinghistory.push(data)
})


// History-section


document.getElementById("button1").addEventListener("click",function(){
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""

    for(const data of callinghistory){
        const div = document.createElement("div")
        div.innerHTML=`
        <div class="flex justify-between items-center mt-3 p-2 rounded-md h-[70px] bg-gray-100">
              <div class="flex items-center ">
                  <div>
                    <h1>${data.name}</h1>
                    <p>${data.number}</p>
                    
                  </div>
                  <div class="ml-3">
                    
                    <p>${data.Date}</p>
                  </div>
              
        `

        transactionContainer.appendChild(div)


    }
})
// Challenges-section

const copyButton = document.getElementsByClassName("copybtn");
for (let i = 0; i < copyButton.length; i++) {
  copyButton[i].addEventListener('click', function (e) {
    e.preventDefault();
    const copys = parseInt(document.getElementById("copy-time").innerText);
    const copyincreses = copys+ 1;
    document.getElementById("copy-time").innerText =copyincreses;
  });
  
}
