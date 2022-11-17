const scriptURL = 'https://script.google.com/macros/s/AKfycbwtnGJF2w7F4Tl_Ww_QR363icfkTULdtc78QUTV3cIhv-jZbkzfSlLRxZrcPOoQu1Vmfw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message sent successfully'
            setTimeout(function() {
                msg.innerHTML = ''
            }, 5000)
            form.reset()
        })
        .catch(error => {
            msg.innerHTML = error.message
            msg.style.color = 'red'
            setTimeout(function() {
                msg.innerHTML = ''
            }, 5000)
        })
})