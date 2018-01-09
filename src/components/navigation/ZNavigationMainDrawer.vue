<template>
  <v-navigation-drawer
    ref="navDrawer"
    :persistent="!fullscreen"
    :temporary="!!fullscreen"
    v-model="drawer"
    enable-resize-watcher
    absolute
    app
    @input="onDrawerInput"
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
        <ZNavigationMainDrawerItem
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
          :path="item.path"
          :icon="item.icon"
          :title="item.title"
          @click.native="onItemClick"
        />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ZNavigationMainDrawerItem from './ZNavigationMainDrawerItem.vue'

export default {
  name: 'ZNavigationMainDrawer',
  components: {
    ZNavigationMainDrawerItem
  },
  props: {
    visibility: {
      type: Boolean
    },
    items: {
      type: Array
    },
    title: {
      type: String
    },
    fullscreen: {
      type: Boolean
    }
  },
  computed: {
    drawer: {
      get () {
        return this.visibility
      },
      set (value) {
        this.$emit('changeDrawerVisibility', value)
      }
    }
  },
  data () {
    return {
      drawerValue: false
    }
  },
  methods: {
    onItemClick () {
      this.drawerValue = false

      this._forceOverlayRemoval()
    },

    onDrawerInput (value) {
      this.drawerValue = value
    },

    _forceOverlayRemoval () {
      const $navDrawer = this.$refs.navDrawer
      $navDrawer.removeOverlay()
    }
  }
}
</script>

