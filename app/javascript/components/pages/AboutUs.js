import React from 'react'
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdArticle } from 'react-icons/md'

const AboutUs = () => {
  return (
    <div>
        <h1>Who We Are</h1>
        <div className='three-column-container aboutus'>
            <div className='three-column-item aboutus'>
                <Card
                style={{
                    width: '16rem'
                }}
                >
                    <img
                        alt="Kelly"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5" className='aboutus-name'>
                            Kelly
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Project Manager/Product Manager
                        </CardSubtitle>
                        <CardText className='aboutus-description'>
                        My name is Kelly, and I’m a full-stack web developer currently based in San Diego, CA. Although I’m currently in San Diego, my roots are in Oakland, CA in the Bay Area! I am a true homebody, so I enjoy staying at home, watching K-dramas, and building things from Pokémon nanoblocks to IKEA furniture to websites! My journey as a software developer has just begun, so join me  and see what I can do!
                        </CardText>
                            <a className='aboutus-icons' href="https://github.com/kellychan56" target="_blank"><AiFillGithub/></a>
                            <a href="https://www.linkedin.com/in/kellychan56/" target="_blank"><AiFillLinkedin/></a>
                            <a href="https://kellychan56.netlify.app/" target="_blank"><MdArticle/></a>
                    </CardBody>
                </Card>
            </div>
            <div className='three-column-item aboutus'>
                <Card
                style={{
                    width: '16rem'
                }}
                >
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5" className='aboutus-name'>
                            Elijah
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Tech Lead
                        </CardSubtitle>
                        <CardText className='aboutus-description'>
                        I’m a web developer with a focus on Full Stack applications, but still exploring other technologies that catch my interest! Currently looking into API’s and backend frameworks. If you’re looking for a developer to add to your team, I’d love to hear from you!
                        </CardText>
                            <a href="https://github.com/ElijahBcodes" target="_blank"><AiFillGithub/></a>
                            <a href="https://www.linkedin.com/in/elijah-barreto/" target="_blank"><AiFillLinkedin/></a>
                            <a href="https://www.elibarreto.com/" target="_blank"><MdArticle/></a>
                    </CardBody>
                </Card>
            </div>
            <div className='three-column-item aboutus'>
                <Card
                style={{
                    width: '16rem'
                }}
                >
                    <img
                        alt="Holden"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5" className='aboutus-name'>
                            Holden
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Design Lead
                        </CardSubtitle>
                        <CardText className='aboutus-description'>
                            Hey! My name is Holden Prine and I'm a full stack developer based out of San Diego, California with a focus in backend and UX. I'm San Diego born and raised and when I'm not writing code I make music, go on hikes, and play unhealthy amounts of Overwatch and Monster Hunter. I'm new in my journey as a developer but love a challenge so if you're looking for a motivated developer feel free to connect!
                        </CardText>
                            <a href="https://github.com/holdenprine" target="_blank"><AiFillGithub/></a>
                            <a href="https://www.linkedin.com/in/holdenprine/" target="_blank"><AiFillLinkedin/></a>
                            <a href="https://holdenprines-portfolio.netlify.app/" target="_blank"><MdArticle/></a>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
