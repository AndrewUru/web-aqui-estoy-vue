<template>
  <div class="lostanimal-card">
    <div class="head-card">
      <h2>{{ posts.name }}</h2>
      <button>
        <Phone />
      </button>
    </div>
    <img class="contain pet-img" :src="posts.URLImage" alt="">
    <div class="footer-card">
      <div class="footer-container clock">
        <img class="icon" src="@/assets/FlagWaving.svg" alt="Clock Icon" />
        <p>{{ posts.street }}</p>
      </div>
      <div class="footer-container bottom">
        <div class="flag"><img class="icon" src="@/assets/ClockIcon.svg" alt="Clock Icon" />
          <p>Perdido:{{ posts.date }} {{ posts.time }}</p>
        </div>
        <div class="chat">
          <router-link :to="`/post/${posts.id}`" class="lostanimal-card">
            <img class="icon" src="@/assets/TextIcon.svg" alt="Flag Icon" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .icon{
    padding-left:5px;
    height:20px;
    width:20px;
  }
.lostanimal-card{
  filter: drop-shadow(0 0 0.1rem rgb(203, 213, 214));
  margin: 0 60px 30px 60px;
  font-family: Montserrat, sans-serif;
  border-radius: 25px;
  display : flex;
  flex-direction: column;
  width: 350px;
  max-height: 600px;
  background-color: var(--color-celeste);
  & .head-card {
    margin : 0px 20px;
  }
  & button {
    padding : 0;
    margin : 0;
    background-color: var(--color-celeste);
    border : none;
    border-radius: 25px;
    max-width: 50px;
    max-height: 50px;
    &:hover {
      background-color: var(--color-azul-claro);
      color : var(--color-celeste);
      transition: 1s;
    }
  }
  & .head-card {
      display : flex;
      justify-content: space-between;
      margin : 10px 10px;
  } & h2 {
    margin: 10px;
    margin-right: 0;
    text-align: center;
    font-size: 20px;
  }
  & .pet-img {
      max-width: 100%;
      height: 250px;
      &.contain {
        object-fit: cover;
      }
  }
  & .footer-card {
      margin : 0px 20px;
      & .footer-container {
      display: flex;
      margin: 10px;
      align-items: flex-start;
      justify-content: baseline;
        &.clock {
          margin-bottom: 0;
        }
        &.bottom {
          display : flex;
          justify-content: space-between;
          & a{
          margin : 0;
          max-height: 33px;
          max-width: 33px;
          filter : none;
        }
        & .flag {
          display : flex;

        }
        & .chat {
          display : flex;
          justify-content: flex-end;
        }
        }

      }
  }

}
</style>

<script setup>
import Phone from '../icons/PhoneComponent.vue'

defineProps({
  posts: {
    type: Object,
    required: true
  }
})
</script>
