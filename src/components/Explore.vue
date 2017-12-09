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
        <v-flex xs8 >
          <ExploreFiltersPanel
            :filters="exploreFilters"
          />
          <v-expansion-panel expand >
            <v-expansion-panel-content>
              <template slot="header">
                <div>Visualization</div>
              </template>
              <v-card>
                <v-card-title>
                  <Visualization :spec="exploreSpec"/>
                </v-card-title>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!--TODO: decouple data table from expand panel-->
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
  import ExploreFieldsPanel from '@/components/ExploreFieldsPanel'
  import ExploreDataTable from '@/components/ExploreDataTable'
  import ExploreFiltersPanel from '@/components/ExploreFiltersPanel'
  import VueVega from 'vue-vega'
  const {VegaLiteComponent} = VueVega

  import {mapGetters} from 'vuex'

  export default {
    name: 'Explore',
    components: {
      AppSubLayout,
      ExploreFieldsPanel,
      ExploreFiltersPanel,
      ExploreDataTable,
      Visualization: VegaLiteComponent
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
        debugger
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

