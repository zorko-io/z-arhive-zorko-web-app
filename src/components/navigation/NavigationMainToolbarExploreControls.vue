<template>
  <div>
    <v-btn small color="primary" @click="save">Save</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'NavigationMainToolbarExploreControls',
    methods: {
      save () {
        this.$store.dispatch({
          type: 'explore/save',
          look: {}
        })
      }
    }
  }
</script>

