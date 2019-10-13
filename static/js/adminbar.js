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