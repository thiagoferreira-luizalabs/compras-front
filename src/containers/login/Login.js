import React from 'react';
import { Grid, Image, Button, Checkbox, Form } from 'semantic-ui-react'
import Lu from '../../assets/img/lu.png';
import Logo from '../../assets/img/magazineluiza.png';

const Login = ({ setAuth }) => {
  return (
    <div className="login">
      <div className="box">
        <Grid>
          <Grid.Column width={6} className="brand" only='computer'>
              <Image src={Logo} className="logo"  />
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
                <Button color="green" fluid type='submit'>Acessar</Button>                
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </div >
  )
}

export default Login
