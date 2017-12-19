<template>
  <v-flex xs12>
    <AnalysisFiltersPanel
      :filters="look.filters"
      @changeFilterCondition="onChangeFilterCondition"
      @changeFilterValue="onChangeFilterValue"
    />
    <AnalysisVisualization
      :spec="look.spec"/>
    <AnalysisDataTable
      :fields="look.fields"
      :data="look.data"
    />
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
