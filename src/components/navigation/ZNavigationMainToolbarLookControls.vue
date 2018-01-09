<template>
  <v-btn small color="primary" :to="pathToExplore">Explore</v-btn>
</template>

<script>
export default {
  name: 'ZNavigationMainToolbarLookControls',
  props: {
    name: {
      type: String
    }
  },
  computed: {
    pathToExplore () {
      return '/explore/' + this.name
    }
  }
}
</script>

