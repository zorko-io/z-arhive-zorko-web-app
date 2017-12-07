export default function () {
  return {
    isLoading: true,
    account: null,
    loginRequiredBy: null,
    data: [],
    selectedAggregators: [],
    selectedFilters: [],
    aggregators: [],
    exploreSpec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
      description: 'A simple bar chart with embedded data.',
      autosize: 'fit',
      data: {
        values: [
          {'a': 'A', 'b': 28}, {'a': 'B', 'b': 55}, {'a': 'C', 'b': 43},
          {'a': 'D', 'b': 91}, {'a': 'E', 'b': 81}, {'a': 'F', 'b': 53},
          {'a': 'G', 'b': 19}, {'a': 'H', 'b': 87}, {'a': 'I', 'b': 52}
        ]
      },
      mark: 'bar',
      encoding: {
        x: {'field': 'a', 'type': 'ordinal'},
        y: {'field': 'b', 'type': 'quantitative'}
      }
    },
    filters: [],
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
          icon: 'bubble_chart',
          title: 'Datums',
          path: '/datums',
          component: 'item'
        },
        {
          icon: 'perm_identity',
          title: 'Account',
          path: '/account/profile',
          component: 'item'
        }
      ]
    }
  }
}
