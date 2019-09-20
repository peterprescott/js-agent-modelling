// script.js

console.log('connected!')


const backdrop = document.getElementById('backdrop')
let total_agents = 0
let agents = []


class Agent {
  constructor(x, y) {
    // set initial values
    this.id = total_agents;
    total_agents ++;
    this.x = x;
    this.y = y;
    this.step_size = 100;
    agents.push(this)
    }

    move(){
        if (Math.random() < 0.5) {this.x = this.x + this.step_size} else {this.x = this.x - this.step_size}
        if (Math.random() < 0.5) {this.y = this.y + this.step_size} else {this.y = this.y - this.step_size}    
    }



}

class Environment {
    constructor(width, height) {
        // randomly generate environment rectangle
        
    }
}

function draw(agents, environment){
    // draw Agent
    for (i=0; i < agents.length; i++){
        let agent = agents[i];
        backdrop.innerHTML += '<circle cx="' 
                                + agent.x 
                                + '" cy="' 
                                + agent.y 
                                + '" r="10" id="circle' 
                                + agent.id 
                                + '"></circle>';
        }
    }


max = new Agent(100,200)
minnie = new Agent(5,50)
mark = new Agent(500, 100)
draw(agents, 0)
