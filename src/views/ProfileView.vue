<template>
  <main>
    <div class="profile-container">
      <div class="profile-content">
        <div class="profile-info">
          <img :src="user.image" alt="Imagen de perfil" class="profile-image" />
          <div class="user-details">
            <div class="user-name-edit">
              <h2>{{ user.name }}</h2>
              <img class="edit-icon" src="@/assets/EditIcon.svg" alt="Edit Icon" />
            </div>
            <div>
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p><strong>Ubicación:</strong> {{ user.location }}</p>
              <p><strong>Miembro desde:</strong> {{ user.memberSince }}</p>
            </div>

          </div>
        </div>
        <div class="pets-list">
          <h3>Mis Mascotas</h3>
          <div class="pets-container">
            <div v-for="pet in user.pets" :key="pet.id" class="pet-item">
              <img :src="pet.image" :alt="pet.name" class="pet-image" />
              <div class="pet-details">
                <h4>{{ pet.name }}</h4>
                <p><strong>Especie:</strong> {{ pet.species }}</p>
                <p><strong>Edad:</strong> {{ pet.age }} años</p>
                <RouterLink :to="`/pets/${pet.id}`" class="action-button view-details">Ver detalles</RouterLink>
              </div>
            </div>
          </div>
          <RouterLink to="/add-pet" class="action-button new-pet">Añadir una nueva mascota</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { RouterLink } from 'vue-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';

export default {

  name: 'UserProfile',
  components: {
    RouterLink,
  },
  data() {
    return {
      user: {
        image: 'https://static.vecteezy.com/system/resources/previews/020/669/349/non_2x/doodle-portrait-of-a-handsome-man-with-stylish-haircut-and-a-beard-isolated-outline-hand-drawn-illustration-in-black-ink-on-white-background-vector.jpg', // Imagen de perfil del usuario
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        location: 'Madrid, España',
        memberSince: 'Enero 2022',
        pets: [
          {
            id: 1,
            name: 'Rex',
            image: 'https://thumbs.dreamstime.com/b/portrait-dog-portrait-breed-golden-doodle-black-white-illustration-fluffy-dog-print-clothes-doodle-portrait-157565860.jpg',
            species: 'Perro',
            age: 5
          },
          {
            id: 2,
            name: 'Milo',
            image: 'https://sketchok.com/images/articles/07-animals/01-cats/20/01/05.jpg',
            species: 'Gato',
            age: 3
          }
        ]
      }
    };
  },
  methods: {
    editProfile() {
      console.log('Editando perfil');
    },
    logout() {
      signOut(auth)
      console.log("adiós, pero no se sabe cuando te vas");
      this.isLogin = false;
      this.$router.push({ name: 'home' });
    },
    viewPet(petId) {
      console.log(`Viendo detalles de la mascota con id: ${petId}`);
    }
  }
};
</script>

<style scoped>
@import '@fontsource/luckiest-guy';
@import '@fontsource/montserrat/400.css';



main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--color-celeste);
  min-height: 100vh;
  font-family: Montserrat, sans-serif;
}

.profile-container {
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 800px;
}

.profile-header {
  background-color: var(--color-azul-oscuro);
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

.profile-content {
  margin-top: 20px;
}

.profile-info {
  display: flex;
  gap: 20px;
  background-color: var(--color-azul-oscuro);
  padding: 20px;
  border-radius: 10px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.user-details {
  color: white;
}

.user-details h2 {
  margin: 0;
}

.user-details p {
  margin: 5px 0;
}

.profile-actions {
  margin-top: 20px;
  text-align: center;
}

.pets-list {
  margin-top: 40px;
}

.action-button.view-details {
  background-color: var(--color-azul-claro);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  text-decoration: none;
  display: inline-block;
  margin: 10px 0;
  /* Ensure there is space around the button */
}

.action-button.new-pet {
  background-color: var(--color-azul-oscuro);
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  display: inline-block;
  margin: 10px 0;
  /* Ensure there is space around the button */
}

.pets-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
}

.pet-item {
  background-color: var(--color-azul-oscuro);
  color: white;
  border-radius: 10px;
  padding: 30px;
  width: 200px;
  height: 300px;
  text-align: center;
}

.pet-image {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
}

.pet-details {
  margin-top: 10px;
}

.pet-details h4 {
  margin: 5px 0;
  font-size: 25px;
}

.pet-details p {
  margin: 5px 0;
}

.user-name-edit {
  display: flex;

  & h2 {
    padding-right: 15px;
  }
}
</style>
