import React from 'react'
import TypewriterComponent from 'typewriter-effect';

const TypewriterEffect = () => {
  return (
    <>
      <TypewriterComponent
             onInit={(typewriter) => {
                typewriter.typeString('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dignissimos beatae blanditiis incidunt, velit amet. Architecto odio quasi quo! Eum quam dolores repellendus quae est illo rerum voluptatibus quia obcaecati.')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                .start();
            }}
        />
    </>
  )
}

export default TypewriterEffect


