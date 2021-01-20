import React, { Component } from "react"
import Header from "./Components/Header"
import SearchMovies from "./Components/SearchMovies"

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <SearchMovies />
            </div>
        )
    }
}