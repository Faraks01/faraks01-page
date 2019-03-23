import React from 'react'
import { Container } from 'react-bootstrap'
import myPhoto from '../../images/about-me/me-resized.png'
import exampleImg1 from '../../images/about-me/example-1.png'
import reactReduxImg from '../../images/about-me/react-redux.jpg'
import nodeExpressImg from '../../images/about-me/node-express.jpg'

import hyperlinks from './hyperlinks.json'


const AboutMe = (props) => {
  let createLink = (content, href) => (<a href={href} rel="noopener noreferrer" target="_blank">{content}</a>);
  let links = {};
  for (let link of hyperlinks) {
    links[link.key] = createLink(link.content, link.url)
  };

	return (
		<Container className="d-flex align-items-center py-4" as="main" fluid={false}>
      <article style={{height: "max-content"}}>
        <img className="d-block img-thumbnail w-75 w-md-33 float-lg-left mx-auto mr-0 mr-lg-3 mr-xl-3 mb-3 mb-lg-0 mb-xl-0" src={myPhoto} alt=""/>
        <h2>
          Hello world!
        </h2>
        <p>
          Здраствуйте, меня зовут Николаев Константин Михалович, живу в г. Москва, возраст 23 года, я - начинающий веб-разработчик. Моё первое знакомство с веб-программированием началось ещё на первом курсе железнодорожного колледжа, в классе информатики, когда молодая девушка преподаватель рассказывала об истории ЭВМ, работе в терминале и простом построении веб-страниц на HTML.
        </p>
        <img className="d-block img-thumbnail w-50 w-md-25 float-right ml-3" src={exampleImg1} alt=""/>
        <p>
          В то время мои первые практические работы представляли из себя обычные папки с простенькими html-страницами вместе с картинками. Про сервер, стили и скрипты в то время я даже понятия не имел. В дальнейшем мне стало интересно изучать тему построения веб-сайтов, я стал изучать JavaScript, появились первые стилизованные с помощью CSS сайты, первые скрипты и ивенты. Я горячо влюбился в алгоритмы и программирование.
        </p>
        <p>
          Окончательно решив посвятить себя своему хобби, я ушел с неинтересной мне специальности в железнодорожном колледже, устроился на работу и продолжил целенаправленно, в свое удовольствие изучать программирование. Все мое свободное время стало уходить на самостоятельную учебу, моими верными помощниками стали: {links.google}, {links.habr}, {links.mdn}, и сайт {links.kantor}.
        </p>
        <img className="d-block img-thumbnail w-50 w-md-25 float-left mr-3" src={reactReduxImg} alt=""/>
        <p>
          В веб-программировании я решил посветить себя Frontend составляющей. Просмотрев различные статьи в интернете, был выбран актуальный стек технологий для создания {links.spa} (Single page applicaton) приложений: фреймворк {links.react} и система контроля состояний приложения {links.redux}. {links.react} был выбран из-за ее относительной простоты понимания, обширного комьюнити и созданной разработчиками {links.react} удобной {links.webpack} сборки {links.createRApp}. {links.redux} была выбранна как самая популярная cистема контроля состояниями в связке с {links.react}.
        </p>
        <img className="d-block img-thumbnail w-50 w-md-25 float-right ml-3" src={nodeExpressImg} alt=""/>
        <p>
          Список технологий все больше нарастал:  система управления версиями {links.git}, веб-сервис {links.github}, менеджер пакетов {links.npm}, препроцессор {links.sass}, набор инструментов для создания сайтов {links.bootstrap}, сборщик модулей для современных JavaScript-приложений {links.webpack}.
          В процессе изучения встал вопрос об Backend составляющей. Я выбрал максимально приближенные к JavaScript-языку технологии: {links.node} для обслуживания сервера, {links.express} - как гибкий и удобный веб-фреймворк для приложений на Node.js, а также {links.mongodb} - систему управления базами данных. Все это в совокупности с Гуглом, подсказками из {links.stackoverflow} и {createLink("Хабра", "https://habr.com/ru/")}.
        </p>
        <p>
          Итог - свои знания я могу описать как "хорошие" в Frontend направлении и "нелохие, с частыми подсказками из документаций и гугла" в Backend.
        </p>
      </article>
    </Container>
	)
}

export default AboutMe
