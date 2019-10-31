import React, { Component } from "react"
import Posts from "./components/Posts"
import NewPost from "./components/NewPost"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <Posts />
        <NewPost />
      </div>
    )
  }
}

export default App
