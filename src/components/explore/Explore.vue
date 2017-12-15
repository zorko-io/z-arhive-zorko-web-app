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
          <ExploreFiltersPanel
            :filters="filters"
            @changeFilterCondition="onChangeFilterCondition"
            @changeFilterValue="onChangeFilterValue"
          />
          <ExploreVisualization :spec="spec" />
          <ExploreDataTable
            :fields="selectedFields"
            :data="data"
          />
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import AppSubLayout from '@/components/AppSubLayout'
  import ExploreFieldsPanel from '@/components/explore/ExploreFieldsPanel'
  import ExploreDataTable from '@/components/explore/ExploreDataTable'
  import ExploreVisualization from '@/components/explore/ExploreVisualization'
  import ExploreFiltersPanel from '@/components/explore/ExploreFiltersPanel'

  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters } = createNamespacedHelpers('explore/')

  export default {
    name: 'Explore',
    components: {
      AppSubLayout,
      ExploreFieldsPanel,
      ExploreFiltersPanel,
      ExploreVisualization,
      ExploreDataTable
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

