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
          />
        </v-flex>
        <v-flex xs8 >
          <!--TODO: move to filters component-->
          <!--<v-expansion-panel expand>-->
            <!--<v-expansion-panel-content>-->
              <!--<template slot="header">-->
                <!--<div>Filter</div>-->
              <!--</template>-->
              <!--<v-card v-for="filter in selectedFilters">-->
                <!--<v-card color="grey lighten-4" flat>-->
                  <!--<v-card-text>-->
                    <!--<v-container fluid>-->
                      <!--<v-layout row wrap>-->
                        <!--<v-flex xs4>-->
                          <!--<v-subheader>{{ filter }}</v-subheader>-->
                        <!--</v-flex>-->
                        <!--<v-flex xs4>-->

                        <!--</v-flex>-->
                        <!--<v-flex xs4>-->

                        <!--</v-flex>-->
                      <!--</v-layout>-->
                    <!--</v-container>-->
                  <!--</v-card-text>-->
                <!--</v-card>-->
              <!--</v-card>-->
            <!--</v-expansion-panel-content>-->
          <!--</v-expansion-panel>-->
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
  import VueVega from 'vue-vega'
  const {VegaLiteComponent} = VueVega

  import {mapGetters} from 'vuex'

  export default {
    name: 'Explore',
    components: {
      AppSubLayout,
      ExploreFieldsPanel,
      ExploreDataTable,
      Visualization: VegaLiteComponent
    },
    computed: {
      ...mapGetters([
        'isAuthenticated',
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
      selectedFilters () {
        return this.$store.state.selectedFilters
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
      addFilter (filter) {
        this.$store.commit({
          type: 'addRemoveFilter',
          filter
        })
      },
      filterIsSelected (filter) {
        let isSelected = false
        this.selectedFilters.forEach(selectedFilter => {
          if (selectedFilter === filter) {
            isSelected = true
          }
        })
        return isSelected
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

