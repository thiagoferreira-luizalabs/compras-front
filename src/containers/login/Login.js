import React from 'react';
import { Grid, Image, Button, Form } from 'semantic-ui-react'
import Lu from '../../assets/img/lu.png';
import Logo from '../../assets/img/magazineluiza.png';
import PropTypes from 'prop-types';


class Login extends React.Component {

  state = { isFetching: false }

  constructor(props) {
    super(props)
    this.authenticate = this.authenticate.bind(this)
  }

  authenticate() {
    this.setState({ isFetching: true })
    setTimeout(() => {
      this.props.setAuth()
    }, 1500)
  }

  render() {
    const { isFetching } = this.state
    return (
      <div className="login">
        <div className="box">
          <Grid>
            <Grid.Column width={6} className="brand" only='computer'>
              <Image src={Logo} className="logo" />
              <span>
                Acesse sistemas, e administrativos tudo em um só lugar.
                </span>
              <Image src={Lu} className="lu" />
            </Grid.Column>
            <Grid.Column computer={10} mobile={16} className="form">
              <Form>
                <h1>Acesso ao Sistema</h1>
                <Form.Field>
                  <label>Usuário</label>
                  <input placeholder='Digite seu usuário' />
                  <span>Usuário do magazineluiza</span>
                </Form.Field>
                <Form.Field>
                  <label>Senha</label>
                  <input placeholder='Digite sua senha' />
                  <span>Senha do portal</span>
                </Form.Field>
                <Button color="green" fluid type='submit' loading={isFetching} onClick={this.authenticate}>Acessar</Button>
                <span className="forgot-password">Esqueceu sua senha? <a href="/">Clique aqui</a></span>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div >
    )
  }
}

Login.propTypes = {
  setAuth: PropTypes.func
}

export default Login
