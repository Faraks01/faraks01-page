import React from 'react'
import { Form, Col, Button, InputGroup, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createFeedback } from '../../actions/createFeedback.js'

import Validator from './Validator.js'

import mailSvg from '../../images/feedback/email.svg'
import socMediaSvg from '../../images/feedback/soc-media.svg'

class FormBootstrap extends React.Component {
	constructor( ...args ) {
		super( ...args );
		this.state = {
			inputs: {
				name: "",
				email: "",
				socMedia: "",
				message: ""
			},

			validations: {
				name: null,
				email: null,
				socMedia: null,
				message: null
			}
		};
		this.handleInputValue = this.handleInputValue.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	handleInputValue( event ) {
		let input = event.target.dataset.assignment;
		let value = event.target.value;
		this.setState( {
			inputs: {
				...this.state.inputs,
				[ input ]: value
			}
		} );
	}

	async handleSubmit( event ) {
		event.preventDefault();
		const { name, email, socMedia, message } = this.state.inputs;
		const [ validateName, validateEmail, validateSocMedia, validateMessage ] = [
			await new Validator( name )
			.checkName,
			await new Validator( email )
			.checkEmail,
			await new Validator( socMedia )
			.checkSocMedia,
			await new Validator( message )
			.checkMessage
		];

		this.setState( {
			validations: {
				name: validateName,
				email: validateEmail,
				socMedia: validateSocMedia,
				message: validateMessage
			}
		} );

		const validations = this.state.validations;
		for (let key in validations) {
			if (!validations[key]) {
				return;
			};
		}

		this.props.createFeedback({
			name: name,
			email: email,
			socMedia: socMedia,
			message: message
		})

		alert("Сообщение отправлено!")

		this.setState({
			inputs: {
				name: "",
				email: "",
				socMedia: "",
				message: ""
			},
			validations: {
				name: null,
				email: null,
				socMedia: null,
				message: null
			}
		});
	}

	render() {
		return (
			<Form
        className="col-xl-10"
        noValidate
				validated = {false}
        onSubmit={this.handleSubmit}
      >
        <Form.Row>
          <Form.Group as={Col} md={4} xs={12} controlId="formGridEmail">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Имя"
              size="lg"
              data-assignment="name"
              onChange={this.handleInputValue}
              value={this.state.inputs.name}
							isValid={this.state.validations.name}
            />
          </Form.Group>

          <Form.Group as={Col} md={4} xs={12} controlId="validationCustomEmail">
            <Form.Label>Почта</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  size="lg"
                  placeholder="Email"
                  data-assignment="email"
									onChange={this.handleInputValue}
                  value={this.state.inputs.email}
									isValid={this.state.validations.email}
                />
                <InputGroup.Prepend>
                  <InputGroup.Text className="d-block position-relative">
                    <Image src={mailSvg} className="w-2rem" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Form.Group>

          <Form.Group as={Col} md={4} xs={12} controlId="validationCustomSocMedia">
            <Form.Label>Соцсети</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Ссылка на профиль в соцсети(по-желанию)"
                data-assignment="socMedia"
								onChange={this.handleInputValue}
                value={this.state.inputs.socMedia}
								isValid={this.state.validations.socMedia}
              />
              <InputGroup.Prepend>
                <InputGroup.Text className="d-block position-relative">
                  <Image src={socMediaSvg} className="w-2rem" />
                </InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Group>
            <Form.Label>Сообщение</Form.Label>
            <Form.Control
              as="textarea"
              rows="10"
							placeholder="От 10 до 600 символов"
              data-assignment="message"
              onChange={this.handleInputValue}
              value={this.state.inputs.message}
							isValid={this.state.validations.message}
            />
        </Form.Group>

        <Button
          className="d-block mx-auto w-100 w-sm-50 w-md-25"
          size="lg"
          type="submit"
          variant="primary"
        >
          Отправить
        </Button>
      </Form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createFeedback: (feedback) => {
			dispatch(createFeedback(feedback))
		}
	}
}

export default connect(null, mapDispatchToProps)(FormBootstrap)
