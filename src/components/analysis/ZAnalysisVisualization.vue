<template>
  <v-card color="grey lighten-4">
    <v-card-title>
      <Visualization
        v-if="isSpecAvailable"
        :spec="spec"
        :width="600"
      />
      <div v-else>Select any filed to display visualization</div>
    </v-card-title>
  </v-card>
</template>

<script>
import VueVega from 'vue-vega'
const {VegaLiteComponent} = VueVega

export default {
  name: 'ZAnalysisVisualization',
  components: {
    Visualization: VegaLiteComponent
  },
  props: {
    spec: {
      type: Object
    }
  },
  computed: {
    isSpecAvailable () {
      return Boolean(this.spec)
    }
  }
}
</script>
