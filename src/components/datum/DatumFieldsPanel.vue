<template>
  <v-card>
    <v-card-text>
      <v-subheader>Fields</v-subheader>
      <v-list>
        <v-list-tile avatar v-for="field in fields">
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
    name: 'DatumFieldsPanel',
    data () {
      return {
        fields: [
          {
            'text': 'Name',
            'type': 'dimention'
          },
          {
            'text': 'Miles_per_Gallon',
            'type': 'measure'
          },
          {
            'text': 'Cylinders',
            'type': 'measure'
          },
          {
            'text': 'Displacement',
            'type': 'measure'
          },
          {
            'text': 'Horsepower',
            'type': 'measure'
          },
          {
            'text': 'Weight_in_lbs',
            'type': 'measure'
          },
          {
            'text': 'Acceleration',
            'type': 'measure'
          },
          {
            'text': 'Year',
            'type': 'dimention'
          },
          {
            'text': 'Origin',
            'type': 'dimention'
          }
        ]
      }
    }
  }
</script>
