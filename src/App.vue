<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>

    <div class="navbar-start">
      <router-link class="navbar-item" to="/" exact="">
        Home
      </router-link>
    </div>

  </nav>
  <router-view/>
</div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      
    }
  }
</script>

<style>
.router-link-active {
  text-decoration: underline;
}
</style>
