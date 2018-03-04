<template>
    <v-toolbar app absolute>
      <slot></slot>
    </v-toolbar>
</template>

<script>
export default {
  name: 'ZNavigationMainToolbar',
  props: {
    title: {
      type: String
    }
  },
  methods: {
    onSideIconClick () {
      this.$emit('toggleDrawerVisibility')
    }
  }
}
</script>

