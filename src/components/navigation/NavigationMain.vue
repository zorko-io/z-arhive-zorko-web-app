<template>
   <div>
      <NavigationMainDrawer
        :visibility="drawerVisibility"
        :fullscreen="fullscreen"
        :items="items"
        :title="drawerTitle"
        @changeDrawerVisibility="onChangeDrawerVisibility"
      />
      <NavigationMainToolbar
        :title="toolbarTitle"
        @toggleDrawerVisibility="onChangeDrawerVisibility"
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

