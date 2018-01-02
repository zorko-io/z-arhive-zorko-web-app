<template>
  <v-layout wrap>
    <v-flex xs3>
      <ExploreFieldsPanel
        :dimentions="dimentions"
        :measures="measures"
        @changeFieldSelection="onFieldSelectionChange"
        @changeFilter="onFilterChange"
      />
    </v-flex>
    <v-flex xs8 style="margin-left: 10px">
      <Analysis
        :look="look"
        @changeFilterCondition="onChangeFilterCondition"
        @changeFilterValue="onChangeFilterValue"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  import Analysis from '../analysis/Analysis'
  import ExploreFieldsPanel from './ExploreFieldsPanel'

  import {createNamespacedHelpers} from 'vuex'
  const {mapGetters} = createNamespacedHelpers('explore/')

  export default {
    name: 'Explore',
    components: {
      ExploreFieldsPanel,
      Analysis
    },
    props: {
      lookName: {
        type: String
      }
    },
    computed: {
      ...mapGetters([
        'dimentions',
        'measures',
        'selectedFields'
      ]),
      spec () {
        return this.$store.state.explore.spec
      },
      data () {
        return this.$store.state.explore.data
      },
      filters () {
        return this.$store.state.explore.filters
      },
      look () {
        return {
          spec: this.spec,
          data: this.data,
          filters: this.filters,
          fields: this.selectedFields
        }
      }
    },
    methods: {
      onFieldSelectionChange (field) {
        this.$store.commit({
          type: 'explore/toggleFieldSelection',
          field
        })
      },
      onFilterChange (field) {
        this.$store.commit({
          type: 'explore/toggleFilter',
          field
        })
      },
      onChangeFilterCondition (filter, condition) {
        this.$store.commit({
          type: 'explore/setFilterCondition',
          filter,
          condition
        })
      },
      onChangeFilterValue (filter, value) {
        this.$store.commit({
          type: 'explore/setFilterValue',
          filter,
          value
        })
      }
    },
    created () {
      const lookName = this.lookName
      this.$store.dispatch({
        type: 'explore/loadData',
        lookName
      })
    },
    data () {
      return {
        title: 'Explore'
      }
    }
  }
</script>

