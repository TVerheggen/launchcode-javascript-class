
        $(document).ready(function(){
            $('form').submit(submitFunc);

             // clear input field
            $('#inputfield').val('');

             var deleteGlyph = "<button type='button' class='btn btn-default delete'><span class='glyphicon glyphicon-remove-circle' class='delete'></span></button>";
             var urgentGlyph = "<button type='button' class='btn btn-default fire'><span class='glyphicon glyphicon-fire hot'></span></button>";

            // var deleteBtn = "<button id='delete'>X</button>";
            // var urgentBtn = "<button id='urgent'>Urgent</button>";

            /**................................
            *
            * HELPER FUNCTIONS
            *
            *................................*/

            // move this to done list, keep deleteGlyph functionality
            var doneFunc = function() {
                var text = this; 

                //remove urgent styles
                //$('span').removeClass('urgent');

                //remove affects on hover
                $('span').removeClass('hover');

                //append item to done list
                $("#list-done").append(text);

                //maintain delete glyph functionality
                $('.delete', text).click(deleteFunc);
                
                // remove hot button and glyph
                $('.hot', text).remove();
                $('.fire', text).remove();

                //event.stopPropagation();
            };
            
            //delete list item using delete button. stops bubbling to 'doneFunc' so item is not also moved to done list 
            var deleteFunc = function(event) {
                console.log("deleteFunc");
                var item = this.parentNode;
                item.remove();
                event.stopPropagation();
            };

            // toggles text red or black using fire button
            var urgentFunc = function(event) {
                console.log('urgent');
                $(this).parent('li').toggleClass('urgent');
                event.stopPropagation();
            };


            /**...............................
            *
            * MAIN
            *
            *................................*/


            // save user input when button is clicked - build to do list
            var submitFunc = $('#btn1').click(function(event){
                
                //console.log("clicked");
                var inputtext = $('#inputfield').val();
                
                // build a node element <li> 
                var newItem = $("<li> " + "<span class='hover'>" + inputtext + "</span>" + deleteGlyph + urgentGlyph + "</li>");
                
                // when the list item is clicked, it is moved to the done list
                newItem.click(doneFunc);

                // click the delete button to delete list item
                $('.delete', newItem).click(deleteFunc);

                // click fire button to make text urgent 
                $('.fire', newItem).click(urgentFunc);

                // append new node to the list 'list'
                $('#list').append(newItem);

                // clear input field
                $('#inputfield').val('');

                return false;

            });  // close submitFunc()

        }); // close document.ready()





   