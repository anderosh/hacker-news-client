import React, { Component } from "react"
import axios from "axios"

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001`).then(res => {
      const posts = res.data
      this.setState({ posts })
    })
  }

  render() {
    return (
      <div>
        <h1>POSTS</h1>
        <ul>
          {this.state.posts.map(posts => (
            <li key={posts._id}>{posts.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Posts
