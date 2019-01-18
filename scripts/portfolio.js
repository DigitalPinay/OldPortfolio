$( document ).ready(function() {

    //get modal event
    var modal = document.getElementById('openColorGame');
    // $( "#modalBtn" ).click(function(){
    //      $("openColorGame").fadeIn(1000);    
    // }

    //Get open mdodal button 

    var modalBtn = document.getElementById('modalBtn');

    // get close button
    var closeBtn = document.getElementById('closeBtn');

    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', clickOutside);

    function openModal() {
        modal.style.display = 'block';
        console.log("Open Sesame");
    }


    function closeModal(){
        modal.style.display = 'none';
        console.log("close Sesame");
    }

    function clickOutside(e){
        if (e.target == modal){
            modal.style.display = 'none';
        }
        
    }

    $('#colorGameInsert').load("colorGame/colorGameInsert.html");


});

