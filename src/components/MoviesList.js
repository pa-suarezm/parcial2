import React from "react";

import {FormattedMessage} from "react-intl";
import {FormattedPlural} from "react-intl";
import {FormattedNumber} from "react-intl";
import {FormattedDate} from "react-intl";

import Movie from "./Movie.js";
import Graph from "./Graph.js";

class MoviesList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies: []
        };
    }
    
    chooseURL = () => {
        if(this.props.locale === "es"){
            return "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
        }
        else{
            return "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";
        }
    }

    choosePlural = (budget) => {
        if(budget === 1)
            return "Million";
        else
            return "Millions";
    }

    renderMovies() {
        if(this.state.movies.length === 0)
            return(<tbody><tr><td>Loading...</td></tr></tbody>);
        else
        {
            return(
                <tbody>
                    {this.state.movies.map((e, i) => {
                        return(
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.directedBy}</td>
                            <td>{e.country}</td>
                            <td>{e.budget} <FormattedMessage id={this.choosePlural(e.budget)}><FormattedPlural value={e.budget} one="million" other="millions"/></FormattedMessage></td>
                            <td>
                            <FormattedDate
                                value={e.releaseDate}
                                year='numeric'
                                month='long'
                                day='numeric'
                                weekday='long'
                            />
                            </td>
                            <td><FormattedNumber value={e.views}/></td>
                        </tr>
                        );
                    })}
                </tbody>
            );
        }
    }

    componentDidMount(){
        if (!navigator.onLine) {
            if (localStorage.getItem('movies') === null)
                this.setState({ movies: [] })
            else{
                this.setState({ movies: JSON.parse(localStorage.getItem('movies')) });
            }
        }

        let url = this.chooseURL();
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({movies: data})
                localStorage.setItem('movies', JSON.stringify(data));
            });
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <h1><FormattedMessage id="Title" /></h1>
                </div>
                <div className="row">
                    <div id="moviesList">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th><FormattedMessage id="Name"/></th>
                                    <th><FormattedMessage id="DirectedBy"/></th>
                                    <th><FormattedMessage id="Country"/></th>
                                    <th><FormattedMessage id="Budget" /></th>
                                    <th><FormattedMessage id="Release" /></th>
                                    <th><FormattedMessage id="Views" /></th>
                                </tr>
                            </thead>
                            {this.renderMovies()}
                        </table>
                    </div>
                </div>
                <div className="row">
                    <Graph locale={this.props.locale} movies={this.state.movies} />
                </div>
            </div>
        );

    }

}

export default MoviesList;
