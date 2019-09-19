// script.js

console.log('connected!')

let circle = d3.selectAll("circle");

circle.style("fill", "steelblue");
circle.attr("r", 30);

circle.attr("cx", function() { return Math.random() * 720; });

let total_agents = 1
const backdrop = document.getElementById('backdrop')

class Agent {
  constructor(x, y) {
    // set initial values
    this.id = total_agents;
    total_agents ++;
    this.x = x;
    this.y = y;
    this.step_size = 100;

    // draw Agent
    backdrop.innerHTML += '<circle cx="' 
                            + this.x 
                            + '" cy="' 
                            + this.y 
                            + '" r="10" id="circle' 
                            + this.id 
                            + '"></circle>';
}
    move(){
        if (Math.random() < 0.5) {this.x = this.x + this.step_size} else {this.x = this.x - this.step_size}
        if (Math.random() < 0.5) {this.y = this.y + this.step_size} else {this.y = this.y - this.step_size}    
        
        console.log('working')
    
        
        
}

}


max = new Agent(100,200)
