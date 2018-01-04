<template>
  <v-list-tile avatar @click="onClick">
    <v-list-tile-avatar>
      <v-icon :class="[iconClass]">{{ icon }}</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>{{ title }}</v-list-tile-title>
      <v-list-tile-sub-title>{{ subtitle }}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn icon ripple>
        <v-icon color="grey lighten-1">info</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  export default {
    name: 'HomeDatumsPreview',
    props: {
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      name: {
        type: String,
        defaults: 'foo'
      }
    },
    computed: {
      iconClass () {
        return 'green white--text'
      },
      icon () {
        return 'call_merge'
      }
    },
    methods: {
      onClick () {
        this.$emit('openDatum', {
          name: this.name
        })
      }
    }
  }
</script>
