# Webstorm + Yarn Monorepo testing

## Getting Started:

1. Clone this project:
   ```
   git clone https://github.com/rusnyder/yarn-workspaces-webstorm
   ```
2. Install it
   ```
   cd yarn-workspaces-webstorm
   yarn install
   yarn build
   ```
3. Open project in Webstorm
4. Check for issues


## Known Webstorm Issues

* Missing `dist` directories in Project and Project Files explorer:
  * `packages/foo/dist`
  * `apps/echo/dist`
* "Go to Declaration" broken in several ways
  * Open `apps/echo/src/index.ts` and look for `GTD` comments to showcase