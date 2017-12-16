<template>
  <v-expansion-panel expand>
    <v-expansion-panel-content>
      <template slot="header">
        <div>Filters</div>
      </template>
      <v-card v-for="filter in filters" :key="filter.text">
        <v-card color="grey lighten-4" flat>
          <v-card-text>
            <v-container fluid>
              <AnalysisFiltersPanelItem
                :filter="filter"
                @changeCondition="onConditionChange"
                @changeValue="onValueChange"
              />
            </v-container>
          </v-card-text>
        </v-card>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  import AnalysisFiltersPanelItem from './AnalysisFiltersPanelItem'

  export default {
    name: 'AnalysisFiltersPanel',
    components: {
      AnalysisFiltersPanelItem
    },
    props: {
      filters: {
        type: Array
      }
    },
    methods: {
      onConditionChange (field, condition) {
        this.$emit('changeFilterCondition', field, condition)
      },
      onValueChange (field, value) {
        this.$emit('changeFilterValue', field, value)
      }
    }
  }
</script>
