function mostrar()
{
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let notaPromedio;
  let edad;

  let notaMejorAlumnoFis;
  let nombreMejorAlumFis;
  let flagAlumnoFis = 1;

  let nombreAlumnaJoven;
  let edadAlumnaJoven;
  let flagAlumnaJoven = 1;

  let contQuim=0;
  let contSist=0;
  let contFis=0;
  let acumQuim=0;
  let acumSist=0;
  let acumFis=0;
  let porcentajeQuim;
  let porcentajeSist;
  let porcentajeFis;
  let contTotalAlumnos=0;

  let masMateriasCantMaterias;
  let edadMasMaterias;
  let nombreMasMaterias;
  let flagMasMaterias = 1;





  
  for(let i=0 ; i < 500 ; i++){

    nombre=prompt("Ingrese el nombre del alumno: ")

	carrera=prompt("Ingrese carrera: Quimica/Fisica/Sistemas: ").toLowerCase();
	while(carrera != "quimica" && carrera != "fisica" && carrera !="sistemas"){
		carrera=prompt("Error. Ingrese carrera: Quimica/Fisica/Sistemas: ").toLowerCase();
	}
	
	sexo=prompt("Ingrese sexo m/f/nb: ").toLowerCase();
	while(sexo != "m" && sexo != "f" && sexo !="nb"){
		sexo=prompt("Error. Ingrese su sexo: m/f/nb: ").toLowerCase();
	}

	cantidadMaterias=parseInt(prompt("Ingrese cantidad de materias. Máx 5"));
	while(!(cantidadMaterias > 0 && cantidadMaterias < 6 )){
		cantidadMaterias=parseInt(prompt("Error. Ingrese cantidad válida. Máx 5"));
	}

	notaPromedio=parseFloat(prompt("Ingrese su promedio. Entre 0 y 10 "));
	while(!(notaPromedio >= 0 && notaPromedio <= 10 )){
		notaPromedio=parseFloat(prompt("Error. Ingrese su promedio. Entre 0 y 10 "));
	}
	
	edad=parseInt(prompt("Ingrese su edad: "));
	while(!(edad >= 17 && edad <=100)){
		edad=parseInt(prompt("Error. Ingrese una edad válida: "));
	}

	if( carrera == "quimica"){
		acumQuim+=notaPromedio;
		contQuim++;
	}
	else if ( carrera == "sistemas"){
		acumSist+=notaPromedio;
		contSist++;
	}
	else{
		acumFis+=notaPromedio;
		contFis++;
    if (flagAlumnoFis || notaMejorAlumnoFis < notaPromedio){
        notaMejorAlumnoFis = notaPromedio;
        nombreMejorAlumFis = nombre;
        flagAlumnoFis = 0;
    }
		}

    if (sexo=="f"){
        if (flagAlumnaJoven || edadAlumnaJoven > edad ){
            edadAlumnaJoven = edad;
            nombreAlumnaJoven= nombre;
            flagAlumnaJoven = 0;
    }
    }

    if (carrera != "quimica"){
        if (flagMasMaterias || masMateriasCantMaterias < cantidadMaterias){
            masMateriasCantMaterias = cantidadMaterias;
            nombreMasMaterias = nombre;
            edadMasMaterias = edad;
            flagMasMaterias = 0;
        }
    }

    contTotalAlumnos++;


	} // fin for
		

    porcentajeFis= contFis*100/contTotalAlumnos 
    porcentajeQuim= contQuim*100/contTotalAlumnos
    porcentajeSist= contSist*100/contTotalAlumnos

    if (flagAlumnoFis){
        console.log('a.No se ingresaron alumnos de física.');
    } else{
        console.log('a. El nombre del mejor alumno de física es: ' + nombreMejorAlumFis);
    }
    
    if(flagAlumnaJoven){
        console.log('b. No se ingresaron alumnas mujeres');
    } else{
        console.log('b. El nombre de la alumna más joven es: ' + nombreAlumnaJoven);
    }
    
    console.log('c. El porcentaje de alumnos de Física es de  ' + porcentajeFis + '% , el de los alumnos de química ' + porcentajeQuim + '%, y el de los de sistemas es ' + porcentajeSist + '%.');
    
    if(flagMasMaterias){
        console.log('d. Todos los alumnos son de la carrera de química.');
    } else{
        console.log('d. El nombre del alumno que cursa mas materias exceptuando la carrera de química es: ' + nombreMasMaterias + ' y tiene ' + edadMasMaterias + ' años de edad.');
    }
        

		
	} //fin funcion



/* 
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. */
