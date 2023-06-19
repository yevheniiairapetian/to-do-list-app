$('body').on('load', checkEdits());
function checkEdits() {

  //find out if the user has previously saved edits
  if(localStorage.userEdits!=null)
  $(".list-title").html(localStorage.userEdits);
  }
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
function newItem(){
  
    //javascript
    //1. Adding a new item to the list of items: 
       let li = $("<li></li>");
      
       let inputValue = $("#input").val();
      //  $('#input').on('hover', tooltip());
       li.append(inputValue);
       
    
       if (inputValue === '') {
         $('#dialog').dialog();
       } else {
        $('#list').append(li);
        // $('.dropped-to-div').append('#list')
         
       }
    
     //2. Crossing out an item from the list of items:
       function crossOut() {
             li.toggleClass("strike");
         }
         function selectListItems(event) {
          if (event.ctrlKey){
            $('#list').text('');
          // } else {
          //   text = "The Ctrl key was NOT pressed!";
          // }
          // document.getElementById("demo").innerHTML = text;
        }
      }
      

    $('.clear-ul').on('click', function(){
 $('#list').text('');
})

      
        //  li.on('doubletap', crossOut);

         li.on("dblclick", crossOut);
         li.on("touchend", crossOut);
         
        //  li.on('doubletap', crossOut);
      
     //3(i). Adding the delete button "X": 

    let editButton = $("<editButton></editButton>");
         editButton.append(document.createTextNode("+"));
         li.append(editButton);
    
         editButton.on("click", editList);

       let crossOutButton = $("<crossOutButton></crossOutButton>");
         crossOutButton.append(document.createTextNode("X"));
         li.append(crossOutButton);
    
         crossOutButton.on("click", deleteListItem);
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
             li.addClass("delete")
         }
function editList(){
             li.attr('contenteditable', "true")
         }
     // 4. Reordering the items: 
     $('#list').on('mousedown', function(event){
      selectListItems(event);
     })
     $('#list').on("taphold", function(event){
      selectListItems(event);
     });
       $('#list').sortable();
       
    }

    function clearInput(){
      

      $('#input').val('');
    
  }
   
  // let sweepSound = new Audio("/assets/sweep.wav");
      
  //       $('.sweep').on('click', function(){
  //         sweepSound.play();
  //       })
    
    function addList(){
      
    //javascript
    //1. Adding a new item to the list of items: 
       let div = $("<div class='new-list'></div>");
       $('.container').append(div);
       let title = $("<h4 class='list-title'></h4>");
       div.append(title);
       let updateEdits = $('<p class="update">Edit the title and click to save for the next time</p>');
       div.append(updateEdits); 
      //  let counter = 1;
       
      //  let inputValue = $("#input").val();
       title.text('New List');
       title.attr('contenteditable',"true");
       let saveEdits = $('<input type="button" tabindex="5" class="save-edits" value="Save My Edits" data-bs-toggle="tooltip" data-bs-placement="right" title="Click to save your edits" onclick="saveEdits()"/>');
       div.append(saveEdits);
       
       
         
    
      //  if (inputValue === '') {
      //    alert("Please enter your list item!!");
      //  } else {
      //    $('#list').append(li);
      //  }
      
     //2. Crossing out an item from the list of items:
      //  function crossOut() {
      //        title.toggleClass("strike");
      //    }


        //  li.on('doubletap', crossOut);

        //  div.on("dblclick", crossOut);
        //  div.on("touchend", crossOut);
         
        //  li.on('doubletap', crossOut);
      
     //3(i). Adding the delete button "X": 
       let crossOutButton = $("<crossOutButton></crossOutButton>");
         crossOutButton.append(document.createTextNode("X"));
         div.append(crossOutButton);
    
         crossOutButton.on("click", deleteList);
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteList(){
             div.addClass("delete")
         }
     // 4. Reordering the items: 
      //  $('#list').draggable().sortable(); 
    }

    function saveEdits() {

      //get the edited element content
      var userVersion = $('.list-title').html();
      
      //save the content to local storage
      localStorage.userEdits = userVersion;
      
      //write a confirmation to the user
      $(".update").text("Edits saved!");
      
      }
    //Test function for adding 
    // a list item when 
    // pressing enter


    // $('#input').on("keydown", function (e) {
    //   if ((e.keyCode === 13)&&(inputValue!=='')) {

    //     $('#list').append(li);}
    //    else if (inputValue === '') {
    //     alert("Please enter your list item!!");
    //   }
    // })
