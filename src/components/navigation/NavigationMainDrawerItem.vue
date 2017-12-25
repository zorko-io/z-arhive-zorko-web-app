<template>
  <v-list-tile :to="path">
    <v-list-tile-action>
      <v-icon small v-html="icon"></v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title v-text="title"></v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'NavigationMainDrawerItem',
    props: {
      path: {
        type: String
      },
      icon: {
        type: String
      },
      title: {
        type: String
      }
    }
  }
</script>

