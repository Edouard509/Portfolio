import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>Hello, my name is Claudy. I'm a full stack engineer with experience in HTML5, CSS, Express JS, Node JS, Oracle SQL, MongoDB, Ruby, Ruby on Rails, JavaScript, CRUD, Git, GitHub and React.</p>

        <p>My dream one day is to built a billion dollars website/mobile app and become a successful entrepreneur (currently working on some ideas).</p>

        <p>I'm constantly learning new things. Currently those things include gaining more experience with MongoDB, React JS, Express JS, Node JS, Ruby on Rails, React Native and also get better at CSS.</p>

        <p>My latest project, Hot Meal, it is a dish and recipe website. You can check it out <a href="http://clumsy-arithmetic.surge.sh/" target="_blank" rel="noopener noreferrer">here</a>, or this website is a full-stack, full-CRUD app, utilizing a RESTful JSON API with the so-called "React on Rails" stack. </p>

        <p>When I'm not learning something new chances are I'm checking on my business, or my investments.</p>
      </Content>
    </div>
  );

}

export default AboutPage;