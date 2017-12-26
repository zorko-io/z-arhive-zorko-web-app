<template>
  <v-navigation-drawer
    permanent
    :mini-variant="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    enable-resize-watcher
    :mini-variant-width="miniVariantWidth"
    app
  >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            {{ title }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <template v-for="(item, i) in items">
        <v-list-tile
          v-if="item.component == 'item'"
          :key="i"
          :to="item.path"
        >
          <v-list-tile-action>
            <v-icon small v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Navigation',

    computed: mapState({
      items: state => state.navigation.items
    }),

    data () {
      return {
        path: '/model',
        title: 'Zorko',
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        miniVariantWidth: 106
      }
    }
  }
</script>

