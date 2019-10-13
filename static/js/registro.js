document.querySelector('#formRegistro').addEventListener('submit', e => {
    e.preventDefault();

    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    fetch('/registrar', {
        method: 'POST',
        body: new URLSearchParams('name='+name+'&email='+email+'&password='+password)
    })
        .then(res => res.text())
        .then(data => {
            document.querySelector('#main').innerHTML = data;           
        })
});