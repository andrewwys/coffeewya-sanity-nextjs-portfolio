export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6004285c34bcdab93cb34837',
                  title: 'Sanity Studio',
                  name: 'coffeewya-sanity-nextjs-portfolio-studio',
                  apiId: '78205780-50e0-48dc-bb39-70ca063f1920'
                },
                {
                  buildHookId: '6004285c59b42bf8da1bc31c',
                  title: 'Landing pages Website',
                  name: 'coffeewya-sanity-nextjs-portfolio',
                  apiId: '2c01f7f1-9ba7-4d31-b519-5c2ddb8e7f66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coffeewya/coffeewya-sanity-nextjs-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://coffeewya-sanity-nextjs-portfolio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
