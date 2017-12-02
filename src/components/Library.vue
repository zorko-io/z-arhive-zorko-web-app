<template>
  <app-sub-layout :title="title">

      <v-layout wrap>
        <v-flex>
          <v-card>
            <v-toolbar color="light-blue" dark>
              <v-toolbar-title>Looks</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list two-line subheader>
              <v-list-tile
                avatar
                v-for="item in looks"
                :key="item.title"
                @click=""
                :to="item.path">
                <v-list-tile-avatar>
                  <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
  </app-sub-layout>
</template>

<script>
import AppSubLayout from '@/components/AppSubLayout'

export default {
  name: 'Library',
  components: {
    AppSubLayout
  },
  data () {
    return {
      msg: 'I`m a library',
      title: 'Library',
      items: [
        { title: 'Zorko Sandbox' },
        { title: 'Our World in Data' }
      ],
      looks: [{
        icon: 'assignment',
        iconClass: 'amber white--text',
        title: 'Age per Gender for 2000',
        subtitle: 'Model: `Population`',
        path: '/looks/age-per-gender-for-2000'
      }, {
        icon: 'assignment',
        iconClass: 'amber white--text',
        title: 'Year Weather in Seattle',
        subtitle: 'Model: `Weather`',
        path: '/looks/year-weather-in-seattle'
      }],
      selection: true,
      selectedRepo: 'zorko-sandbox'
    }
  }
}
</script>
