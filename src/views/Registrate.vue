<template>
  <div class="container-registrate">
    <div class="row">
      <div class="title-form">
        <h1>Formulario de registro</h1>
        <span>Let's go</span>
      </div>
      <div class="body-form">
        <div>
          <input class="input-control" type="text" placeholder="Correo electronico"/>
        </div>
        <div>
          <input class="input-control" type="text" placeholder="Contraseña"/>
        </div>
        <div>
          <input class="input-control" type="text" name id placeholder="Repetir contraseña"/>
        </div>
        <div>
          <input type="checkbox" name id />
          <span>Acepto termino y condiciones</span>
        </div>
      </div>
      <div class="footer-form">
        <button>
          <router-link to="/" class="rooter">Ingresar</router-link>
        </button>
        <button>Registrarse</button>
      </div>
    </div>
  </div>
</template>


<style>
.container-registrate {
  display: flex;
  justify-content: space-around;
  width: 450px;
  height: 600px;
  background: #ffffff;
  align-items: center;
}

.container-registrate .row{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 75%;
}

.body-form > div{
    margin: 5px;
}

.input-control{
    padding: 10px;
    width: 100%;
}

</style>