'get script'


/* ZAZNACZENIE WSZYSTKICH CHECKBOXÓW */
var allAgreements = document.getElementById('wszystkie-zgody');


var allChecboxes = document.querySelectorAll('input[type=checkbox]');

/*
//Wersja pierwsza
allAgreements.onchange = function () {
    console.log(this.checked);

    document.getElementById('zgoda-marketingowa-1').checked = this.checked;

    document.getElementById('zgoda-marketingowa-2').checked = this.checked;

    document.getElementById('zgoda-marketingowa-1').disabled = this.checked;

    document.getElementById('zgoda-marketingowa-2').disabled = this.checked;
};
*/

/*
// Wersja druga
allAgreements.onchange = function() {
    console.log(this.checked);

    for(var i = 0; i < allChecboxes.length - 1; i++) {
        allChecboxes[i].checked = this.checked;
        allChecboxes[i].disabled = this.checked;
    }
};
*/


// Wyciągnięcie do osobnej funkcji które byłoby uniwersalne we wszystkich formularzach

function checkboxState(state) {
    for(var i = 0; i < allChecboxes.length - 1; i++) {
        allChecboxes[i].checked = state;
        allChecboxes[i].disabled = state;
    }
};

allAgreements.onchange = function () {
    checkboxState(this.checked);
};

/* WALIDACJA PÓL */
document.getElementById('wyslij').addEventListener('click', validateForm);

function validateForm(event) {
    event.preventDefault();
    
    var textInputs = document.querySelectorAll('input[type=text]');
    
    for (var i = 0; i < textInputs.length; i++) {
        if(textInputs[i].value == '') {
            event.preventDefault();
            
            if (textInputs[i].nextSibling.tagName == 'P'){
                continue;
            }
            
            createAlert(textInputs[i], i); 
        } else if (textInputs[i].nextSibling.tagName == 'P')
        {
            document.getElementById('alert-' + i).remove();
        }
    }
}

/*

// w pełnym wydaniu 
function createAlert() {
    var message = document.createElement('p');
    message.id = 'alert';
    message.innerHTML = 'To pole jest wymagane';
    document.querySelectorAll('input[type=text]')[0].parentNode.insertBefore(message, document.querySelectorAll('input[type=text]')[0].nextSibling);
};
*/

function createAlert(element, id) {
    var message = document.createElement('p');
    message.id = 'alert-' + id;
    message.innerHTML = 'To pole jest wymagane';
    element.parentNode.insertBefore(message, element.nextSibling);
}




