const urlUsuarios = "https://reqres.in/api/users?page=2";

const obtenerUsuarios = async () => {
    const resp = await fetch(urlUsuarios);
    const { data: usuarios } = await resp.json();

    return usuarios;
};

const body = document.body;
let tbody;
let correlativo = 0;

const crearHtml = () => {
    const html = `
    <h1 class="mt-5">Usuarios</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement("div");
    div.innerHTML = html;
    body.appendChild(div);

    tbody = document.querySelector("tbody");
};

const crearFilaUsuario = (usuario) => {
    correlativo ++;
    const html = `
        <td scope="col"> ${correlativo} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name} ${usuario.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement("tr");
    tr.innerHTML = html;

    tbody.append(tr)
};


const init = async() => {
    crearHtml();
    correlativo = 0;
    (await obtenerUsuarios()).forEach(usuario => crearFilaUsuario(usuario));
}

export {
    init
}