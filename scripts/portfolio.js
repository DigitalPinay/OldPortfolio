$( document ).ready(function() {

    //select modal event
    var modalList = document.querySelectorAll('.modal');
    var modal = document.getElementById('openColorGame');
    var modalInterview = document.getElementById('modalInterview');
    var interviewVideo = document.getElementById('interview');

    //Get open mdodal button 
    var modalBtn = document.getElementById('modalBtn');
    var interviewBtn = document.getElementById('openInterview');

    // get close button
    var closeBtn = document.getElementById('closeBtn');
    var interviewClose = document.getElementById('closeInterview');


    //open modal
    modalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    interviewBtn.addEventListener('click', function(){
        modalInterview.style.display = 'block';
        // console.log('open interview')
    })


    //close modal
    closeBtn.addEventListener('click', function(){
        modal.style.display = 'none';
    });

    interviewClose.addEventListener('click', function(){
        modalInterview.style.display = 'none';
        interviewVideo.pause();
        interviewVideo.currentTime = 0;
    })

    //close modal clicking on window.
    window.addEventListener('click', function (e){
        if (e.target == modal){
            modal.style.display = 'none';
        } 
        else if (e.target == modalInterview) {
            modalInterview.style.display = 'none';
            interviewVideo.pause();
            interviewVideo.currentTime = 0;
        }
        
    });


    console.log(modalList);


   


    

    


});

