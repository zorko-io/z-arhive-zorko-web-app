<template>
  <v-card tile>
    <v-card-media
      class="util-pointer js-LibraryLook-image"
      :src="src"
      height="270px"
      width="361px"
      @click="onClick"
    >
    </v-card-media>
    <v-card-title
      @click="onClick"
      class="util-pointer js-LibraryLook-title-parent"
    >
      <div>
        <h6 class="grey--text util-bold">{{ title }}</h6>
      </div>
    </v-card-title>
    <v-card-actions class="white">
      <v-chip class="util-pointer">
        <v-avatar>
          <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
        </v-avatar>
        Trevor Hansen
      </v-chip>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'LibraryLook',
    props: {
      src: {
        type: String
      },
      title: {
        type: String
      },
      path: {
        type: String
      }
    },
    methods: {
      onClick () {
        this.$emit('openLook', {
          path: this.path,
          title: this.title
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
