import React from 'react';
import * as d3 from 'd3';
import {FormattedMessage} from 'react-intl';

class Graph extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(newProps){
        this.drawChart(newProps.movies);
    }

    drawChart(movies) {

        const canvas = d3.select(this.refs.canvas);
        //Graph code

        const width = 800;
        const height = 500;
        const margin = { top:10, left:60, bottom: 40, right: 10};
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top -margin.bottom;

        const svg = canvas.append("svg");
        svg.attr("width", width);
        svg.attr("height", height);

        let graph = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        var maxValue = -Infinity;
        movies.map( d => {if(d.views > maxValue) maxValue = d.views;});

        const y = d3.scaleLinear() 
            .domain([0, maxValue])
            .range([iheight, 0]);

        const x = d3.scaleBand()
        .domain(movies.map(d => d.id)) 
        .range([0, iwidth])
        .padding(0.1);

        const bars = graph.selectAll("rect").data(movies);

        bars.enter().append("rect")
            .attr("class", "bar")
            .style("fill", "steelblue")
            .attr("x", d => x(d.id))
            .attr("y", d => y(d.views))
            .attr("height", d => iheight - y(d.views))
            .attr("width", x.bandwidth());
        
        graph.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);  
        
        graph.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));

    }

    render(){
        return(
            <div>
                <h3><FormattedMessage id="Graph-title"/></h3>
                <div ref="canvas"></div>
            </div>
        );
    }

}

export default Graph;