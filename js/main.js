$(function(){

  var divs =null;

  var test = document.querySelector('#test');

  console.log( test.classList.item(0) );

$('.photos-board-item').each(function(i){
    $(this).data('initial-index', i);
});

$('.hide-others').on('click', function () {
    if(divs) {
        $(divs).appendTo('.row').each(function(){
            var oldIndex = $(this).data('initial-index');
            $('.photos-board-item').eq(oldIndex).before(this);
            console.log(oldIndex);
        });
        
        divs = null;
    } else {
        divs = $('.css--all-photo').detach();
        console.log(divs);
    }
});

    const num1 = '402';
    const num2 = '500';

    if(num1 == 400 | 500 | 501 | 502) {
        console.log(num1)
    }

});