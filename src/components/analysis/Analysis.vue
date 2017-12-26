<template>
  <v-flex xs12>
    <v-expansion-panel expand>
      <v-expansion-panel-content>
        <template slot="header">
          <div>Filters</div>
        </template>
        <AnalysisFiltersPanel
          :filters="look.filters"
          @changeFilterCondition="onChangeFilterCondition"
          @changeFilterValue="onChangeFilterValue"
        />
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <template slot="header">
          <div>Visualization</div>
        </template>
        <AnalysisVisualization
          :spec="look.spec"/>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <template slot="header">
          <div>Data table</div>
        </template>
        <AnalysisDataTable
          :fields="look.fields"
          :data="look.data"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>

<script>
  import AnalysisDataTable from './AnalysisDataTable'
  import AnalysisVisualization from './AnalysisVisualization'
  import AnalysisFiltersPanel from './AnalysisFiltersPanel'

  export default {
    name: 'Analysis',
    props: {
      look: {
        type: Object
      }
    },
    components: {
      AnalysisFiltersPanel,
      AnalysisVisualization,
      AnalysisDataTable
    },
    methods: {
      onChangeFilterCondition (filter, condition) {
        this.$emit('changeFilterCondition', filter, condition)
      },
      onChangeFilterValue (filter, value) {
        this.$emit('changeFilterValue', filter, value)
      }
    }
  }
</script>
