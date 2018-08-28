import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Lu from '../../assets/img/lu.png';
import Logo from '../../assets/img/magazineluiza.png';

const Login = ({ setAuth }) => {
  return (
    <div className="login">
      <div className="box">
        <Grid>
          <Grid.Column width={5} className="brand">
            a
          </Grid.Column>
          <Grid.Column width={11} className="form">
            b
          </Grid.Column>
        </Grid>
      </div>
    </div >
  )
}

export default Login
