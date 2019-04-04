import React from 'react'
import { Form, Button, Container, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions/authActions.js'
import logOutSvg from '../../images/admin/logout.svg'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: "",
            passwordInput: ""
        }
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputValue(event) {
        let input = event.target.dataset.assignment;
        let value = event.target.value;
        this.setState({
            [input]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { emailInput, passwordInput } = this.state;
        this.props.signIn({
            email: emailInput,
            password: passwordInput
        });
        this.setState({
            emailInput: "",
            passwordInput: ""
        });
    }

    render() {
        return (
            <Form
                className={this.props.className}
                onSubmit={this.handleSubmit}
            >
                <Form.Group>
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control
                        type="email"
                        size="lg"
                        placeholder="example@mail.com"
                        data-assignment="emailInput"
                        onChange={this.handleInputValue}
                        value={this.state.emailInput}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        size="lg"
                        placeholder="**********"
                        data-assignment="passwordInput"
                        onChange={this.handleInputValue}
                        value={this.state.passwordInput}
                    />
                </Form.Group>
                <Container
                    fluid={true}
                    className="mt-3 p-0 d-flex"
                >
                    <Button
                        className="d-block mx-auto w-75 w-md-50"
                        variant="primary"
                        type="submit"
                        size="lg"
                    >
                        Войти
					</Button>
                    <Button
                        className="d-block mx-auto w-25 w-md-25 d-flex"
                        variant="danger"
                        type="button"
                        size="lg"
                        onClick={() => this.props.signOut()}
                    >
                        <Image
                            fluid
                            className="w-2rem mx-auto"
                            src={logOutSvg}
                        />
                    </Button>
                </Container>
            </Form>
        )

    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: credentials => dispatch(signIn(credentials)),
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);
