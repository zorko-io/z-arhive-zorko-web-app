<template>
  <v-card tile>
    <v-card-media
      class="util-pointer js-ZBaseLooksItem-image"
      :src="src"
      height="270px"
      width="361px"
      @click="onLookClick"
    >
    </v-card-media>
    <v-card-title
      @click="onLookClick"
      class="util-pointer js-ZBaseLooksItem-title-parent"
    >
      <div>
        <h6 class="grey--text util-bold">{{ title }}</h6>
      </div>
    </v-card-title>
    <v-card-actions class="white">
      <v-chip class="util-pointer">
        <v-avatar>
          <img
            :src="author.avatar"
            alt="trevor">
        </v-avatar>
        {{ author.login }}
      </v-chip>
      <v-spacer></v-spacer>
      <v-chip
        class="util-pointer js-ZBaseLooksItem-datum"
        @click="onDatumClick">
          <v-avatar>
            <v-icon class="green white--text">call_merge</v-icon>
          </v-avatar>
        {{ datum.name }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ZBaseLooksItem',
  props: {
    src: {
      type: String
    },
    title: {
      type: String
    },
    path: {
      type: String
    },
    author: {
      type: Object
    },
    datum: {
      type: Object
    }
  },
  methods: {
    onLookClick () {
      this.$emit('lookActivated', {
        path: this.path,
        title: this.title
      })
    },
    onDatumClick () {
      this.$emit('datumActivated', {
        name: this.datum.name
      })
    }
  }
}
</script>

<style scoped>
  .util-pointer {
    cursor: pointer;
  }

  .util-bold {
    font-weight: bold;
  }
</style>
