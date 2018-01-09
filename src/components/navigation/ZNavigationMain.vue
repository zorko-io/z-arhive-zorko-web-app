<template>
   <div>
      <ZNavigationMainDrawer
        :visibility="drawerVisibility"
        :fullscreen="fullscreen"
        :items="items"
        :title="drawerTitle"
        @changeDrawerVisibility="onChangeDrawerVisibility"
      />
      <ZNavigationMainToolbar
        :title="toolbarTitle"
        @toggleDrawerVisibility="onChangeDrawerVisibility"
      >
        <slot></slot>
      </ZNavigationMainToolbar>
   </div>
</template>

<script>
import ZNavigationMainDrawer from './ZNavigationMainDrawer.vue'
import ZNavigationMainToolbar from './ZNavigationMainToolbar.vue'

import {mapState} from 'vuex'

export default {
  name: 'ZNavigationMain',
  components: {
    ZNavigationMainDrawer,
    ZNavigationMainToolbar
  },
  computed: {
    ...mapState({
      items: state => state.navigation.items,
      drawerVisibility: state => state.navigation.drawerVisibility
    }),
    toolbarTitle () {
      return this.$store.state.route.meta.title
    },
    fullscreen () {
      return this.$store.state.navigation.fullscreen
    }
  },
  methods: {
    onChangeDrawerVisibility (value) {
      this.$store.dispatch({
        type: 'navigation/changeDrawerVisibility',
        visibility: value
      })
    }
  },
  data () {
    return {
      drawerTitle: 'Zorko'
    }
  }
}
</script>

