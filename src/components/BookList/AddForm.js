import React, { Component } from 'react'
import Book from './Book'

export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }

    }

    submitHandler (event) {
        event.preventDefault();
        
    }

    render() {
        return (
            <>
                <form id="book-form" autocomplete="off" onChange={(event)=>this.submitHandler(event)}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={this.state.title} onChange={event => this.titleHandler(event)} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" value={this.state.author} onChange={event => this.authorHandler(event)} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="text" id="year" value={this.state.year} onChange={event => this.yearHandler(event)} className="form-control" />
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-warning btn-block add-btn" />
                </form>
                <table className="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        <Book />
                    </tbody>
                </table>


            </>
        )
    }
}