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
        if(this.state.title && this.state.author && this.state.year){
            this.setState({
                books:[{title:this.state.title,author:this.state.author,year:this.state.year,  id:this.state.books.length +1}]
            })
        }else{
            this.setState({
                books:[]
            })
        }
        console.log(this.state.books)
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
                            {console.log(typeof(this.state.books))}
                    </tbody>
                </table>


            </>
        )
    }
}