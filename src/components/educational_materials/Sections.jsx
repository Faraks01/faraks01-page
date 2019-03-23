import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Col, Card, Button } from 'react-bootstrap'

import sectionsArray from './sections.json'
import { thumbnails } from './thumbnails.js'

const Sections = (props) => {
	let allCards = [];
  let allCardsFiltered = [];
  let cardsTitles = [];
	for (let section of sectionsArray) {
		allCards.push(section.cards);
	};

	allCards = allCards.splice(1);
	allCards = [].concat.apply([], allCards);

  for (let card of allCards) {
    if (cardsTitles.includes(card.title)) continue;
    cardsTitles.push(card.title);
    allCardsFiltered.push(card)
  };

	return (
		<Switch>
      {sectionsArray.map((section, i) => {
        let isExact = (i === 0) && true;
        if (isExact) {
          return (
            <Route key={"Section--" + i} exact={isExact} path={props.match.path + section.link} render={props => (
              <React.Fragment>
                {allCardsFiltered.map((card, i) => (
                  <Card key={"Card--" + i} className="border-0 mb-3" as={Col} xl="3" lg="4" md="6" sm="6" xs="12" style={{ width: '18rem' }}>
                    <Card.Body className="border border-primary rounded d-flex flex-column">
                      <Card.Img className="border-10 border-secondary" variant="top" src={thumbnails[card.image]}/>
                      <Card.Title className="mt-3">{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button as="a" href={card.link} variant="primary" rel="noopener noreferrer" target="_blank" className="mt-auto">Перейти на сайт</Button>
                    </Card.Body>
                  </Card>
                ))}
              </React.Fragment>
              )}
            />
          );
        } else {
          return (
            <Route key={"Section--" + i} exact={isExact} path={props.match.path + section.link} render={props => (
              <React.Fragment>
                {section.cards.map((card, i) => (
                  <Card key={"Card--" + i} className="border-0 mb-3" as={Col} xl="3" lg="4" md="6" sm="6" xs="12" style={{ width: '18rem' }}>
                    <Card.Body className="border border-primary rounded d-flex flex-column">
                      <Card.Img className="border-10 border-secondary" variant="top" src={thumbnails[card.image]} />
                      <Card.Title className="mt-3">{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button as="a" href={card.link} variant="primary" rel="noopener noreferrer" target="_blank" className="mt-auto">Перейти на сайт</Button>
                    </Card.Body>
                  </Card>
                ))}
              </React.Fragment>
              )}
            />
          );
        }
      })}
    </Switch>
	)
}

const mapStateToProps = (state) => {
	return {
		siteUrl: state.links.siteUrl
	}
}

export default connect(mapStateToProps)(Sections)
