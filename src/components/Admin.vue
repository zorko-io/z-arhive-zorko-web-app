<template>
  <blockquote class="js-block-message">
    {{ msg }}
  </blockquote>
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
