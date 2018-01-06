<template>
  <v-card>
    <v-card-text>
      <v-subheader>Fields</v-subheader>
      <v-list>
        <v-list-tile
          avatar
          v-for="field in fields"
          :key="field.text">
          <v-list-tile-content>
            <v-list-tile-title>{{ field.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ZDatumFieldsPanel',
  props: {
    fields: {
      type: Array
    }
  }
}
</script>
