import React from 'react'

const YoutubeEmbed = ({embedId}) => {
   return (
      <div>
         <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            title="Embedded YouTube Song"
            width="400"
            height="300"
         />
      </div>
   )
}

export default YoutubeEmbed
