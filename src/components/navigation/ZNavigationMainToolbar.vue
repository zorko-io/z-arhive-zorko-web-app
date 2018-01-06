<template>
    <v-toolbar app absolute>
      <v-toolbar-side-icon
        @click.native.stop="onSideIconClick">
      </v-toolbar-side-icon>
      <v-toolbar-title
        class="js-NavigationSubLayout-title"
        v-text="title"
      >
      </v-toolbar-title>
      <v-spacer></v-spacer>
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

