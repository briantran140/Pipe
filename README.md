# Pipes

This project is a simple Angular application that demonstrates the use of various Angular features such as pipes, components, and event handling. The app includes a payment form where users can input and display data in different formats using Angular pipes.

## Overview

The application includes the following features:

- **Payee Name:** An input field where the user can enter the name of the payee. The entered name is displayed in title case.
- **Payment Date:** An input field for selecting the payment date. The selected date is displayed in a formatted manner (e.g., "MMMM d, yyyy").
- **Payment Amount:** An input field for entering the payment amount. The entered amount is displayed in the USD currency format.
- **Height:** An input field for entering height. The entered height is displayed as a number without decimal places.
- **Miles to Kilometers Conversion:** An input field for entering a value in miles. The entered value is converted to centimeters using a custom pipe (`ConvertPipe`) and displayed with two decimal places.

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
