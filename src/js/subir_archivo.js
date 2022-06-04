// cloudinary:
const cloudPreset = "by62jtgf";
const cloudUrl = "https://api.cloudinary.com/v1_1/dp5ghb61b/upload";

const body = document.body;
let inputFile;
let imgFoto;


const crearHtml = () => {
    const html = `
    <h1 class="mt-5">Subir archivos</h1>
    <hr>
    <label>Selecciona una fotografía</label>

    <input type="file" accept="image/png, image/jpej"/>
    <br>
    <img id="foto" class="img-thumbnail" src=""/>
    `;
    const div = document.createElement("div");
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector("input");
    imgFoto = document.querySelector("#foto");
};

const subirImagen = async(archivoSubir) => {
    const formData = new FormData();
    formData.append("upload_preset", cloudPreset)
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })
        if (resp.ok) {
            const cloudRes = await resp.json();
            console.log(cloudRes);
            return cloudRes.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        // console.log(file)
        subirImagen(file).then(url => imgFoto.src=url)
    });
};

const init = () => {
    crearHtml();
    eventos();
}

export {
    init
}