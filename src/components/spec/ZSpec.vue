<template>
  <v-layout wrap>
    <v-flex xs12>
      <ZAnalysisVisualization :spec="spec"></ZAnalysisVisualization>
    </v-flex>
  </v-layout>
</template>

<script>
import ZAnalysisVisualization from '../analysis/ZAnalysisVisualization'

/* eslint-disable */
const salesSpec ={
    "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
    "description": "A simple bar chart with embedded data.",
    "width": 800,
    "height": 400,
    "data": {
      "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLefpeYHjwgIQtymUOGd_hH9HiUHih3U93I_5I2iDugyc3TgSU2dWckv4Uf9Q8BC7DsuF7_PaZ_VtM/pub?gid=1769915099&single=true&output=csv",
      "format": {
        "type": "csv",
        "parse": {
          "Дата продажи": "date:'%Y-%m-%d'",
          "Внутренний номер": "string",
          "Наименование товара": "string",
          "Категория": "string",
          "Цена за пару(продажи),грн": "number",
          "Доход,грн": "number",
          "Размер": "string"
        }
      }
    },
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "Дата продажи", "timeUnit":"utcyearmonthdate",
        "type": "ordinal"
      },
      "y": {"field": "Цена за пару(продажи),грн", "type":"quantitative", "aggregate":"sum"}
    }
  }
;


export default {
  name: 'ZSpec',
  components: {
    ZAnalysisVisualization
  },
  props: {
    name: {
      type: String
    }
  },
  computed: {
    spec () {
      return salesSpec
    }
  }
}
</script>
