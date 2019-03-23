import React from 'react'
import { Table as ReactBootstrapTable, Button, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteFeedback } from '../../actions/deleteFeedback.js'

import trashCanImg from '../../images/admin/trash-can.svg'
import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru');


class Table extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      id: {}
    };
    this.id = {};
    this.showMessage = this.showMessage.bind( this );
    this.deletePost = this.deletePost.bind( this );
  }

  async componentDidMount() {
    this.setState( {
      id: await this.id
    } );
  }

  async showMessage( event ) {
    let currentId = event.target.dataset.id;
    if ( this.state.id[ currentId ] === "hidden" ) {
      event.target.innerHTML = "Скрыть"
      this.setState( {
        id: {
          ...this.state.id,
          [ currentId ]: await "show"
        }
      } );
    } else {
      event.target.innerHTML = "Раскрыть"
      this.setState( {
        id: {
          ...this.state.id,
          [ currentId ]: await "hidden"
        }
      } );
    };
  }

  async deletePost( event ) {
    this.props.deleteFeedback(event.target.dataset.id);
  }

  render () {
    let { feedbacks } = this.props;
    console.log(feedbacks);
    return (
      feedbacks
        ? <ReactBootstrapTable variant="dark" bordered responsive={true}>
          <thead>
            <tr>
              <th className="text-center align-middle">Создано</th>
              <th className="text-center align-middle">Имя</th>
              <th className="text-center align-middle">Почта</th>
              <th className="text-center align-middle">Социальные сети</th>
              <th className="text-center align-middle">Сообщение</th>
              <th className="text-center align-middle">Удалить</th>
            </tr>
          </thead>
          <tbody>
            {
              feedbacks.map((feedback, i) => {
                console.log(feedback);
                this.id[feedback.id] = "hidden";
                return (
                  <React.Fragment key={"feedback--#" + i}>
                    <tr>
                      <td className="text-center align-middle">{moment(feedback.createdAt.toDate()).fromNow()}</td>
                      <td className="text-center align-middle">{feedback.name}</td>
                      <td className="text-center align-middle">{feedback.email}</td>
                      <td className="text-center align-middle">{feedback.socMedia}</td>
                      <td className="text-center align-middle">
                        <Button
                          data-id={feedback.id}
                          variant="success"
                          className="w-100"
                          onClick={this.showMessage}
                        >
                          Раскрыть
                        </Button>
                      </td>
                      <td className="text-center align-middle w-3rem">
                        <Button
                          data-id={feedback.id}
                          variant="danger"
                          onClick={this.deletePost}
                        >
                          <Image
                            data-id={feedback.id}
                            src={trashCanImg}
                            className="w-2rem"
                            />
                        </Button>
                      </td>
                    </tr>
                    {
                      (this.state.id[feedback.id] === "hidden")
                        ? null
                        : (
                          <tr>
                            <td
                              colSpan="6"
                              className="bg-secondary text-center align-middle"
                            >
                              {feedback.message}
                            </td>
                          </tr>
                        )
                    }
                  </React.Fragment>
                )
              })
            }
          </tbody>
        </ReactBootstrapTable>
        : <div className="spinner-border text-success w-5rem h-5rem mx-auto mt-5 mb-auto" role="status">
            <span className="sr-only">Loading...</span>
          </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		feedbacks: state.firestore.ordered.feedbacks
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFeedback: id => {
      dispatch(deleteFeedback(id))
    }
  };
}

export default compose(
	connect( mapStateToProps, mapDispatchToProps ),
	firestoreConnect( [
		{ collection: 'feedbacks' }
	] )
)( Table );
