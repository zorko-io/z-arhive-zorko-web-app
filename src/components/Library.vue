<template>
  <app-sub-layout :title="title">
    <v-layout>
      <v-flex xs12>
        <v-toolbar flat>
          <v-toolbar-title>Popular Looks</v-toolbar-title>
        </v-toolbar>
        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
          <v-layout row wrap>
            <v-flex
              xs4
              v-for="card in cards"
              :key="card.title"
            >
              <v-card tile>
                <v-card-media
                  class="util-pointer"
                  :src="card.src"
                  height="270px"
                  width="361px"
                  @click="openLook(card)"
                >
                </v-card-media>
                <v-card-title
                  @click="openLook(card)"
                  class="util-pointer"
                >
                  <div>
                    <h7 class="grey--text util-bold">{{ card.title }}</h7>
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
            </v-flex>
          </v-layout>
        </v-container>
        <v-flex class="text-xs-center">
          <v-btn>Next ></v-btn>
        </v-flex>
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
        itemz: [
          {title: 'Zorko Sandbox'},
          {title: 'Our World in Data'}
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
        selectedRepo: 'zorko-sandbox',
        cards: [
          {
            title: 'Unemployment by Industries ',
            src: 'static/bar_layered_transparent.svg',
            path: '/looks/age-per-gender-for-2000'
          },
          {
            title: 'Unemployment Count',
            src: 'static/area.svg',
            path: '/looks/age-per-gender-for-2000'
          },
          {
            title: 'Population by gender',
            src: 'static/stacked_area_stream.svg',
            path: '/looks/age-per-gender-for-2000'
          },
          {
            title: 'Seattle Weather',
            src: 'static/stacked_bar_weather.svg',
            path: '/looks/year-weather-in-seattle'
          },
          {
            title: 'Stocks',
            src: 'static/layer_line_color_rule.svg',
            path: '/looks/year-weather-in-seattle'
          },
          {
            title: 'Github Punchcard',
            src: 'static/circle_github_punchcard.svg',
            path: '/looks/year-weather-in-seattle'
          }
        ],
        size: 'lg',
        items: [
          {text: 'Extra small (1px)', value: 'xs'},
          {text: 'Small (4px)', value: 'sm'},
          {text: 'Medium (8px)', value: 'md'},
          {text: 'Large (16px)', value: 'lg'},
          {text: 'Extra large (24px)', value: 'xl'}
        ]
      }
    },
    methods: {
      openLook (item) {
        this.$router.push(item.path)
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
