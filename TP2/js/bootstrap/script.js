'use strict';
/*var div = document.getElementById('notes')
div.innerHTML += '<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 border-note-clear">lksfdnknksfndfd</div>'*/

const form = document.getElementById('form')

form.addEventListener("submit", createNote);

function createNote(e) {
    
    let note = document.getElementById('createNote').value


    var div = document.getElementById('notes')
    div.innerHTML += '<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 border-note-clear">'+ note +'</div>'
    e.preventDefault()
}

