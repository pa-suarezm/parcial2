import React from 'react';
import * as d3 from 'd3';
import {FormattedMessage} from 'react-intl';

class Graph extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        this.drawChart(this.state.data);
    }

    drawChart(data) {
        const canvas = d3.select(this.refs.canvas);
        //Graph code
    }

    render(){
        return(
            <div>
                <div ref="canvas"></div>
                <h3><FormattedMessage id="Graph-title"/></h3>
            </div>
        );
    }

}

export default Graph;