<template>
  <v-card color="grey lighten-4" flat>
    <v-card-text>
      <v-container fluid>
        <ZAnalysisFiltersPanelItem
          v-for="filter in filters"
          :key="filter.text"
          :filter="filter"
          @changeCondition="onConditionChange"
          @changeValue="onValueChange"
        />
      </v-container>
      <v-btn small color="primary" @click="applyFilters">Apply filters</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import ZAnalysisFiltersPanelItem from './ZAnalysisFiltersPanelItem'

export default {
  name: 'ZAnalysisFiltersPanel',
  components: {
    ZAnalysisFiltersPanelItem
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
    },
    applyFilters () {
      this.$store.commit({
        type: 'explore/applyFilters'
      })
    }
  }
}
</script>
