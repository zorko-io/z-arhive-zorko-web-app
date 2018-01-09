<template>
  <v-layout wrap>
    <v-flex xs3>
      <ZExploreFieldsPanel
        :dimentions="dimentions"
        :measures="measures"
        @changeFieldSelection="onFieldSelectionChange"
        @changeFilter="onFilterChange"
      />
    </v-flex>
    <v-flex xs8 style="margin-left: 10px">
      <ZAnalysis
        :look="look"
        @changeFilterCondition="onChangeFilterCondition"
        @changeFilterValue="onChangeFilterValue"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import ZAnalysis from '../analysis/ZAnalysis'
import ZExploreFieldsPanel from './ZExploreFieldsPanel'

import {createNamespacedHelpers} from 'vuex'
const {mapGetters} = createNamespacedHelpers('explore/')

export default {
  name: 'Explore',
  components: {
    ZExploreFieldsPanel,
    ZAnalysis
  },
  props: {
    name: {
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
    this.$store.dispatch({
      type: 'explore/loadData',
      name: this.name
    })
  },
  data () {
    return {
      title: 'Explore'
    }
  }
}
</script>

