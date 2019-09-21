// script.js

console.log('connected!')


const backdrop = document.getElementById('backdrop')
let total_agents = 0
let agents = []
let distances = []
let num_of_agents = 100
let step_size = 1
let neighbourhood = 5


class Agent {
  constructor(x, y) {
    // set initial values
    this.id = total_agents;
    total_agents ++;
    this.x = x;
    this.y = y;
    this.step_size = step_size;
    agents.push(this)
    }

    move(){
        if (Math.random() < 0.5) {this.x = (((this.x + this.step_size) % 500) + 500) % 500} else {this.x = (((this.x - this.step_size) % 500) + 500) % 500}
        if (Math.random() < 0.5) {this.y = (((this.y + this.step_size) % 500) + 500) % 500} else {this.y = (((this.y - this.step_size) % 500) + 500) % 500}    
        this.interact()
    }

    interact(){
        for (let j=0 ; j < agents.length ; j++){ 
        if (distance_between(this.id, j) < neighbourhood ){
            if(this.id==j){}
            else{console.log('do something interactive')}
        }
    }
    }

}

class Environment {
    constructor(width, height) {
        // randomly generate environment rectangle
        this.matrix = []
        this.width = width
        this.height = height

		for (let x = 0; x < this.width; x++){
			let row = []
			for (let y = 0; y < this.height; y++){
				row.push(Math.round(Math.random()*255))
			}
		this.matrix.push(row)
		}


    }


}


function distance_between(m,n){
    let distance_squared = (agents[m].x-agents[n].x)**2 + (agents[m].y-agents[n].y)**2
    let distance = distance_squared**(1/2)
    distances.push(distance)
    return distance
}

function draw(agents){
    // erase Agents
    var circle = d3.selectAll('circle').remove()
    
    // draw newly-positioned Agents
    for (let i=0; i < agents.length; i++){
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

env = new Environment(50,50)

function paint(backdrop, env = Environment){
	for (let x = 0; x < env.width; x++){
			for (let y = 0; y < env.height; y++){
					//draw env.matrix[x][y] pixel
					backdrop.innerHTML += '<rect fill="rgb(0,' + env.matrix[x][y] + ',0)" x="' + x*10 + '" y="' + y*10 + '" width="10" height="10" />'
			}

		}



}


// generate agents
function generate(){
    agents = []
    num_of_agents = Number(document.getElementById('agentnumber').value)
    for (i = 0; i < num_of_agents; i++){
    new Agent(Math.random()*500, Math.random()*500);
    }
    paint(backdrop)
    draw(agents)
}

function iterate(){
        for (i = 0; i < agents.length; i++){
            agents[i].move()
        }
        draw(agents)
 }

generate(num_of_agents)

setInterval(iterate, 1)
