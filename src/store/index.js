import { isEmpty } from 'lodash'
import zorkoApi from '@/api/zorkoApi'

export default {
  strict: true,
  state: {
    isLoading: true,
    account: null,
    workspace: {
      scopeId: 'uuid-scope-1',
      repositories: [
        {uri: 'org/user/repo1', description: 'blblblb'},
        {uri: 'org/user/repo2', description: 'alalalal'}
      ],
      scopes: [
        {
          id: 'uuid-scope-1',
          title: 'Vega Datasets',
          connections: [
            {name: 'connection-name-1', url: 'http://example.com/data1.json'},
            {name: 'connection-name-2', url: 'http://example.com/data2.json'},
            {name: 'connection-name-3', url: 'http://example.com/data3.json'}
          ],
          models: [{
            name: 'cars',
            documents: [{
              name: 'welcome.md'
            }],
            definitions: [{
              name: 'car.model.json'
            }],
            views: [{
              name: 'eu-metrics.view.json'
            }]
          },
          {
            name: 'population',
            documents: [{
              name: 'welcome.md'
            }],
            definitions: [{
              name: 'population.model.json'
            }],
            views: [{
              name: 'gender.view.json'
            }]
          },
          {
            name: 'weather',
            documents: [{
              name: 'welcome.md'
            }],
            definitions: [{
              name: 'weather.model.json'
            }],
            views: [{
              name: 'seattle.view.json'
            }]
          }
          ],
          explores: [
            {
              id: 'uuid-explore-group-1',
              type: 'group',
              title: 'Cars',
              children: [{
                id: 'uuid-explore-1',
                title: 'Horsepower'
              }, {
                id: 'uuid-explore-2',
                title: 'The Min/Max Whiskers'
              }
              ]
            },
            {
              id: 'uuid-explore-group-2',
              title: 'Population',
              type: 'group',
              children: [{
                id: 'uuid-explore-3',
                title: 'Gender',
                dimentions: [{
                  title: 'Name'
                }, {
                  title: 'Origin'
                }, {
                  title: 'Year'
                }],
                mesures: [{
                  title: 'Miles per Gallon'
                }, {
                  title: 'Cylinders'
                }, {
                  title: 'Displacement'
                }, {
                  title: 'Horsepower'
                }, {
                  title: 'Weight in lbs'
                }, {
                  title: 'Acceleration'
                }
                ]
              },
              {
                id: 'uuid-explore-group-3',
                title: 'Weather',
                type: 'group',
                children: [{
                  id: 'uuid-explore-4',
                  title: 'Seattle'
                }]
              }],
              looks: [{
                name: 'age-per-gender-for-2000',
                title: 'Age per Gender for 2000',
                model: {name: 'population'},
                explore: {id: 'uuid-explore-3'}

              }, {
                name: 'year-weather-in-seattle',
                title: 'Year Weather in Seattle',
                model: {name: 'weather'},
                explore: {id: 'uuid-explore-4'}
              }]
            }
          ]
        },
        {
          id: 'uuid-scope-2',
          title: 'Our World in Data',
          connections: [],
          models: [],
          explores: [],
          looks: []
        },
        {
          id: 'uuid-scope-3',
          title: 'Gapminder',
          connections: [],
          models: [],
          explores: [],
          looks: []
        }]
    },
    workspaceNavigation: {
      visible: true,
      items: [
        {
          icon: 'list',
          component: 'item',
          title: 'Library',
          path: '/library'
        },
        {
          icon: 'highlight',
          title: 'Explore',
          component: 'explore',
          path: '/explore',
          children: [{
            title: 'Cats',
            children: [{
              title: 'Horsepower',
              path: '/explore/1'
            }, {
              title: 'The Min/Max Whiskers',
              path: '/explore/2'
            }]
          }, {
            title: 'Population',
            children: [{
              title: 'Gender',
              path: '/explore/3'
            }]
          }, {
            title: 'Weather',
            children: [{
              title: 'Seattle',
              path: '/explore/4'
            }]
          }]
        },
        {
          icon: 'bubble_chart',
          title: 'Model',
          path: '/model',
          component: 'model',
          children: [{
            title: 'Cars',
            path: '/model/1'
          }, {
            title: 'Population',
            path: '/model/2'
          }, {
            title: 'Weather',
            path: '/model/3'
          }]
        },
        {
          icon: 'build',
          title: 'Admin',
          path: '/admin',
          component: 'group-item',
          children: [{
            title: 'Connections',
            path: '/admin/connections/'
          }]
        },
        {
          icon: 'perm_identity',
          title: 'Account',
          path: '/account',
          component: 'group-item',
          children: [{
            title: 'Profile',
            path: '/account/profile'
          }, {
            title: 'Repositories',
            path: '/account/repositories'
          }]
        }
      ]
    }
  },
  getters: {
    doesAnyAccountInfoAvailable (state) {
      return !isEmpty(state.account)
    },
    isAnonymAccount (state) {
      return state.account.name === '' && state.account.login === ''
    },

    isAuthenticated (state) {
      return state.account && state.account.name && state.account.login
    }
  },
  mutations: {
    stopLoading (state) {
      state.isLoading = false
    },
    setAccount (state, account) {
      state.account = account
    }
  },
  actions: {
    gatherAccountInfo ({commit, state, getters}) {
      const ANONYM_ACCOUNT = {name: '', login: ''}

      if (!getters.doesAnyAccountInfoAvailable) {
        zorkoApi
          .fetchAccountInfo()
          .then((account) => {
            console.log('Account', account)
            commit('setAccount', account)
            commit('stopLoading')
          })
          .catch((error) => {
            console.error(error)
            commit('setAccount', Object.assign({}, ANONYM_ACCOUNT))
            commit('stopLoading')
          })
      } else {
        commit('stopLoading')
      }
    }
  }
}
