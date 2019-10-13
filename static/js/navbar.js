document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, 'edge');
});

document.querySelector('#inicio').addEventListener('click', e => {
  
    fetch('/inicio')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.querySelector('#main').innerHTML = data;
        })
});

document.querySelector('#somos').addEventListener('click', e => {
 
    fetch('/somos')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.querySelector('#main').innerHTML = data;
        })
});

document.querySelector('#productos').addEventListener('click', e => {
 
    fetch('/productos')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.querySelector('#main').innerHTML = data;
        })
});

document.querySelector('#contacto').addEventListener('click', e => {
 
    fetch('/contacto')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.querySelector('#main').innerHTML = data;

            var script = document.createElement('script');
            script.setAttribute('src', '../static/js/contacto.js');

            document.querySelector('#script').appendChild(script);
        })
});

document.querySelector('#administrador').addEventListener('click', e => {
    fetch('/login')
        .then(res => res.text())
        .then(data => {
            document.querySelector('#main').innerHTML = data;

            var script = document.createElement('script');
            script.setAttribute('src', '../static/js/login.js');

            document.querySelector('#script').appendChild(script);    
        })
});