import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const JumbotBootstrap = (props) => {
  return (
    <Jumbotron className="m-0">
      <h1 className="display-3 text-center">Hello, world!</h1>
      <p className="leads text-center">Здраствуйте, меня зовут Константин и я начинающий веб-разработчик. На этом сайте я буду выкладовать свои заметки, а также пройденные материалы. </p>
    </Jumbotron>
  )
}

export default JumbotBootstrap
