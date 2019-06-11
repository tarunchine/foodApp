import React, { Component } from "react";
import "./Loader.css";

export default class Loader extends Component {
    render() {
        return (
            <div className='loader'>
                <p>
                    <img
                        src='https://www.hotelnumberfour.com/wp-content/uploads/2017/09/loading.gif'
                        alt='loading'
                    />
                </p>
            </div>
        );
    }
}
