<template>
  <v-container>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small color="primary" @click="saveExplore">Save</v-btn>
    </v-toolbar>
    <v-slide-y-transition mode="out-in">
      <v-layout wrap>
        <v-flex xs3>
          <ExploreFieldsPanel
            :dimentions="exploreDimentions"
            :measures="exploreMeasures"
            @changeFieldSelection="onFieldSelectionChange"
            @changeFilter="onFilterChange"
          />
        </v-flex>
        <v-flex xs8 style="margin-left: 10px">
          <ExploreFiltersPanel :filters="exploreFilters"/>
          <ExploreVisualization :spec="exploreSpec" />
          <ExploreDataTable
            :fields="exploreSelectedFields"
            :data="exploreData"
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

  import {mapGetters} from 'vuex'

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
        'exploreDimentions',
        'exploreMeasures',
        'exploreSelectedFields'
      ]),
      exploreSpec () {
        return this.$store.state.exploreSpec
      },
      exploreData () {
        return this.$store.state.data
      },
      exploreFilters () {
        return this.$store.state.exploreFilters
      }
    },
    methods: {
      onFieldSelectionChange (field) {
        this.$store.commit({
          type: 'toggleFieldSelection',
          field
        })
      },
      onFilterChange (field) {
        this.$store.commit({
          type: 'toggleFilter',
          field
        })
      },
      saveExplore () {
        this.$store.dispatch({
          type: 'saveExploreAsLook',
          look: {}
        })
      }
    },
    created () {
      this.$store.dispatch({
        type: 'setInitialData'
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

