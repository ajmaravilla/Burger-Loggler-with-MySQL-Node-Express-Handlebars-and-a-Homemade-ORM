// jQuery functions for DOM, tells what to do when new burger is to devoured
$(document).ready(function() {
    // devour burgers
    $('.devourIt').on('click', function(event) {
      event.preventDefault();
  
      var burgerID = $(this).data('id');
      console.log(burgerID);
  
      var devourState = {
        devoured: true
      };
  
      $.ajax('/burgers/update/' + burgerID, {
        type: 'PUT',
        data: devourState
      }).then(function(data) {
        location.reload();
      });
    });
  
    // create burgers
    $('.orderBurger').on('click', function(event) {
      event.preventDefault();
  
      var burgerID = $(this).data('id');
  
      var orderBurger = {burger_name: $('#orderB').val().trim()};
  
      $.ajax('/burgers/create', {
        type: 'POST',
        data: orderBurger
      }).then(function(data) {
        location.reload();
      });
    });
  
  
  })
  
  // console.log('jquery working')