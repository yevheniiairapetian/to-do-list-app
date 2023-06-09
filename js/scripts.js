$('body').on('load', checkEdits());
function checkEdits() {

  //find out if the user has previously saved edits
  if (localStorage.userEdits != null)
    $(".list-title").html(localStorage.userEdits);
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// $( function() {
//   $(document).tooltip();
// } );
// $( function() {
//   $( document ).tooltip();
// } );
//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })


// let sweepSound = new Audio("/assets/sweep.wav");

//       $('.sweep').on('click', function(){
//         sweepSound.play();
//       })

function add() {
  let row = $('.row');
  let div = $("<div class='new-list col-lg-4 col-sm-12 col-md-6 mt-5 text-center'></div>");
  row.append(div);
  let title = $("<h4 class='list-title'></h4>");
  title.text('New List');
  title.attr('contenteditable', "true");
  div.append(title);
  let updateEdits = $('<p class="update">Edit the title and click to save for the next time</p>');
  div.append(updateEdits);
  //  let counter = 1;

  //  let inputValue = $("#input").val();


  let form = $('<br><form></form>');
  div.append(form);

  let input = $('<input type="text" class="input-text" tabindex="1" placeholder="Feed the cat, rule the world"/>');
  form.append(input);
  let btnClearInput = $('<div class="clear-input button" tabindex="1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Click to clear the input field"><span class="material-symbols-outlined">mop</span></div>');
  div.append(btnClearInput);
  let ol = $('<ol></ol>');

  div.append(ol);



  let btnNewToDo = $('<div class="button button-add" tabindex="3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Click to add the new list item">Add To-do</div>');
  div.append(btnNewToDo);
// Add a submit event listener to the form
form.on('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting normally
  newItem(); 
  });
let btnClearLi = $('<div class="clear-ul button" tabindex="2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Click to delete all to-dos"><span class="material-symbols-outlined">delete</span></div>');
  div.append(btnClearLi);

  let saveEdits = $('<br><br><input type="button" tabindex="5" class="save-edits" value="Save My Edits" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Click to save your edits" onclick="saveEdits()"/>');
  div.append(saveEdits);

  let crossOutButtonList = $("<crossOutButtonList></crossOutButtonList>");
  crossOutButtonList.append(document.createTextNode("X"));
  crossOutButtonList.attr('title', 'Click to delete list');
  $(div).append(crossOutButtonList);

  ol.on('mousedown', function (event) {
    selectListItems(event);
  })

  function selectListItems(event) {
    if (event.ctrlKey) {
      ol.text('');
      
    }
  }
  //  ol.on("taphold", function(event){
  //   selectListItems(event);
  //  });

 
  

  btnClearInput.on('click', clearInput);
  function clearInput() {


    input.val('');
  }



  btnNewToDo.on('click', newItem);
  function newItem() {

    let li = $("<li></li>");
    let htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
    let inputValue = input.val().replace(htmlRegexG, '');
    if (inputValue === '') {
      $('.modal').show(600);
     
    
    } else {

      li.append(inputValue);

      ol.append(li);
      ol.sortable();



      li.on("dblclick", crossOut);
      li.on("touchend", crossOut);
    }
    function crossOut() {
      li.toggleClass("strike");
    }

     
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    crossOutButton.attr('title', 'Click to delete to-do');
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    
    btnClearLi.on('click', function () {
      ol.text('');
    })
    


    function deleteListItem() {
      li.addClass("delete")
    }
    
    
  }
  
  crossOutButtonList.on("click", deleteList);
  function deleteList() {
    $(div).addClass("delete")
  }
  $('.modal').on('click', function(){
        
    $('.modal').hide(700);
})
}


function saveEdits() {

  //get the edited element content
  var userVersion = $('.list-title').html();

  //save the content to local storage
  localStorage.userEdits = userVersion;

  //write a confirmation to the user
  $(".update").text("Edits saved!");

}