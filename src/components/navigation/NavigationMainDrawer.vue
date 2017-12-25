<template>
  <v-navigation-drawer
    persistent
    v-model="drawer"
    enable-resize-watcher
    absolute
    overflow
    enable-resize-watcher
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
        <NavigationMainDrawerItem
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
          :path="item.path"
          :icon="item.icon"
          :title="item.title"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import NavigationMainDrawerItem from './NavigationMainDrawerItem.vue'

  export default {
    name: 'NavigationMainDrawer',
    components: {
      NavigationMainDrawerItem
    },
    props: {
      hidden: {
        type: Boolean
      },
      items: {
        type: Array
      },
      title: {
        type: String
      }
    },
    computed: {
      drawer: {
        get () {
          return this.hidden
        },
        set () {}
      }
    }
  }
</script>

