<template>
  <app-sub-layout :title="title">
    <v-layout wrap>
      <v-flex xs3>
        <v-card>
          <v-card-text>
            <v-subheader>Dimentions</v-subheader>
            <v-list>
              <v-list-tile avatar v-for="item in filters.dimentions" v-bind:key="item.text" @click="addFilter(item)">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <div>
                    <v-btn small color="primary" dark>+ Filter</v-btn>
                  </div>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <v-subheader>Mesures</v-subheader>
            <v-list>
              <v-list-tile avatar v-for="item in filters.mesures" v-bind:key="item.text" @click="addFilter(item)">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <div>
                    <v-btn small color="primary" dark>+ Filter</v-btn>
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
              <div>Data table</div>
            </template>
            <v-card>
              <v-card-title>
                <v-data-table
                  v-bind:headers="selectedFilters"
                  :items="getInitialData"
                  class="elevation-1"
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-right" v-for="filter in selectedFilters" :key="filter.index">
                      {{ props.item[filter.text] }}
                    </td>
                  </template>
                </v-data-table>
              </v-card-title>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </app-sub-layout>
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

      getInitialData () {
        return this.$store.state.data
      },
      filters () {
        const dimentions = []
        const mesures = []
        Object.keys(this.getInitialData[0]).forEach(key => {
          if (typeof this.getInitialData[0][key] === 'number') {
            mesures.push({text: key})
          } else {
            dimentions.push({text: key})
          }
        })
        return {
          dimentions: dimentions,
          mesures: mesures
        }
      },
      selectedFilters () {
        return this.$store.state.filters
      }
    },
    methods: {
      ...mapActions([
        'setInitialData',
        'addFilterToStore'
      ]),
      addFilter (filter) {
        this.addFilterToStore(filter)
        console.log('STORE', this.$store.state.filters)
      }
    },

    created () {
      this.setInitialData()
      console.log('Filetrs', this.filters)
    },
    data () {
      return {
        msg: 'I`m a explore',
        title: 'Explore',
        dimentions: [{
          title: 'Name'
        }, {
          title: 'Origin'
        }, {
          title: 'Year'
        }],
        mesures: [{
          title: 'Miles per Gallon'
        }, {
          title: 'Cylinders'
        }, {
          title: 'Displacement'
        }, {
          title: 'Horsepower'
        }, {
          title: 'Weight in lbs'
        }, {
          title: 'Acceleration'
        }]
      }
    }
  }
</script>

<style scoped>
  .u-move-top-left {
    margin-top: 50px;
    margin-left: 50px;
  }
</style>

