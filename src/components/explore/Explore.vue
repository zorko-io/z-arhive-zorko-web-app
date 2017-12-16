<template>
  <v-container>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small color="primary" @click="applyFilters">Apply filters</v-btn>
      <v-btn small color="primary" @click="save">Save</v-btn>
    </v-toolbar>
    <v-slide-y-transition mode="out-in">
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
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import AppSubLayout from '@/components/AppSubLayout'
  import Analysis from '@/components/analysis/Analysis'
  import ExploreFieldsPanel from '@/components/explore/ExploreFieldsPanel'

  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters } = createNamespacedHelpers('explore/')

  export default {
    name: 'Explore',
    components: {
      AppSubLayout,
      ExploreFieldsPanel,
      Analysis
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
      },
      save () {
        this.$store.dispatch({
          type: 'explore/save',
          look: {}
        })
      },
      applyFilters () {
        this.$store.commit({
          type: 'explore/applyFilters'
        })
      }
    },
    created () {
      this.$store.dispatch({
        type: 'explore/loadData'
      })
    },
    data () {
      return {
        msg: 'I`m an explore',
        title: 'Explore'
      }
    }
  }
</script>

