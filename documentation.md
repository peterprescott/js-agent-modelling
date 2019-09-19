\\ js-agent-modelling

2019.09.19 -- 15.14
I want to be able to display my agent-based modelling in a web browser. I've done the code in Python, but rather than setting up a Python backend that passes the data through to Javascript in the frontend, it occurs to me that perhaps it would just be simpler to rewrite the agent models in Javascript...

Perhaps by *starting* by using d3.js to get the graphical display working. Lest we completely waste our time.

We need:
1. **Circles** (for the agents): this looks like it's explained [here](https://bost.ocks.org/mike/circles/).
2. A **grid** (for the environment): [explained here](https://bl.ocks.org/cagrimmett/07f8c8daea00946b9e704e3efcbd5739).

