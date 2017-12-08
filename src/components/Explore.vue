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
        <v-card>
          <v-card-text>
            <v-subheader>Dimentions</v-subheader>
            <v-list>
              <v-list-tile avatar v-for="item in aggregators.dimentions" v-bind:key="item.text" @click="addAggregator(item)"
                           v-bind:class="{'selected': aggregatorIsSelected(item),  'unselected': !aggregatorIsSelected(item)}">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <div>
                    <v-btn small color="primary" dark v-if='!filterIsSelected(item.text)' v-on:click.stop="addFilter(item.text)">+ Filter</v-btn>
                    <v-btn small color="primary" dark v-if='filterIsSelected(item.text)' v-on:click.stop="addFilter(item.text)">- Filter</v-btn>
                  </div>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <v-subheader>Mesures</v-subheader>
            <v-list>
              <v-list-tile avatar v-for="item in aggregators.mesures" v-bind:key="item.text" @click="addAggregator(item)"
                           v-bind:class="{'selected': aggregatorIsSelected(item),  'unselected': !aggregatorIsSelected(item)}">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <div>
                    <v-btn small color="primary" dark v-if='!filterIsSelected(item.text)' v-on:click.stop="addFilter(item.text)">+ Filter</v-btn>
                    <v-btn small color="primary" dark v-if='filterIsSelected(item.text)' v-on:click.stop="addFilter(item.text)">- Filter</v-btn>
                  </div>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs8 >
        <v-expansion-panel expand class="u-move-top-left">
          <v-expansion-panel-content>
            <template slot="header">
              <div>Filter</div>
            </template>
            <v-card v-for="filter in selectedFilters">
              <v-card color="grey lighten-4" flat>
                  <v-card-text>
                    <v-container fluid>
                      <v-layout row wrap>
                        <v-flex xs4>
                          <v-subheader>{{ filter }}</v-subheader>
                        </v-flex>
                        <v-flex xs4>

                        </v-flex>
                        <v-flex xs4>

                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel expand class="u-move-left">
          <v-expansion-panel-content>
            <template slot="header">
              <div>Data table</div>
            </template>
            <v-card>
              <v-card-title>
                <v-data-table
                  v-bind:headers="selectedAggregators"
                  :items="exploreData"
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-right" v-for="aggregator in selectedAggregators" :key="aggregator.index">
                      {{ props.item[aggregator.text] }}
                    </td>
                  </template>
                </v-data-table>
              </v-card-title>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import AppSubLayout from '@/components/AppSubLayout'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Explore',
    components: {
      AppSubLayout
    },
    computed: {
      ...mapGetters([
        'isAuthenticated'
      ]),
      aggregators () {
        return this.$store.state.aggregators
      },
      exploreData () {
        return this.$store.state.data
      },
      selectedAggregators () {
        return this.$store.state.selectedAggregators
      },
      selectedFilters () {
        return this.$store.state.selectedFilters
      }
    },
    methods: {
      ...mapActions([
        'setInitialData',
        'addRemoveAggregatorToStore',
        'addRemoveFilterToStore',
        'setAllAggregators'
      ]),
      addAggregator (aggregator) {
        this.addRemoveAggregatorToStore(aggregator)
      },
      aggregatorIsSelected (aggregator) {
        let isSelected = false
        this.selectedAggregators.forEach(selectedAggregator => {
          if (selectedAggregator.text === aggregator.text) {
            isSelected = true
          }
        })
        return isSelected
      },
      addFilter (filter) {
        this.addRemoveFilterToStore(filter)
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
      this.setAllAggregators()
    },
    data () {
      return {
        msg: 'I`m an explore',
        title: 'Explore'
      }
    }
  }
</script>

<style scoped>
  .u-move-top-left {
    margin-top: 50px;
    margin-left: 50px;
  }
  .u-move-left {
    margin-top: 1px;
    margin-left: 50px;
  }
  .selected {
    background-color: #c0c0c6;
  }
  .unselected {

  }
</style>

