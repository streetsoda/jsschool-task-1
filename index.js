var params = {
    lines: [
                {
                background:'#ffffff',
                updateTime: 250,
                elements: [ {
                                background: '#4f4141',
                            
                                width: 33
                            },
         
                            {
                                background:'#8c3636',
             
                                width: 33
             
                            },
         
                            {
                                background: '#bf2020',
             
                                width: 34
                            },
         
                        ]
         
                },
                {
                background:'#ffffff',
                updateTime: 500,
                elements:[ {
                                background: '#496d7f',
                                
                                width: 30
                            },
         
                            {
                                background:'#5c30b5',
                                
                                width: 20
                            },
         
                            {
                                background: '#5ba814',
             
                                width: 50
                            },
         
                        ]
         
                },
        
            ]
            };

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight/params.lines.length;

function setInLine(Elements, parentLine){
    parentLine.innerHTML='';
    
    Elements.map(function(element, index){
        var newElement = document.createElement('div');
        newElement.setAttribute('style', `background-color: ${randomColor()};width: ${element.width}%;height:100%;`);
        parentLine.appendChild(newElement);
    })
}

function randomColor() {
    
    var r=Math.floor(Math.random() * (256));
    var g=Math.floor(Math.random() * (256));
    var b=Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

params.lines.map(function (line, index) {
    var newElement = document.createElement('div');
    newElement.setAttribute('style', `background-color: ${line.background};width: ${width}px;height: ${height}px;display: flex;`);
    setInterval(()=> setInLine(line.elements, newElement), line.updateTime)
    document.body.appendChild(newElement);
});