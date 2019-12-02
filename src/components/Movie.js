import React from "react";

import {FormattedMessage} from "react-intl";

class Movie extends React.Component{

    constructor(props)
    {
        super(props);
    }

    renderDetails = () => {
        if(!this.props.movie)
            return(<h3><FormattedMessage id="LoadingDetail"/></h3>);
        else{
            return(
                <div id="Movie" className="container-fluid">
                    <div className="row">
                        <img width="100%" src={`${this.props.movie.poster}`} alt={`${this.props.movie.name} poster`}/>
                    </div>
                    <div className="row text-left">
                        <h3>{this.props.movie.name}</h3>
                    </div>
                    <div className="row text-left">
                        <p>{this.props.movie.description}</p>
                    </div>
                    <div className="row text-left">
                        <strong><FormattedMessage id="Cast" />: {this.props.movie.cast}</strong>
                    </div>

                </div>
            );
        }
    };

    render()
    {
        return(
            this.renderDetails()
        );
    }

}

export default Movie;