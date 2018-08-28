import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Lu from '../../assets/img/lu.png';
import Logo from '../../assets/img/magazineluiza.png';

const Login = ({ setAuth }) => {
  return (
    <div className="login">
      <div className="box">
        <Grid>
          <Grid.Column width={6} className="brand">
              <Image src={Logo} className="logo"  />
              <span>
                  Acesse sistemas, e administrativos tudo em um só lugar.
              </span>
              <Image src={Lu} className="lu" />
          </Grid.Column>
          <Grid.Column width={10} className="form">
            b
          </Grid.Column>
        </Grid>
      </div>
    </div >
  )
}

export default Login
