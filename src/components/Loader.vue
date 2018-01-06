<template>
  <v-content fluid grid-list-xl>
    <v-layout row justify-center>
      <v-progress-circular indeterminate v-bind:size="120" v-bind:width="7" color="blue"></v-progress-circular>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  name: 'AppLoading'
}
</script>

