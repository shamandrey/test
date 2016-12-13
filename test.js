var list = [                               
"onmessage = function(e) {",
  "var result = '';",
  "for(var i=0;i<1000000;i++){result = result+i;}",
    "postMessage({e:e.data[0]});}"
];

var fanctionBitch = (function(v){
    
    var i = 0;

    return function(event) {
        if(i === 10){
             worker.postMessage([Date.now()]);
             i=0;
        }else{
            i++;
        }
    }
})()

var blob = new Blob(list, {type: 'text/javascript'});

var worker = new Worker(URL.createObjectURL(blob));

worker.onmessage = function(e) {  
  console.log('Message received from worker', Date.now() - e.data['e']);
}

document.querySelector(".ol-unselectable").addEventListener("mousemove", fanctionBitch);
