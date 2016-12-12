var list = [                               
"onmessage = function(e) {",
  "var result = '';",
  "for(var i=0;i<1000000;i++){result = result+i;}",
    "postMessage([e]);}"
];

var blob = new Blob(list, {type: 'application/javascript'});

var worker = new Worker(URL.createObjectURL(blob));


worker.onmessage = function(e) {  
  console.log('Message received from worker',e);
}

document.body.addEventListener("mouseover", function( event ) {
    worker.postMessage([event.clientX,event.clientY]);
});
