# GROCERY LIST APP

This is a [**React Native**](https://reactnative.dev) test task project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## What's configured?

- **[FSD Architecture](https://feature-sliced.design/)**
- **[React Query](https://tanstack.com/query/latest)** — server state management
- **[Zustand](https://github.com/pmndrs/zustand)** — client state
- **[React Hook Form](https://react-hook-form.com/)** + [**Zod**](https://zod.dev/) — form validation
- **[JSON Server](https://github.com/typicode/json-server)** — mock API
- **[React Native Config](https://github.com/luggit/react-native-config)** — `.env` support
- **Prettier** config
- **[Husky](https://github.com/typicode/husky)** + **lint-staged**)
- **Custom error handling and toast system**

## How to start project

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step.

### Step 1: Install dependencies

Run this in the project root:

```bash
yarn
```

If you use iOS, it is also needed:

```bash
yarn pods
```

### Step 2: Set up your `.env` file

Create a `.env` file in the project root with the following content.

```bash
API_URL=http:your_localhost:3001
```

### Step 3: Start server

```bash
yarn server-start
```

### Step 4: Run the app

For Android:

```bash
yarn android
```

For IOS:

```bash
yarn ios
```

## Available commands

- `dev` — start Metro bundler with cache reset
- `pods` — install iOS CocoaPods
- `android` — run Android debug build
- `android-release` — run Android release build
- `ios` — run iOS debug build
- `ios-release` — run iOS release build
- `clean-android` — clean Android build cache
- `lint` — run ESLint checks
- `lint:fix` — auto-fix ESLint errors
- `format` — format code with Prettier
- `tsc` — run TypeScript type check
- `test` — run tests
- `server-start` — start JSON server mock API

---

### Don't forget to configure your `.env` file correctly!

---

## Author

[Mykhail Ovsiannykov](https://www.linkedin.com/in/mikie-mac/)
