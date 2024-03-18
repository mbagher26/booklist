import React, { Component } from 'react'
import { FaBookOpen } from "react-icons/fa";
import "./Header.css"

export default class Header extends Component {
    render() {
        return (
            <h1 className="display-4 text-center">
                <i className="fas fa-book-open text-warning">
                <FaBookOpen/>
                </i> React Js
                <span className="text-warning">Book</span>List
            </h1>
        )
    }
}
