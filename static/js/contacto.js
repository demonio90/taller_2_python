document.querySelector('#formContacto').addEventListener('submit', e => {
    e.preventDefault();
    
    nombre = document.querySelector('#nombre').value;
    correo = document.querySelector('#correo').value;
    comentario = document.querySelector('#comentario').value;

    fetch('/registrar_comentario', {
        method: 'POST',
        body: new URLSearchParams('nombre='+nombre+'&correo='+correo+'&comentario='+comentario)
    })
        .then(response => response.text())
        .then(data => {
            document.querySelector('#main').innerHTML = data;
        });
});