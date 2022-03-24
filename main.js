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