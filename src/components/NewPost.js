import React, { Component } from "react"
import axios from "axios"

class NewPost extends Component {
  state = {
    title: "",
    url: "",
    userId: "03"
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const post = {
      title: this.state.title,
      url: this.state.url,
      userId: this.state.userId
    }

    axios.post(`http://localhost:3001/post`, { post }).then(res => {
      console.log(res)
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Tiítulo del Post
            <input type="text" name="title" onChange={this.handleChange} />
            Link al
            <input type="text" name="url" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default NewPost
