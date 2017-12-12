<template>
  <v-expansion-panel expand >
    <v-expansion-panel-content>
      <template slot="header">
        <div>Visualization</div>
      </template>
      <v-card>
        <v-card-title>
          <Visualization v-if="isSpecAvailable" :spec="spec"/>
          <div v-else>Select any filed to display visualization</div>
        </v-card-title>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  import VueVega from 'vue-vega'
  const {VegaLiteComponent} = VueVega

  export default {
    name: 'ExploreVisualization',
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
