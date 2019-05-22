'use strict'

var request = new XMLHttpRequest();
request.onload = function(){ 
    if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    console.log('data',data);
  } else {
  }
};
request.onerror = function() {
};


let json = request.open('GET', './settings.json', true);

request.send();

var title = new Vue({
    el: '#title',
    data: {
        'message': '김 호진'
    },
    created: function() {
        
        console.log('aa');
    }
});

var side = new Vue({
    el: '#side'
});

var content = new Vue({
    el: '#content'
});


