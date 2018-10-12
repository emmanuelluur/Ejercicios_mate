
document.addEventListener('DOMContentLoaded', function () {
    //  barra navegacion
    var elems = document.querySelectorAll('.sidenav')
    var instances = M.Sidenav.init(elems)
    //  selects
    var elems = document.querySelectorAll('select')
    var instances = M.FormSelect.init(elems)
    //  rango de numeros
});

function Generar(){
    //  obtenemos el boton
    let btn = document.querySelector("#genera")
    //  agregamos el evento click 
    btn.addEventListener("click", function(){
        //  obtenemos infor
        let op = document.querySelector("#op")
        let tipo = document.querySelector("#tipo")
        let ini = document.querySelector("#ini")
        let fin = document.querySelector("#fin")
        let datos = [op.value, tipo.value, ini.value, fin.value]
            
        
        console.log(datos);
        
    });
}

