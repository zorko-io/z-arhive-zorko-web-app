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
        <v-btn
          :key="button.name"
          v-for="button in toolbarButtons"
          v-show="button.visible"
          @click="onButtonClick(button.name)">{{ button.title }}</v-btn>
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
      drawerVisibility: state => state.navigation.drawerVisibility,
      toolbarButtons: state => state.navigation.toolbarButtons
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
    },
    onButtonClick (name) {
      switch (name) {
        case 'create':
          this.create()
          break
        case 'explore':
          this.routeToExplore()
          break
        case 'save':
          this.save()
          break
      }
    },
    save () {
      this.$store.dispatch({
        type: 'explore/save',
        look: {}
      })
    },
    routeToExplore () {
      const {name, params} = this.$store.state.route
      const isLookOrDatum = name === 'look' || name === 'datum'

      if (isLookOrDatum) {
        this.$router.push('/explore/' + params.name)
      }
    },
    create () {
      console.log('create')
    }
  },
  data () {
    return {
      drawerTitle: 'Zorko'
    }
  }
}
</script>

