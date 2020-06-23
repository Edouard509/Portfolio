import React from 'react';

import Card from '../components/Card';

import hotmeal from '../assets/images/hotmeal.png';
import chuck from '../assets/images/chuck.png';
import fresh from '../assets/images/fresh.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Hot Meal',
          subTitle: 'Find a dish and the recipe',
          imgSrc: hotmeal,
          link: 'http://clumsy-arithmetic.surge.sh/',
          selected: false
        },
        {
          id: 1,
          title: 'Chuck Norris Jokes',
          subTitle: 'Funny jokes of Chuck Norris',
          imgSrc: chuck,
          link: 'http://mindless-cork.surge.sh/',
          selected: false
        },
        {
          id: 2,
          title: 'Fresh Direct Rebuild',
          subTitle: 'A rebuild website of a E-commerce website worked with a team',
          imgSrc: fresh,
          link: 'https://apollo-fresh-direct.surge.sh/',
          selected: false
        },
      ]
    }
  }


  handleCardClick = (id, card) => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }


  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }


  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }

}

export default Carousel;