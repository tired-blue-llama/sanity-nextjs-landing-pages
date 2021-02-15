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
                  buildHookId: '602a6c7a24ed4f44627b5cb7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-594p3xkc',
                  apiId: '8c92bdcd-b959-4571-a5c8-d22caeb76f57'
                },
                {
                  buildHookId: '602a6c7b25e903eba0fc99fb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eoyw77kt',
                  apiId: 'ce8cc01b-2e7c-404c-8ccd-2d4c5c14b3bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tired-blue-llama/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eoyw77kt.netlify.app', category: 'apps'}
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
