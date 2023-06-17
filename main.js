let text_bar = document.getElementById('main-message')
let message_box = document.getElementById('mid-container')
text_bar.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        let message_container = document.createElement('div')
        let new_text = document.createElement('p')
        message_container.appendChild(new_text)
        new_text.classList.add('message')
        new_text.textContent = text_bar.value
        message_box.appendChild(message_container)
        text_bar.value = ''
    }
})

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let m2 = today.getMinutes()-(Math.floor(Math.random()*10)+1);
    let s = today.getSeconds();
    m = checkTime(m);
    m2 = checkTime(m2);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m;
    document.getElementById('last-connection').innerHTML =  h + ":" + m2;
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}

startTime()