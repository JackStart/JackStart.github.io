document.getElementById('btn1').addEventListener('click', loading);

function loading() {
    var x = new XMLHttpRequest();
    x.open("GET", "https://www.apiopen.top/femaleNameApi?page=1", true);
    x.onload = function () {
        var data = JSON.parse(this.responseText);
        console.log(data.data);
        var output = '';
        for (var i in data.data) {
            output +=
                
                    '<ul>'+
                        '<li>'+data.data[i].femalename+'</li>'+
                    '</ul>';
                ;
        }
        document.getElementById('data').innerHTML = output;
    }
    x.send();
}