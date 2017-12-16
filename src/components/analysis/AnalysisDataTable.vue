<template>
  <v-expansion-panel expand>
    <v-expansion-panel-content>
      <template slot="header">
        <div>Data table</div>
      </template>
      <v-card>
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
    </v-expansion-panel-content>
  </v-expansion-panel>
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
