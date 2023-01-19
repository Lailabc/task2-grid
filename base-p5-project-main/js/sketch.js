function setup() {
    createCanvas(800,800)
}
function draw() {

    for(let xrow = 0; xrow < 1; xrow ++ ){
        rect(xrow*800,100,800,100);
        for (let x1=0; x1<5; x1++){
            rect(x1*160,160,160,160);
    }
    }
    
   
}
