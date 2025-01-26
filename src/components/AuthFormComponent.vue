<template>
  <div class="auth-form">
    <form class="login-form" @submit.prevent v-if="isLogin">
      <h2>Bienvenido de nuevo</h2>
      <label class="form-label">Nombre de usuario o dirección de correo electrónico</label>
      <input type="email" v-model="login.email" :class="{ error: hasError }" required class="input-field" />
      <label class="form-label password-label">
        Contraseña
        <button
    type="button"
    class="password-toggle"
    @click="togglePasswordVisibility"
  >
    <img
      :src="isPasswordVisible ? '/icons/eye-off.svg' : '/icons/eye-tracking.svg'"
      :alt="isPasswordVisible ? 'Hide password' : 'Show password'"
    /></button>
      </label>
      <input
  :type="isPasswordVisible ? 'text' : 'password'"
  v-model="login.password"
  :class="{ error: hasError }"
  required
  class="input-field"
/>
      <div class="form-links password">
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
      <button type="submit" @click="$emit('login', login)" class="login-button">Acceder</button>
      <p v-if="hasError" class="error-message">{{ errorMessage }}</p>
      <div class="form-links signin">
        <a href="register">¿Aún no tienes cuenta? Regístrate</a>
      </div>
    </form>

    <form class="login-form" @submit.prevent v-else>
      <h2>Únete a nuestra comunidad</h2>
      <label class="form-label">Nombre de usuario o dirección de correo electrónico</label>
      <input type="email" v-model="login.email" required class="input-field" />
      <label class="form-label password-label">
        Contraseña
        <button
          type="button"
          class="password-toggle"
          @click="togglePasswordVisibility"
        >
    <img
      :src="isPasswordVisible ? '/icons/eye-off.svg' : '/icons/eye-tracking.svg'"
      :alt="isPasswordVisible ? 'Hide password' : 'Show password'"
    />
  </button>
      </label>
      <input
        :type="isPasswordVisible ? 'text' : 'password'"
        v-model="login.password"
        :class="{ error: hasError }"
        required
        class="input-field"
      />
      <div class="form-links login">
        <a href="login">Ya tengo cuenta</a>
      </div>
      <button type="submit" @click="$emit('register', login)" class="login-button">Registrarme</button>
    </form>
  </div>
</template>

<script>

export default {
  props: {
    isLogin: {
      type: Boolean,
      required: true
    }
  },
  events: {
    login: {
      type: Function,
      required: true
    },
    register: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      isPasswordVisible: false,
      // Mensaje de error
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
  },
}
</script>

<style scoped>
body {
  margin: 0;
  height: 100vh;
  width: auto;
}

.split-screen {
  height: calc(100dvh - var(--header-height));
  display: flex;
}

.left-side,
.right-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.left-side {
  background-color: var(--color-celeste);
  background-image: url("images/petLogin.svg");
  color: var(--color-azul-oscuro);
  text-align: center;
  display: flex;
  flex-direction: column;
}

.left-side h1 {
  font-size: 2.5rem;
  margin-top: 80px;
  margin-bottom: 10px;
  font-family: "Luckiest Guy", system-ui;
  letter-spacing: 2px;
}

.left-side h2 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  font-family: Montserrat, sans-serif;
}

.right-side {
  background-color: var(--color-azul-claro);
}

img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

.pet-svg-icon {
  width: 500px;
  height: auto;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.login-form h2 {
  font-family: "Luckiest Guy", system-ui;
  color: white;
  letter-spacing: 2px;
  font-size: 2rem;
}


.login-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: var(--color-azul-oscuro);
  color: var(--color-celeste);
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;

  &:hover {
    transition: 0.75s;
    box-shadow: 0 12px 16px 0 rgba(194, 194, 194, 0.24), 0 17px 50px 0 rgba(192, 192, 192, 0.19);
  }
}

.form-label {
  color: white;
  font-size: 20px;
  width: 100%;
}

.password-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.password-toggle {
  background: none;
  border: none;
  cursor: pointer;
}

.input-field {
  background: transparent;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  padding: 10px 10px;
  width: 500px;
  color: white;
  outline: white;
}

.form-links {
  margin-top: 10px;
  font-size: 14px;
  color: var(--color-azul-oscuro);
  width: 100%;
  display: flex;

  &.password {
    justify-content: flex-end;
  }

  &.signin {
    justify-content: flex-start;
  }
  &.login {
    justify-content: flex-end;
  }

  & a {
    color: var(--color-azul-oscuro);
    text-decoration: none;
    margin: 5px;
    font-size: 15px;
  }
}

.form-links a:hover {
  text-decoration: underline;
  color:white;
}

</style>
