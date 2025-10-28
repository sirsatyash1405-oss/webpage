document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if(email && message){
        setTimeout(function(){
            document.getElementById('msg').innerText = "Thank you! I'll respond as soon as possible.";
            document.getElementById('msg').style.display = 'block';
            document.getElementById('form').reset();
        }, 600);
    }
});
