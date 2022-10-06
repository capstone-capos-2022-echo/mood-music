import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const AboutUs = () => {
  return (
    <div>
        <h1>Who We Are:</h1>
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
            {/* Populate with links to socials */}
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
            {/* Populate with links to socials */}
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
                {/* Populate with links to socials */}
                <a><AiFillGithub/></a>
                <a><AiFillLinkedin/></a>
        </CardBody>
        </Card>
    </div>
  )
}

export default AboutUs