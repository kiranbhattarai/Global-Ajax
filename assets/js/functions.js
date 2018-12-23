    $('form.ajax').on('submit',function () {
        
        var that = $(this),         //$this is a reference to the calling object of forms with class .ajax
        url = that.attr('action'),  //represents the action specified on the form
        type = that.attr('method'), //reperesents the method specified on the form
        
        data = [];                  //creating an array to store the values

        that.find('[name]').each(function(index,value){  //find() function finds all the value with the name attribute and each() function loops through all the inputs files that has name attribure
            var that = $(this),         //$this is a reference to the calling object of forms input name attr
            name = that.attr('name'),  //assigning name of the input field to a variable name
            value = that.val();        //assigning the value input filed to a variable value
            data[name] = value;        //assigning the respective name value pair
        });

      //  console.log(data);

    if(data['fname']=='' || data['lname']==''){   //checking if the fields are empty or not
          alert('Please fill all the fields');
    }
    else{
        $.ajax({                //Submitting the ajax request
            url: url,
            type: type,
            data: data,
            success: function(response){
                console.log(response);
            }

        });
    }
        return false;  
});
