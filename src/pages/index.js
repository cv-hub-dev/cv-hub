import * as React from "react"
import Logo from "../assets/logo.svg";
import Button from '../components/Button/Button';
import './index.scss'

const IndexPage = () => {
  return (
    <div className="container">
      <main className="main">
        <Logo />
        <h1 className="title">Create professional resume in minutes</h1>
        <Button to="/personal">Start new</Button>
      </main>
    </div>
  )
}


export default IndexPage
