# Heroes

This app shows a list of superheroes from an API. Created for a coding challenge.

![React Native](https://img.shields.io/static/v1?label=React-Native&message=v0.68.0&color=6D21B4&style=for-the-badge&logo=react)  ![Typescript](https://img.shields.io/static/v1?label=Typescript&message=v4.4.4&color=2184B4&style=for-the-badge&logo=typescript)

---

## Setup & Run Locally

### Clone the project

```bash
  git clone https://github.com/DanielGaspar-Tru/Heroes.git
```

### Go to the project directory

```bash
  cd Heroes
```

### Install dependencies

```bash
  yarn
  cd ios && pod install && cd ..
```

`If you're having trouble installing dependencies, you may need to update the pod repos before installing the dependencies.`

```bash
  pod repo update
```

### Start the server

```bash
  yarn start
```

### Run

Run the mobile application with `yarn ios` or `yarn android`;

## Tech Stack

- React Native
- Typescript
- Redux

#### Linter Tools

- eslint
- prettier

#### Testing

- Jest

#### Libs

- react-navigation
- redux-toolkit
- axios

## Project Structure

./src

- components: application components following the Atomic Design pattern
- enums: app's enums
- features: redux toolkit slices
- globals: app's constants
- routes: app's routes and navigation structure
- services: api and axios setup
- store: redux store
- types: application types
- utils: utility functions and components for app and tests

## License

Licensed for users and contributors under MIT license.
[MIT](https://choosealicense.com/licenses/mit/)

---

Created by Daniel Gaspar
