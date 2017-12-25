<template>
   <div>
      <NavigationMainDrawer
        :hidden="drawer"
        :items="items"
        :title="drawerTitle"
      />
      <NavigationMainToolbar
        :title="toolbarTitle"
        @toggleDrawer="onDrawerToggle"
      >
        <slot></slot>
      </NavigationMainToolbar>
   </div>
</template>

<script>
  import NavigationMainDrawer from './NavigationMainDrawer.vue'
  import NavigationMainToolbar from './NavigationMainToolbar.vue'

  import {mapState} from 'vuex'

  export default {
    name: 'NavigationMain',
    components: {
      NavigationMainDrawer,
      NavigationMainToolbar
    },
    computed: {
      ...mapState({
        items: state => state.navigation.items,
        drawer: state => state.navigation.drawer
      }),
      toolbarTitle () {
        return this.$store.state.route.meta.title
      }
    },
    methods: {
      onDrawerToggle () {
        this.$store.dispatch({
          type: 'navigation/toggleDrawer'
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

