# MAPC Design System

This is a small experimental library connected to the [npm registry](https://www.npmjs.com/package/mapc-design-system). As such, use with care when implementing components into a production site. A few TypeScript-based MAPC sites use the Footer component from version 2.0.0, but due to compilation issues it is not necessarily stable in regular JavaScript projects.

For local development, add `SKIP_PREFLIGHT_CHECK=true` to your .env file.

## Development
```
yarn install
yarn start
yarn storybook
```

## Testing
```
yarn test
```

## Deployment
`yarn build` and `yarn build-storybook`, then push code to `main` branch. Storybook site should automatically redeploy to Github Pages.

To push a new version to the npm registry, make sure you are logged into the MAPC Digital Services npm account (check Dashlane) and run `yarn publish`

## Going forward
This library was built on top of Create React App, which in hindsight was not the best choice. In order for this to be a fully-functioning component library, a few things need adjusting:
1. Remove CRA artifacts (easiest route might be copying component code into a separate repo and starting fresh rather than trying to carve out CRA)
2. Configure build script to process TypeScript into JavaScript while still keeping typechecking available with a `.d.ts` file
3. Build a more robust test suite beyond Storybook click-testing
