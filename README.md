# MatteoSetostaLearningAngularF26

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## API
This loads TV shows from the Tvmaze API

Documentation: https://www.tvmaze.com/api
Example Request: https://api.tvmaze.com/search/shows?q=girls

### Which Option I used
I used 'HttpClient'(Option A). My service already had the shows in a writable signal,
so i set the API response into that signal when it arrives. The signal 'isLoading' and
'error' drive the loading and error states on the list page.

### Why changes disappear on refresh
All edits, deletes, and added shows only change the in memory signal. The changes are never
sent to the API or saved in the browser, so it is all local. Refreshing the page just clears 
them and all the data is back to the APIs data.

## Lazy Loading
Before:

Initial chunk files | Names         |  Raw size | Estimated transfer size
main-6LG47Z62.js    | main          | 321.67 kB |                84.92 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 321.67 kB |                84.92 kB
After:

Initial chunk files | Names          |  Raw size | Estimated transfer size
chunk-CBLVRBQS.js   | -              | 261.76 kB |                72.19 kB
main-DE5A7F27.js    | main           |  11.37 kB |                 3.37 kB
chunk-RY73VL36.js   | -              | 544 bytes |               544 bytes
styles-5INURTSO.css | styles         |   0 bytes |                 0 bytes

                    | Initial total  | 273.67 kB |                76.10 kB

Lazy chunk files    | Names          |  Raw size | Estimated transfer size
chunk-7ZSJNDXY.js   | tv-show-form   |  48.23 kB |                10.65 kB
chunk-5UORZZW7.js   | tv-show-detail |   1.50 kB |               765 bytes

What Changed and Why?
I Changed the routes to loadComponets with import() so they each have their own chunk to load once.
The list page stays eager becuse it is the landing page and the user needs it immediately on load.
