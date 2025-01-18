<template>
  <div class="lostanimal-card">
    <div class="head-card">
      <h2>{{ lostanimal.nameAgePet }}</h2>
      <button><img src="/icons/PhoneIconPls.svg" alt="Phone Icon" /></button>
    </div>
    <img class="contain" :src="lostanimal.profilePic" alt="">
    <div class="footer-card">
      <div class="footer-container clock">
        <img src="/icons/ClockIcon.svg" alt="Clock Icon" />
        <p>{{ lostanimal.lostAddress }}</p>
      </div>
      <div class="footer-container bottom">
        <div class="flag"><img src="/icons/ClockIcon.svg" alt="Clock Icon" />
          <p>{{ lostanimal.lastTimeSeen }}</p>
        </div>
        <div class="chat">
          <router-link :to="`/${lostanimal.id}`" class="lostanimal-card">
            <img src="/icons/FlagWaving.svg" alt="Flag Icon" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lostanimal-card {
  filter: drop-shadow(0 0 0.1rem rgb(203, 213, 214));
  margin: 30px;
  font-family: Montserrat, sans-serif;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  width: 350px;
  max-height: 600px;
  background-color: var(--color-celeste);

  & .head-card {
    margin: 0px 20px;
  }

  & button {
    padding: 0;
    margin: 0;
    background-color: var(--color-celeste);
    border: none;
    border-radius: 25px;
    max-width: 50px;
    max-height: 50px;

    &:hover {
      background-color: var(--color-azul-claro);
      color: var(--color-celeste);
      transition: 1s;
    }
  }

  & .head-card {
    display: flex;
    justify-content: space-between;
    margin: 10px 10px;
  }

  & h2 {
    margin: 10px;
    margin-right: 0;
    text-align: center;
    font-size: 20px;
  }

  & img {
    max-width: 100%;
    height: 250px;

    &.contain {
      object-fit: cover;
    }
  }

  & .footer-card {
    margin: 0px 20px;

    & .footer-container {
      display: flex;
      margin: 10px;
      align-items: flex-start;
      justify-content: baseline;

      &.clock {
        margin-bottom: 0;
      }

      &.bottom {
        display: flex;
        justify-content: space-between;

        & a {
          margin: 0;
          max-height: 33px;
          max-width: 33px;
          filter: none;
        }

        & .flag {
          display: flex;

        }

        & .chat {
          display: flex;
          justify-content: flex-end;
        }
      }

    }
  }

}
</style>

<script setup>
import { defineProps } from 'vue';


defineProps({
  lostanimal: {
    type: Object,
    required: true
  }
})
</script>
