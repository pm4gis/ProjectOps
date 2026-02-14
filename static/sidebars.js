/**
 * ProjectOps sidebar structure
 */

module.exports = {
  tutorialSidebar: [
    'intro',
    'what-is-projectops',

    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: [
        'concepts/lifecycle',
        'concepts/operating-principles',
        'concepts/roles-and-responsibilities',
      ],
    },

    {
      type: 'category',
      label: 'Core Model',
      collapsed: false,
      items: [
        'core-model/overview',
        'core-model/planningops',
        'core-model/buildops',
        'core-model/changeops',
        'core-model/valueops',
        'core-model/knowledgeops',
      ],
    },

    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/getting-started',
        'guides/running-your-first-projectops',
        'guides/integrating-existing-tools',
      ],
    },

    {
      type: 'category',
      label: 'Templates',
      collapsed: true,
      items: [
        'templates/project-brief-template',
        'templates/decision-log-template',
        'templates/benefits-register-template',
        'templates/change-impact-template',
      ],
    },

    'glossary',
  ],
};
