import React from "react";
import { Button } from "reactstrap";

const Home = () => {
   return (
      <>
         <div>
            <h2>What are you in the mood for?</h2>
            <Button href="/moods">Pick A Mood</Button>
         </div>
      </>
   );
};

export default Home;
