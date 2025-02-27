// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = [];


function agregarAmigo()
{
    let nombreAmigo = document.getElementById("amigo").value;

    if (!nombreAmigo )
    {
        alert("Favor de introducir un nombre valido");
    }
    else{
        alert("El nombre ingresado es "+nombreAmigo);
        
        listaAmigoSecreto.push(nombreAmigo);
        verListaAmigos();
        limpiarCaja();
    }
}

function verListaAmigos()
{
    let listaAmigos =limpiarListaHTML("listaAmigos");
    listaAmigoSecreto.forEach((amigo, index) => {
        console.log('Indice: ' + index + ' Valor: ' + amigo);
        listaAmigos = agregarItemLista(listaAmigos, "li", amigo);
    });
}

function agregarItemLista(Lista, etiqueta, texto)
{
    let item = document.createElement(etiqueta);
    item.textContent = texto;
    return listaAmigos.appendChild(item);

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}



function sortearAmigo()
{
    let listaResultado =limpiarListaHTML("resultado");

    if (listaAmigoSecreto.length > 0)
    {
        let sortearPosicion = Math.floor(Math.random()*(listaAmigoSecreto.length));
        console.log("La posicion del amigo secreto es "+ sortearPosicion);
        listaResultado = agregarItemLista(listaResultado, "li",`El amigo secreto es: ${listaAmigoSecreto[sortearPosicion]}`);
    }
    else
    {    
        listaResultado = agregarItemLista(listaResultado, "li","No hay nombres para generar al amigo secreto");
    }

}

function limpiarListaHTML(id)
{
    let lista =document.getElementById(id);
    return    lista.innerHTML= "";
}