
document.addEventListener('DOMContentLoaded', function () {
    //  barra navegacion
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    //  selects
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    //  rango de numeros
});

function Generar() {
    //  obtenemos el boton
    let btn = document.querySelector("#genera");
    //  agregamos el evento click 
    btn.addEventListener("click", function () {
        //  obtenemos infor
        let op = document.querySelector("#op");
        let tipo = document.querySelector("#tipo");
        let ini = document.querySelector("#ini");
        let fin = document.querySelector("#fin");
        let url = "source/generar.php";  //  URL que recibira y retornara las peticiones
        let request; // variable que se encargara de las peticiones
        //  peticion a servidor
        request = new XMLHttpRequest();  //  creamos nueva request http 
        request.open('POST', url, true);    //  abrimos peticion POST
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');  //  Cabeceras 
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // si se encuentra el archivo y esta todo OK mostramos resultado
                console.log(this.responseText);
                
            }
        }
        request.send(
            "operacion=" + op.value +
            "&tipo=" + tipo.value +
            "&inicio=" + ini.value +
            "&fin=" + fin.value +
            "&generar_ope=generar_ope");
    });



}

