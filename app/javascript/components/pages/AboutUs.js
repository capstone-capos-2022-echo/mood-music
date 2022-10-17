import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdArticle } from 'react-icons/md'

const AboutUs = () => {
  return (
    <div>
        <h2>The dream team behind it all...</h2>
        <div className='three-column-container'>
            <div className='three-column-item'>
                <Card
                style={{
                    width: '18rem'
                }}
                >
                    <img
                        className="about-us-images"
                        alt="Kelly"
                        src="../imageassets/kelly-photo.jpg"
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
                            <div className='aboutus-icons'>
                                <span className='aboutus-icons-bg'>
                                    <a href="https://github.com/kellychan56" target="_blank">
                                        <AiFillGithub style={{width: '2em', height: '2em'}} />
                                    </a>
                                </span>
                                <span className='aboutus-icons-bg'>
                                    <a href="https://www.linkedin.com/in/kellychan56/" target="_blank"><AiFillLinkedin style={{width: "2em", height: "2em"}}/></a>
                                </span>
                                <span className='aboutus-icons-bg'>
                                    <a href="https://kellychan56.netlify.app/" target="_blank"><MdArticle style={{width: "2em", height: "2em"}}/></a>
                                </span>
                            </div>
                    </CardBody>
                </Card>
            </div>
            <div className='three-column-item'>
                <Card
                style={{
                    width: '18rem'
                }}
                >
                    <img
                        className="about-us-images"
                        alt="Sample"
                        src="../imageassets/elijah-photo.jpeg"
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
                        I’m a Web Developer with a focus on full stack applications, but still exploring  technologies that catch my interest! Currently working on building projects with API’s and backend frameworks. I enjoy all types of music, especially live. My hobbies include; surfing, hiking, rock climbing, trail running, ultra-runs, mountain biking, and photography.If you’re looking for a developer to add to your team, I’d love to hear from you!
                        </CardText>
                            <div className='aboutus-icons'>
                                <span className='aboutus-icons-bg'>
                                    <a href="https://github.com/ElijahBcodes" target="_blank"><AiFillGithub style={{width: "2em", height: "2em"}}/></a>
                                </span>
                                <span className='aboutus-icons-bg'>
                                    <a href="https://www.linkedin.com/in/elijah-barreto/" target="_blank"><AiFillLinkedin style={{width: "2em", height: "2em"}}/></a>
                                </span>
                                <span className='aboutus-icons-bg'>
                                    <a href="https://www.elibarreto.com/" target="_blank"><MdArticle style={{width: "2em", height: "2em"}}/></a>
                                </span>
                            </div>
                    </CardBody>
                </Card>
            </div>
            <div className='three-column-item'>
                <Card
                style={{
                    width: '18rem'
                }}
                >
                    <img
                        className="about-us-images2"
                        alt="Holden"
                        src="../imageassets/holden-photo.jpg"
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
                            Hey! My name is Holden Prine and I'm a full stack developer based out of San Diego, California with a focus in backend and UX. I'm San Diego born and raised and when I'm not writing code I make music, go on hikes, and play unhealthy amounts of Overwatch and Monster Hunter. I'm new in my journey as a developer but love a challenge so if you're looking for a motivated problem solver feel free to connect!
                        </CardText>
                        <div className='aboutus-icons'>
                            <span className='aboutus-icons-bg'>
                                <a className='icons' href="https://github.com/holdenprine" target="_blank"><AiFillGithub style={{width: "2em", height: "2em"}}/></a>
                            </span>
                            <span className='aboutus-icons-bg'>
                                <a href="https://www.linkedin.com/in/holdenprine/" target="_blank"><AiFillLinkedin style={{width: "2em", height: "2em"}}/></a>
                            </span>
                            <span className='aboutus-icons-bg'>
                                <a href="https://holdenprines-portfolio.netlify.app/" target="_blank"><MdArticle style={{width: "2em", height: "2em"}}/></a>
                            </span>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
