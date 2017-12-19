<template>
  <div>
    <blockquote class="js-block-message">
      {{ msg }}
    </blockquote>
    <v-toolbar flat>
      <v-toolbar-title class="js-toolbar-message">Popular Looks</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'Admin',
    data () {
      return {
        msg: 'I`m an admin',
        title: 'Admin'
      }
    }
  }
</script>
