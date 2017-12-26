<template>
  <v-container>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small color="primary" :to="pathToExplore">Explore</v-btn>
    </v-toolbar>
    <v-slide-y-transition mode="out-in">
      <v-layout wrap>
        <v-flex xs12>
          <Analysis
            :look="look"
          />
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import Analysis from '../analysis/Analysis'

  import {createNamespacedHelpers} from 'vuex'
  const {mapState} = createNamespacedHelpers('look/')

  export default {
    name: 'Look',
    components: {
      Analysis
    },
    props: {
      name: {
        type: String
      }
    },
    computed: {
      ...mapState([
        'spec',
        'data',
        'filters',
        'fields'
      ]),
      look () {
        return {
          spec: this.spec,
          data: this.data,
          filters: this.filters,
          fields: this.fields
        }
      },
      pathToExplore () {
        return '/explore/' + this.name
      }
    },
    created () {
      const name = this.name
      this.$store.dispatch({
        type: 'look/loadLook',
        name
      })
    },
    data () {
      return {
        title: 'Look'
      }
    }
  }
</script>
