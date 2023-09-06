<template>
  <div class="col-md-10 ms-auto">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  </div>
</template>
<script setup>
</script>
<!-- <template>
  <div>
  <button class="btn btn-primary">hello </button>
  <button  @click="toggleTheme" aria-label="Toggle themes" style="color:white">
  <span v-if="this.theme == 'darkMode'"> Light</span>
  <span v-else> Dark</span>     
  hhhhhhhhhhhhhhhhhhhhh
</button>
</div>
</template>

<script>
export default {
  data() {
      return {
          theme: '' //When this property is empty, the theme is set to the default theme i.e. light mode.
      };
  },

  mounted() {
      let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
      document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
  },

  toggleTheme() {
              this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
              document.documentElement.setAttribute('data-theme', this.theme); // updates the data-theme attribute
              localStorage.setItem('theme', this.theme); // stores theme value in local storage
  }
}
</script> -->