<template>
  <v-card color="grey lighten-4">
    <v-card-title>
      <v-data-table
        :headers="fields"
        :items="data"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right"
              v-for="field in fields"
              :key="field.text">
            {{ props.item[field.text] }}
          </td>
        </template>
      </v-data-table>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    name: 'AnalysisDataTable',
    props: {
      fields: {
        type: Array
      },
      data: {
        type: Array
      }
    }
  }
</script>
