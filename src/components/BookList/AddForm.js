import React, { Component } from 'react'
import Book from './Book'
import './AddForm.css'
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
        let {title, author, year} = this.state

        if(title && author && year){
            let newBook = {
                id: this.state.books.length + 1,
                title,
                author,
                year
            }
            this.setState({
                books:[...this.state.books, newBook]
            })
            this.setState({
                title: '',
                author: '',
                year: ''
            })
        }
    }

    titleHandler(event){
        this.setState({
            title: event.target.value
        })
    }

    authorHandler(event){
        this.setState({
            author: event.target.value
        })
    }

    yearHandler(event){
        this.setState({
            year: event.target.value
        })
    }

    render() {
        return (
            <>
                <form id="book-form" autoComplete="off" onClick={(event)=>this.submitHandler(event)} >
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={this.state.title} onChange={(event) => this.titleHandler(event)} className="form-control" />
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
                        {this.state.books && this.state.books.map(book => (
                            <Book {...book} key={book.id}/>
                            ))}
                    </tbody>
                </table>


            </>
        )
    }
}