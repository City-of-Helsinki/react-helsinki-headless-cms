import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    './src/common/headlessService/__generated__.ts': {
      documents: './src/common/headlessService/graphql/*.graphql',
      schema: process.env.CMS_GRAPHQL_ENDPOINT,
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withComponent: false,
        flattenSelectionSet: true,
      },
      hooks: {
        afterOneFileWrite: ['prettier --write'],
      },
    },
    './src/common/eventsService/__generated__.ts': {
      documents: './src/common/eventsService/graphql/*.graphql',
      schema: process.env.EVENTS_GRAPHQL_ENDPOINT,
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withComponent: false,
        flattenSelectionSet: true,
      },
      hooks: {
        afterOneFileWrite: ['prettier --write'],
      },
    },
    './src/common/venuesService/__generated__.ts': {
      documents: './src/common/venuesService/graphql/*.graphql',
      schema: process.env.VENUES_GRAPHQL_ENDPOINT,
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withComponent: false,
        flattenSelectionSet: true,
      },
      hooks: {
        afterOneFileWrite: ['prettier --write'],
      },
    },
  },
};

export default config;
