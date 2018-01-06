<template>
  <v-card>
    <v-card-title>
      <div>
        <div class="headline util-pointer js-ZHomeDatumsPreview-title"
             @click="onClick">{{ title }}</div>
        <span class="grey--text">connected to
          <a class="grey--text"
             :href="connection">
            {{ connection }}
          </a>
        </span>
        <br>
        <span>{{ description }}</span>
        <br>
        <span style="margin-right: 10px">
          <v-icon>info</v-icon>
          <a :href="info.site">
            {{ info.name }}
          </a>
        </span>
        <span class="grey--text">{{ looksCount }} looks created</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'ZHomeDatumsPreview',
  props: {
    name: {
      type: String
    },
    title: {
      type: String
    },
    connection: {
      type: String
    },
    description: {
      type: String
    },
    info: {
      type: Object
    },
    looksCount: {
      type: Number
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

<style scoped>
  .util-pointer {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
