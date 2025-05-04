const FormBtnSubmit = document.getElementById("meuFormulario");
const NameItem = document.getElementById("name");
const GetLi = document.querySelector(".containerList");
const GetUl = document.querySelector(".checklist");
const GetTrashcan = document.querySelectorAll('#imgTrashcan');

FormBtnSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    AddNew();
});

function AddNew () {
    
    const NewItemInList = NameItem.value;

    const newLi = document.createElement("li");
    newLi.classList.add('containerList');

    const newLabel = document.createElement("label");
    newLabel.classList.add('checkboxLabel');

    const newInput = document.createElement("input");
    newInput.classList.add('checkboxInput');
    newInput.type = 'checkbox'

    const newSpanVisual = document.createElement("span");
    newSpanVisual.classList.add('checkboxVisual');

    const newSpanText = document.createElement("span")
    newSpanText.classList.add('containerSpanList');
    newSpanText.textContent = NewItemInList;


    const newDivImgTrashcan = document.createElement("div");
    const newImgTrashcan = document.createElement("img");
    newImgTrashcan.id = 'imgTrashcan';
    newImgTrashcan.src = "../assets/icons/trashcan.svg";

    newLabel.append(newInput, newSpanVisual, newSpanText);
    newDivImgTrashcan.appendChild(newImgTrashcan);

    newLi.appendChild(newLabel);
    newLi.appendChild(newDivImgTrashcan);

    GetUl.appendChild(newLi);

    NameItem.value = '';
};

GetUl.addEventListener("click", function(event) {
    if (event.target && event.target.id === 'imgTrashcan') {
        event.preventDefault();
        RemoveItem(event.target);
    }
});

function RemoveItem(target) {
    const liToRemove = target.closest('li');
    if (liToRemove) {
        liToRemove.remove();
        ShowToast();
    }
}

function ShowToast(message = "O item foi removido da lista!") {
    const toast = document.querySelector('.toast');
    const toastMessage = toast.querySelector('.spanToast');
    
    // Atualiza a mensagem
    if (toastMessage && message) {
        toastMessage.textContent = message;
    }
    
    // Mostra o toast com animação
    toast.classList.add('show');
    
    // Esconde após 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}