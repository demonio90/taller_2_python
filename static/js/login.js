if (document.querySelector('#formlogin')) {
    document.querySelector('#formlogin').addEventListener('submit', e => {
        e.preventDefault();

        var email = document.querySelector('#email').value;
        var password = document.querySelector('#password').value;

        fetch('/iniciar_sesion', {
            method: 'POST',
            body: new URLSearchParams('email=' + email + '&password=' + password)
        })
            .then(res => res.text())
            .then(data => {
                document.querySelector('#main').innerHTML = data;

                var script = document.createElement('script');
                script.setAttribute('src', '../static/js/adminbar.js');

                document.querySelector('#script').appendChild(script);
            })
    });
}

if (document.querySelector('#registrarse')) {
    document.querySelector('#registrarse').addEventListener('click', e => {
        e.preventDefault();

        fetch('/registro')
            .then(res => res.text())
            .then(data => {
                document.querySelector('#main').innerHTML = data;

                var script = document.createElement('script');
                script.setAttribute('src', '../static/js/registro.js');

                document.querySelector('#scripts').appendChild(script);
            })
    });
}

if (document.querySelector('#inicioEdit')) {
    document.querySelector('#inicioEdit').addEventListener('click', e => {
        e.preventDefault();
        console.log('Click');

        fetch('/inicio_edit')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#content-admin').innerHTML = data;

                document.querySelector('#inicioForm').addEventListener('submit', e => {
                    e.preventDefault();
                    
                    var title = document.querySelector('#title').value;
                    var content = document.querySelector('#content').value;

                    fetch('/update_inicio', {
                        method: 'PUT',
                        body: new URLSearchParams('title=' + title + '&content=' + content),
                    })
                        .then(response => response.text())
                        .then(data => {
                            document.querySelector('#content-admin').innerHTML = data;
                        })
                });
            })
    });
}

if (document.querySelector('#somosEdit')) {
    document.querySelector('#somosEdit').addEventListener('click', e => {
        e.preventDefault();

        fetch('/somos_edit')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#content-admin').innerHTML = data;

                document.querySelector('#somosForm').addEventListener('submit', e => {
                    e.preventDefault();
                    
                    var title = document.querySelector('#title').value;
                    var content = document.querySelector('#content').value;

                    fetch('/update_somos', {
                        method: 'PUT',
                        body: new URLSearchParams('title=' + title + '&content=' + content),
                    })
                        .then(response => response.text())
                        .then(data => {
                            document.querySelector('#content-admin').innerHTML = data;
                        })
                });
            })
    });
}

if (document.querySelector('#serviciosEdit')) {
    document.querySelector('#serviciosEdit').addEventListener('click', e => {
        e.preventDefault();

        fetch('/servicios_edit')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#content-admin').innerHTML = data;

                document.querySelector('#serviciosForm').addEventListener('submit', e => {
                    e.preventDefault();
                    
                    var title = document.querySelector('#title').value;
                    var content = document.querySelector('#content').value;

                    fetch('/update_servicios', {
                        method: 'PUT',
                        body: new URLSearchParams('title=' + title + '&content=' + content),
                    })
                        .then(response => response.text())
                        .then(data => {
                            document.querySelector('#content-admin').innerHTML = data;
                        })
                });
            })
    });
}

if (document.querySelector('#salir')) {
    document.querySelector('#salir').addEventListener('click', e => {
        e.preventDefault();
        console.log('Salir');
        

        fetch('/salir')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#main').innerHTML = data;
            })
    });
}