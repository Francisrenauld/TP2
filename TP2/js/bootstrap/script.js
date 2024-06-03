'use strict';

const form = document.getElementById('form')
let array = document.querySelectorAll("li")
form.addEventListener("submit", createNote);

function createNote(e) {
    
    let colorClass = document.querySelector('input[name = color]:checked').className;

    if (validate()) {
        let note = document.getElementById('createNote').value
        let title = document.getElementById('title').value
        var div = document.getElementById('notes')
        div.innerHTML += '<div id="note-cree" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 border-note-clear '+ colorClass +'">'+'<p style="font-weight: 600;">'+title+'</p>'+'<p>'+ note +'</p>'+'</div>'
        e.preventDefault()
        console.log(colorClass)
    }
    e.preventDefault()
}

function validate() {

    let validation = true
    let text = document.getElementById('createNote').value
    let title = document.getElementById('title').value
    
    if (title.length > 16) {
        array[0].classList.remove('hide')
        validation = false
    }
    else {
        array[0].classList.add('hide')
    }
    if (text == '') {
        array[1].classList.remove('hide')
        validation = false
    }
    else {
        array[1].classList.add('hide')
    }
  return validation
}

