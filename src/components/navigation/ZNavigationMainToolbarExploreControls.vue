<template>
  <div>
    <v-btn small color="primary" @click="save">Save</v-btn>
  </div>
</template>

<script>
export default {
  name: 'ZNavigationMainToolbarExploreControls',
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

