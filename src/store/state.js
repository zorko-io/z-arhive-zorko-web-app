export default function () {
  return {
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
          name: 'library',
          path: '/library'
        },
        {
          icon: 'highlight',
          title: 'Explore',
          component: 'explore',
          name: 'explore',
          path: '/explore',
          children: []
        },
        {
          icon: 'bubble_chart',
          title: 'Model',
          path: '/model',
          name: 'model',
          component: 'model',
          children: []
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
  }
}
