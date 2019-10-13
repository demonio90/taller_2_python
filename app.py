from flask import Flask, render_template, request, session, make_response, escape
from werkzeug.security import generate_password_hash, check_password_hash

import mysql.connector
import json

app = Flask(__name__)
app.secret_key = '123456'

connectionDB = mysql.connector.connect(user="root", password="", host="localhost", database="catolico")
cursor = connectionDB.cursor()

@app.route('/')
def index():
	return render_template('index.html', title="Soy Católico")

@app.route('/inicio')
def inicio():
	query = "SELECT titulo, contenido FROM categorias WHERE nombre = 'Inicio'"
	cursor.execute(query)
	response = cursor.fetchone()
	return render_template('inicio.html', inicio=response)

@app.route('/somos')
def quienes_somos():
	query = "SELECT titulo, contenido FROM categorias WHERE nombre = 'Somos'"
	cursor.execute(query)
	response = cursor.fetchone()
	return render_template('quienes_somos.html', somos=response)

@app.route('/productos')
def productos_servicios():
	query = "SELECT titulo, contenido FROM categorias WHERE nombre = 'Productos'"
	cursor.execute(query)
	response = cursor.fetchone()
	return render_template('productos_servicios.html', servicios=response)

@app.route('/contacto')
def contacto():
	return render_template('contacto.html')

@app.route('/registrar_comentario', methods=['POST'])
def registrar_comentario():
	if request.method == 'POST':
		nombre = request.form['nombre']
		correo = request.form['correo']
		comentario = request.form['comentario']

		cursor.execute('INSERT INTO contactos(nombre, correo, comentario) VALUES(%s, %s, %s)', (nombre, correo, comentario))
		connectionDB.commit()

		if cursor.rowcount != 0:
			return 'Mensaje enviado correctamente.'


@app.route('/login')
def login():
	if 'user' in session:
		return render_template('adminbar.html')
	return render_template('login.html')

@app.route('/registro')
def registro():
	return render_template('registro.html')

@app.route('/iniciar_sesion', methods=['GET', 'POST'])
def iniciar_sesion():
	if request.method == 'POST':
		email = request.form['email']
		password = request.form['password']

		cursor.execute('SELECT nombre FROM usuarios WHERE correo = %s AND contrasena = %s', (email, password))
		response = cursor.fetchone()

		if response:
			session['user'] = response[0]
			return render_template('adminbar.html')
		else:
			return 'Usuario y/o contraseña incorrectos'

@app.route('/registrar', methods=['POST'])
def registrar():
	if request.method == 'POST':
		name = request.form['name']
		email = request.form['email']
		password = request.form['password']

		cursor.execute('INSERT INTO usuarios(nombre, correo, contrasena) VALUES(%s, %s, %s)', (name, email, password))
		connectionDB.commit()

		if cursor.rowcount != 0:
			return render_template('login.html')

@app.route('/inicio_edit')
def inicio_edit():
	return render_template('inicio_edit.html')

@app.route('/update_inicio', methods=['PUT'])
def update_inicio():
	if request.method == 'POST' or request.method == 'PUT':
		title = request.form['title']
		content = request.form['content']

		cursor.execute('UPDATE categorias SET titulo = %s, contenido = %s WHERE nombre = %s', (title, content, 'Inicio'))
		connectionDB.commit()

		if cursor.rowcount != 0:
			return 'Categoria actualizada correctamente.'
		else:
			return 'Error al actualizar la categoria.'

@app.route('/somos_edit')
def somos_edit():
	return render_template('somos_edit.html')

@app.route('/update_somos', methods=['PUT'])
def update_somos():
	if request.method == 'POST' or request.method == 'PUT':
		title = request.form['title']
		content = request.form['content']

		cursor.execute('UPDATE categorias SET titulo = %s, contenido = %s WHERE nombre = %s', (title, content, 'Somos'))
		connectionDB.commit()

		if cursor.rowcount != 0:
			return 'Categoria actualizada correctamente.'
		else:
			return 'Error al actualizar la categoria.'

@app.route('/servicios_edit')
def servicios_edit():
	return render_template('servicios_edit.html')

@app.route('/update_servicios', methods=['PUT'])
def update_servicios():
	if request.method == 'POST' or request.method == 'PUT':
		title = request.form['title']
		content = request.form['content']

		cursor.execute('UPDATE categorias SET titulo = %s, contenido = %s WHERE nombre = %s', (title, content, 'Productos'))
		connectionDB.commit()

		if cursor.rowcount != 0:
			return 'Categoria actualizada correctamente.'
		else:
			return 'Error al actualizar la categoria.'

@app.route('/salir')
def salir():
	session.clear()
	return render_template('login.html')

if __name__ == '__main__':
	app.run(debug=True, use_reloader=False)