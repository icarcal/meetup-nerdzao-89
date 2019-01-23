
if (window.localStorage) {
    localStorage.clear();
}

const filterInputs = [
    'INPUT',
    'SELECT',
    'TEXTAREA',
];

const getAllFormData = function(event) {
    event.preventDefault();

    const form = document.getElementsByTagName('form');
    const fields = Array.from(form[0])
        .filter(field => filterInputs.includes(field.nodeName));

    const invalidFields = fields.filter((field) => {
        return field.value === '';
    });

    if (invalidFields.length > 0) {
        return alert('Preencha todos os campos para a geração do seu curriculum');
    }

    fields.forEach((field) => {
        localStorage.setItem(field.name, field.value);
    });

    document.getElementById('formulario').submit();
};

document.getElementById('submitButton').addEventListener('click', getAllFormData);
