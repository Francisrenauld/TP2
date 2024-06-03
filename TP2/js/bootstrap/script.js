'use strict';
/*var div = document.getElementById('notes')
div.innerHTML += '<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 border-note-clear">lksfdnknksfndfd</div>'*/

const form = document.getElementById('form')
let array = document.querySelectorAll("li")
form.addEventListener("submit", createNote);

function createNote(e) {
    
    if (validate()) {
        let note = document.getElementById('createNote').value
        var div = document.getElementById('notes')
        div.innerHTML += '<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 border-note-clear">'+ note +'</div>'
        e.preventDefault()
    }
    e.preventDefault()

}

function validate() {

    let validation = true
    
    let text = document.getElementById('createNote').value
    let title = document.getElementById('title').value
    if (title == '') {
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

