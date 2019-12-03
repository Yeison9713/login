<template>
  <div class="container-login">
    <!-- <div>Imagen login</div> -->
    <div class="imagen-login" :style="{ backgroundImage: `url(${backgroundUrl})`}"></div>
    <div class="form-usuario">
      <div class="title-form">
        <h1>CreativeDesing</h1>
        <span>Welcome, let's go.</span>
      </div>
      <div class="body-form">
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Password" />
      </div>
      <div class="footer-form">
        <button>Login</button>
        <button><router-link to="/registrate" class="rooter">Registrase</router-link></button>
      </div>
      <div class="actios-form">
        <div>
          <input type="checkbox" name id />
          <label for>Recordar contraseña</label>
        </div>
        <div>
          <a href>Forgot password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container-login {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 900px;
  height: 600px;
  background: #ffffff;
  /* border-radius: 6px; */
}
.container-login > div {
  width: 50%;
  height: 100%;
}

.imagen-login {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.form-usuario {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-usuario > div {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.title-form {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.body-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.body-form input {
  /* margin: 5px; */
}

input {
  padding: 7px;
  border: 1px solid #cccccc;
  border-radius: 3px;
}

.footer-form {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.footer-form button {
  display: block;
  border: none;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  background: #246ce9;
  margin: 5px;
  cursor: pointer;
}

.footer-form button:nth-child(2) {
  background: green;
}

.actios-form {
  display: flex;
  justify-content: space-between !important;
}

.rooter{
    text-decoration: none;
}
</style>


<script>
import backgroundUrl from "@/assets/e-business.png";
export default {
  data() {
    return {
      backgroundUrl
    };
  }
};
</script>