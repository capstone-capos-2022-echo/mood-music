import React from 'react'
import {Card} from 'reactstrap'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const AboutUs = () => {
  return (
    <div>
        <Card
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src="https://picsum.photos/300/200"
        />
        <CardBody>
            <CardTitle tag="h5">
                Kelly
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Project Manager/Product Manager
            </CardSubtitle>
            <CardText>
                Description goes here
            </CardText>
                <a><AiFillGithub/></a>
                <a><AiFillLinkedin/></a>
        </CardBody>
        </Card>
        <Card
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src="https://picsum.photos/300/200"
        />
        <CardBody>
            <CardTitle tag="h5">
                Elijah
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Project Manager/Product Manager
            </CardSubtitle>
            <CardText>
                Description goes here
            </CardText>
                <a><AiFillGithub/></a>
                <a><AiFillLinkedin/></a>
        </CardBody>
        </Card>
        <Card
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src="https://picsum.photos/300/200"
        />
        <CardBody>
            <CardTitle tag="h5">
                Holden
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Project Manager/Product Manager
            </CardSubtitle>
            <CardText>
                Description goes here
            </CardText>
                <a><AiFillGithub/></a>
                <a><AiFillLinkedin/></a>
        </CardBody>
        </Card>
    </div>
  )
}

export default AboutUs