# Docs

20% in apps
80% in libs

- UC: source code sharing between mobile and web frontends, flutter

## Build System

- [x] create and rename a lib -> component and export it in index.js as public API

```
nx g @nrwl/react:lib ui --directory=component-library
nx g @nrwl/react:component todos --project=ui --export
nx g remove --project=component-library-ui
```

Run multiple projects

```
nx run-many --all --target=build
```
