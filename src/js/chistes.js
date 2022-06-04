const jokeUrl = "https://api.chucknorris.io/jokes/random";

const obtenerChiste = async () => {
    try {
        const respuesta = await fetch(jokeUrl);
        if (!respuesta.ok) throw "No se pudo realizar la petición";
        const { icon_url, id, value } = await respuesta.json();
        return { icon_url, id, value };
    } catch (error) {
        throw error;
    }
};

const body = document.body;
let btnOtro, olList;

const crearChisteHtml = () => {
    const html = `
    <h1>Chistes</h1>
    <hr>
    <button class="btn btn-primary" id='boton'>Otro chiste</button>
    <ol class="mt-2 list-group"></ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
}

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('#boton');

    btnOtro.addEventListener('click', async() => {
        btnOtro.disabled = true;
        dibujerChiste(await obtenerChiste())
        btnOtro.disabled = false;
    })
}

const dibujerChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`
    olItem.classList.add('list-group-item')
    olList.append(olItem);
}

const init = () => {
    crearChisteHtml();
    eventos();
}

export {
    init
}