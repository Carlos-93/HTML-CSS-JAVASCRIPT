function abrirFormularioBasico() {
    window.location.assign("FormularioBasico.html");
}

function abrirFormularioRadioButtons() {
    window.location.assign("FormularioRadioButtons.html");
}

function abrirFormularioCheckboxes() {
    window.location.assign("FormularioCheckboxes.html");
}

function abrirFormularioDeAlumnos() {
    window.open("FormularioDeAlumnos1.html");
}

function enviarDatos1() {    
    var nombre = document.getElementById("nombre").value;
    var matricula = document.getElementById("matricula").value;
    var direccion = document.getElementById("direccion").value;
    var población = document.getElementById("población").value;
    var telefono = document.getElementById("telefono").value;
    var sex = "";

    if(document.getElementById("masculino").checked){
        sex = document.getElementById("masculino").value;
    }
    else if(document.getElementById("femenino").checked){
        sex = document.getElementById("femenino").value;
    }

    alert("Se han enviado los siguientes datos del formulario (1):\n\n" 
    +"Nombre completo del alumno: " + nombre +"\n" 
    + "Número de la matrícula: " + matricula +"\n" 
    + "Dirección: " + direccion +"\n" 
    + "Población: " + población +"\n" 
    + "Nº de teléfono: " + telefono +"\n" 
    + "Género: " + sex + "\n");

    document.getElementById("nombre").value = '';
    document.getElementById("matricula").value = '';
    document.getElementById("direccion").value = '';
    document.getElementById("población").value = '';
    document.getElementById("telefono").value = '';
    document.getElementById("masculino").checked = false;
    document.getElementById("femenino").checked = false;
}

function enviarDatos2() {    
    var nacimiento = document.getElementById("nacimiento").value;
    var curso = document.getElementById("curso").value;
    var ingles = "";
    var frances = "";    
    var deporte = "";
    var astronomia = "";
    var historia = "";
    var programacion = "";    
    var redes = "";
    var turn = "";

    if(document.getElementById("ingles").checked){
        ingles = document.getElementById("ingles").value;
    }
    if(document.getElementById("frances").checked){
        frances = document.getElementById("frances").value;
    }
    if(document.getElementById("deporte").checked){
        deporte = document.getElementById("deporte").value;
    }
    if(document.getElementById("astronomia").checked){
        astronomia = document.getElementById("astronomia").value;
    }
    if(document.getElementById("historia").checked){
        historia = document.getElementById("historia").value;
    }
    if(document.getElementById("programacion").checked){
        programacion = document.getElementById("programacion").value;
    }
    if(document.getElementById("redes").checked){
        redes = document.getElementById("redes").value;
    }
    if(document.getElementById("mañana").checked){
        turn = document.getElementById("mañana").value;
    }
    else if(document.getElementById("tarde").checked){
        turn = document.getElementById("tarde").value;
    }
    else if(document.getElementById("noche").checked){
        turn = document.getElementById("noche").value;
    }

    alert("Se han enviado los siguientes datos del formulario (2):\n\n" 
    +"Fecha de nacimiento: " + nacimiento +"\n" 
    + "Curso: " + curso +"\n" 
    + "Materia optativa 1: " + ingles +"\n"
    + "Materia optativa 2: " + frances +"\n"
    + "Materia optativa 3: " + deporte +"\n"
    + "Materia optativa 4: " + astronomia +"\n"
    + "Materia optativa 5: " + historia +"\n"
    + "Materia optativa 6: " + programacion +"\n"
    + "Materia optativa 7: " + redes +"\n" 
    + "Turno: " + turn +"\n");

    document.getElementById("nacimiento").value = '';
    document.getElementById("curso").value = '';
    document.getElementById("ingles").checked = false;
    document.getElementById("frances").checked = false;
    document.getElementById("deporte").checked = false;
    document.getElementById("astronomia").checked = false;
    document.getElementById("historia").checked = false;
    document.getElementById("programacion").checked = false;
    document.getElementById("redes").checked = false;
    document.getElementById("mañana").checked = false;
    document.getElementById("tarde").checked = false;
    document.getElementById("noche").checked = false;
}

function limpiarDatos1() {
    document.getElementById("nombre").value = '';
    document.getElementById("matricula").value = '';
    document.getElementById("direccion").value = '';
    document.getElementById("población").value = '';
    document.getElementById("telefono").value = '';
    document.getElementById("masculino").checked = false;
    document.getElementById("femenino").checked = false;
}

function limpiarDatos2() {
    document.getElementById("nacimiento").value = '';
    document.getElementById("curso").value = '';
    document.getElementById("ingles").checked = false;
    document.getElementById("frances").checked = false;
    document.getElementById("deporte").checked = false;
    document.getElementById("astronomia").checked = false;
    document.getElementById("historia").checked = false;
    document.getElementById("programacion").checked = false;
    document.getElementById("redes").checked = false;
    document.getElementById("mañana").checked = false;
    document.getElementById("tarde").checked = false;
    document.getElementById("noche").checked = false;
}

function cerrarVentana1() {
    window.close("FormularioDeAlumnos1.html");
}

function cerrarVentana2() {
    window.close("FormularioDeAlumnos2.html");
}

function nextFormulario() {
    window.location.assign("FormularioDeAlumnos2.html");
}

function beforeFormulario() {
    window.location.assign("FormularioDeAlumnos1.html");
}