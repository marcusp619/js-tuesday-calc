//Getting keys from the HTML

var keys = document.querySelectorAll('#calculator');

//ONCLICK EVENTS
for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
//Button value and input
        var input = document.querySelector(.screen);
        var inputValue = input.innerHTML;
        var btnValue = this.innerHTML;

//Appending
        if (btnValue){
            input.innerHTML += btnValue;
        }
        if (btnValue == '=') {
            var equation = inputValue;
        }
        if (btnValue == 'c') {
            input.innerHTML = '';
        } else {
            input.innerHTML += btnValue;
        }


    }
}
