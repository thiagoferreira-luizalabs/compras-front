import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

const Login = ({ setAuth }) => {
  return (
    <div className="login">
      <Grid centered columns={6} className="box">
        <Grid columns={6} className="box">
          IMG
      </Grid>
        <Grid columns={6} className="form">
          FORM
      </Grid>
      </Grid>
    </div >
    // <section className="login">
    //   <div className="login__container">
    //     <div className="login__box -slogan">
    //       <img src="/images/logo-admin-ml.png" alt="Magazine Luiza - Administrativo" className="navbar__brand__logo" />
    //       <span className="login__powered-by">Desenvolvido por Luizalabs</span>
    //     </div>
    //     <div className="login__box -form">
    //       <h2 className="login__title">Acesso ao sistema</h2>

    //       <form action="" className="form">
    //         <div className="form-input">
    //           <label htmlFor="username" className="form-input__label">Usuário</label>
    //           <input type="text" id="username" name="username" placeholder="Digite seu usuário" className="form-input__field" />
    //           <span className="form-input__help-text">Insira seu usuário do magazine luiza</span>
    //         </div>
    //         <div className="form-input">
    //           <label htmlFor="password" className="form-input__label">Senha</label>
    //           <input type="password" id="password" name="password" placeholder="Digite sua senha" className="form-input__field" />
    //           <span className="form-input__help-text">Senha do sistema do magazine luiza</span>
    //         </div>
    //         <button className="button -persistence -block">Acessar</button>
    //       </form>
    //       <div className="login__remember-password">
    //         Esqueceu sua senha? <a href="/" title="Clique aqui" className="login__remember-password__link">Clique aqui</a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Login
