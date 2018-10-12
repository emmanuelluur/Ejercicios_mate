
function CargaNav() {
    //  barra navegacion
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
}
function CargaSelect() {
    //  selects
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
}
function Generar() {
    //  obtenemos el boton
    let btn = document.querySelector("#genera");
    //  agregamos el evento click 
    btn.addEventListener("click", function () {
        //  obtenemos infor
        let response = "";
        let operacion = "";
        let res =0;
        let op = document.querySelector("#op");
        let tipo = document.querySelector("#tipo");
        let ini = document.querySelector("#ini");
        let fin = document.querySelector("#fin");
        let url = "src/generar.php";  //  URL que recibira y retornara las peticiones
        let request; // variable que se encargara de las peticiones
        //  peticion a servidor
        request = new XMLHttpRequest();  //  creamos nueva request http 
        request.open('POST', url, true);    //  abrimos peticion POST
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');  //  Cabeceras 
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                
                // si se encuentra el archivo y esta todo OK mostramos resultado
                response = JSON.parse(this.responseText);
                switch (response.operador) {
                    case "suma":
                        operacion = 
                        "<div class = 'row'> <div class = 'col s12 m6'> <div class = 'card-panel teal white-text'> <p>"+ response.primero + "    +   " + response.segundo +" = ?</p></div> </div> </div>";
                        
                        res  = response.primero + response.segundo;
                        document.querySelector("#resultados").innerHTML=operacion;
                        document.querySelector("#hidde_resp").innerHTML="<input type = 'hidden' id = 'sys_res' value = "+res+">";
                        document.querySelector("#in_user").innerHTML = "<div class='input-field col s12 m12 l12'><input value='0' id='user_in' type='number' class='validate'></div>";
                        document.querySelector("#btn_hidde").innerHTML="<button type = 'button'  class='btn waves-effect waves-light ' id = 'cons'>Verifica</button >";
                        consulta();
                        break;
                    case "resta":
                    operacion = 
                    "<div class = 'row'> <div class = 'col s12 m6'> <div class = 'card-panel teal white-text'> <p>"+ response.primero + "    -   " + response.segundo +" = ?</p></div> </div> </div>";
                        res  = response.primero - response.segundo;
                        document.querySelector("#resultados").innerHTML=operacion;
                        document.querySelector("#hidde_resp").innerHTML="<input type = 'hidden' id = 'sys_res' value = "+res+">";
                        document.querySelector("#in_user").innerHTML = "<div class='input-field col s12 m12 l12'><input value='0' id='user_in' type='number' class='validate'></div>";
                        document.querySelector("#btn_hidde").innerHTML="<button type = 'button'  class='btn waves-effect waves-light ' id = 'cons'>Verifica</button >";
                        consulta();
                        break;
                }
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

function consulta(){
    btn_consulta = document.querySelector("#cons");
    btn_consulta.addEventListener("click",function(){
        let res = document.querySelector("#sys_res");
        let user = document.querySelector("#user_in");
        if (user.value == res.value){
            alert("Correcto");
        }
        else {
            alert("Incorrecto");
        }
    });
}