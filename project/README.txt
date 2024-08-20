# Gestión de Cursos y Alumnos


## 1. Introducción
Este proyecto es una aplicación web para la gestión de cursos y alumnos. Permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en cursos y alumnos, y gestionar la inscripción de alumnos en cursos. El frontend está desarrollado en Angular, mientras que el backend utiliza Node.js, Express, y una base de datos MySQL/MariaDB.

## 2. Requisitos del Proyecto
- **Frontend:** Angular
- **Backend:** Node.js con Express
- **Base de Datos:** MySQL o MariaDB
- **Puerto de la base de datos: 3307
- **API REST:** Implementada en el backend para manejar operaciones CRUD
- **Validaciones:** Campos obligatorios, unicidad de código de curso y matrícula de alumno

## 3. Estructura del Proyecto

### 3.1. Backend

iniciar servidor MariaDB desde la consola 
net start mariadb

comandos para iniciar el proyecto
-cd gestion-cursos-alumnos
-npm install
-npm init -y
-npm install express mysql2


para iniciar el servidor utilizar
-node server.js

- **curso-alumno:**
  - `server.js`: Archivo principal del servidor donde se configuran y ejecutan las rutas de la API.
  - `package.json`: Contiene las dependencias y scripts de npm.
  - `config/`: Configuración de la base de datos y otras configuraciones de la aplicación.
  - `models/`: Modelos de Sequelize que representan las tablas de la base de datos (`Curso`, `Alumno`, `Inscripcion`).
  - `routes/`: Define las rutas para las diferentes operaciones CRUD (`cursos.js`, `alumnos.js`, `inscripciones.js`).
  - `controllers/`: Controladores que manejan la lógica de negocio para cada ruta.
  - Base de datos: gestion_cursos_alumnos
**crear base de datos **
CREATE DATABASE gestion_cursos_alumnos;
USE gestion_cursos_alumnos;
**Codigo para tablas**
CREATE TABLE cursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  codigo VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE alumnos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  matricula VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE inscripciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  curso_id INT,
  alumno_id INT,
  FOREIGN KEY (curso_id) REFERENCES cursos(id),
  FOREIGN KEY (alumno_id) REFERENCES alumnos(id),
  UNIQUE (curso_id, alumno_id)
);

       - Tablas y componentes:
Alumnos:
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| matricula | varchar(255) | NO   | UNI | NULL    |                |
| nombre    | varchar(255) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+

Cursos:
+--------+--------------+------+-----+---------+----------------+
| Field  | Type         | Null | Key | Default | Extra          |
+--------+--------------+------+-----+---------+----------------+
| id     | int(11)      | NO   | PRI | NULL    | auto_increment |
| codigo | varchar(255) | NO   | UNI | NULL    |                |
| nombre | varchar(255) | NO   |     | NULL    |                |
+--------+--------------+------+-----+---------+----------------+

Inscripcions:
+----------+---------+------+-----+---------+----------------+
| Field    | Type    | Null | Key | Default | Extra          |
+----------+---------+------+-----+---------+----------------+
| id       | int(11) | NO   | PRI | NULL    | auto_increment |
| cursoId  | int(11) | NO   | MUL | NULL    |                |
| alumnoId | int(11) | NO   | MUL | NULL    |                |
+----------+---------+------+-----+---------+----------------+
3 rows in set (0.006 sec)


### 3.2. Frontend

cd gestion-cursos-alumnos
comandos para instalar:
-npm install
-ng add @angular/material
-npm install @angular/forms @angular/common

para iniciar el servidor utilizar:
-ng serve

- **gestion-cursos-alumnos:**
  - `src/`: Contiene todos los archivos fuente de Angular.
  - `app/`: Directorio principal de la aplicación Angular.
    - `app.component.ts`: Componente principal de la aplicación.
    - `app.module.ts`: Módulo principal donde se importan otros módulos y se declaran componentes.
    - `app.routes.ts`: Define las rutas de la aplicación.
    - `services/`: Servicios que manejan la comunicación con el backend (`cursos.service.ts`, `alumnos.service.ts`, `inscripciones.service.ts`).
    - `models/`: Modelos de datos utilizados en el frontend (`curso.model.ts`, `alumno.model.ts`, `inscripcion.model.ts`).
    - `gestion-cursos/`: Componente de gestión de cursos.
    - `gestion-alumnos/`: Componente de gestión de alumnos.
    - `gestion-inscripciones/`: Componente de gestión de inscripciones.

## 4. Instalación y Configuración

### 4.1. Requisitos Previos
- Node.js y npm instalados
- MySQL o MariaDB instalado
- Configuracion en MariaDB para puerto 3307

### 4.2. Instalación
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/bulux-dev




proyecto/
│
├── curso-alumno/                   		# Directorio del backend
│   ├── server.js                   		# Archivo principal del servidor
│   ├── package.json              			# Archivo de configuración de npm con dependencias
│   ├── config/                   			# Configuración del proyecto
│   │   └── database.js         			# Configuración de la base de datos (MySQL/MariaDB)
│   ├── models/                  			# Modelos de la base de datos
│   │   ├── alumno.model.js          		# Modelo de la tabla 'alumnos'
│   │   ├── curso.model.js          		# Modelo de la tabla 'cursos'
│   │   └── inscripcion.model.js   		# Modelo de la tabla 'inscripciones'
│   ├── routes/                    		# Rutas de la API REST
│   │   ├── alumnos.js               		# Rutas para la gestión de alumnos
│   │   ├── cursos.js              		# Rutas para la gestión de cursos
│   │   └── inscripciones.js        		# Rutas para la gestión de inscripciones
│   └── controllers/                 		# Controladores para las operaciones CRUD
│       ├── alumnos.controller.js     		# Lógica de negocio para alumnos
│       ├── cursos.controller.js      		# Lógica de negocio para cursos
│       └── inscripciones.controller.js	# Lógica de negocio para inscripciones
│
├── gestion-cursos-alumnos/             	# Directorio del frontend (Angular)
│   ├── src/
│   │   ├── app/ 	                      	# Código fuente de la aplicación Angular
│   │   │   ├── app.component.ts 	      	# Componente principal de la aplicación
│   │   │   ├── app.module.ts     		# Módulo principal de la aplicación
│   │   │   ├── app.routes.ts          		# Definición de las rutas de la aplicación
│   │   │   ├── app.config.ts          		# Configuración adicional del enrutador
│   │   │   ├── services/              		# Servicios que interactúan con la API REST
│   │   │   │   ├── cursos.service.ts  		# Servicio para gestionar cursos
│   │   │   │   ├── alumnos.service.ts 		# Servicio para gestionar alumnos
│   │   │   │   └── inscripciones.service.ts # Servicio para gestionar inscripciones
│   │   │   ├── models/                # Modelos de datos en el frontend
│   │   │   │   ├── curso.model.ts     # Modelo de datos para 'Curso'
│   │   │   │   ├── alumno.model.ts    # Modelo de datos para 'Alumno'
│   │   │   │   └── inscripcion.model.ts # Modelo de datos para 'Inscripción'
│   │   │   ├── gestion-cursos/        # Componente para la gestión de cursos
│   │   │   │   ├── gestion-cursos.component.ts  # Lógica del componente de cursos
│   │   │   │   └── gestion-cursos.component.html # Plantilla HTML del componente de cursos
│   │   │   ├── gestion-alumnos/       # Componente para la gestión de alumnos
│   │   │   │   ├── gestion-alumnos.component.ts # Lógica del componente de alumnos
│   │   │   │   └── gestion-alumnos.component.html # Plantilla HTML del componente de alumnos
│   │   │   ├── gestion-inscripciones/ # Componente para la gestión de inscripciones
│   │   │   │   ├── gestion-inscripciones.component.ts # Lógica del componente de inscripciones
│   │   │   │   └── gestion-inscripciones.component.html # Plantilla HTML del componente de inscripciones
│   ├── angular.json                   # Configuración del proyecto Angular
│   ├── package.json                   # Archivo de configuración de npm para el frontend
│   └── README.txt                     # Documentación del proyecto
│
└── README.txt                         # Archivo de documentación general del proyecto


