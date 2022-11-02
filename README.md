# mf-shared-isolated-apps

## Install:
Navigate to both `/app1` and `/app2` and run `npm install`

## Build:
Navigate to both `npm build`

## Notes:
Open `index.html` in your browser with dev tools console open.  You'll see both apps initialize.
You can see `app1` share scope at `window.app1SharedScope` and `app2` share scope at `window.app2SharedScope`.
Notice that they are not the same. 


![Scope not shared](https://raw.githubusercontent.com/dcesiel/mf-shared-isolated-apps/main/Screen%20Shot%202022-11-01%20at%204.43.47%20PM.png)

How can we share scope between these isolated apps?
