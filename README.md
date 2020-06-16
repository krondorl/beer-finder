# BeerFinder

## Task description

Hi!

Your task is to build a simple beer finder application, with a makeshift user system. This is how it should work:

The first screen the user sees is the login screen. The username input field is required, maximum 16 characters are allowed. After typing in your username, instead of a password authentication, you should call the YesNo API (https://yesno.wtf/api). If the answer property is 'yes', the user is logged in and taken to the beer listing. If the answer property is 'no', the user is not logged in, and you should display an error label on the login screen.

When the user is logged in, the username is on the header, with a logout button. The user should stay logged in until the user clicks the logout button.

The beer listing and the beer details site is only available after a successful login. For the data, use the Punk API v2 (https://punkapi.com/). On the listing page, you should be able to filter the beers by their names and by a range of ABV (alcohol by volume) percentage. The pagination method is up to you, whether you want to do pages or infinite scrolling, the only requirement is that after a back button navigation from a detail page, the user should get back to the exact position of listing. When clicking on a beer, the user should be taken to the details page.

APIs:

- https://yesno.wtf/api
- https://punkapi.com/

Pages:

- login
- listing
- details

Bonus:

- add styles in CSS or SCSS
- flexbox or grid layout preferred

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
