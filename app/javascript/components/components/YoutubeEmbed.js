import React from 'react'

const YoutubeEmbed = ({embedId}) => {

   return (
      <div>
         <iframe
            src={embedId}
            title="Embedded YouTube Song"
            width="400"
            height="300"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
         />
      </div>
   )
}

export default YoutubeEmbed
