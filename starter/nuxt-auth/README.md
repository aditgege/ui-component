# nuxt-auth

A Nuxt theme to get authentication ready with [nuxt-auth](https://sidebase.io/nuxt-auth/getting-started) and GITS UI.

## Features

- Integrated with [GITS UI](https://gitsindonesia.github.io/ui-component/)
- Authentication with [nuxt-auth](https://sidebase.io/nuxt-auth/getting-started)
- Built-in Pages:
  - Login
  - Register
  - Forgot Password
- Customizable via Nuxt Layer
- Configurable via `app.config.ts`

## Demo

- [Online demo](https://gits-nuxt-auth.vercel.app/)
- [Source code](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-auth)
- Try it online on [Stackblitz](https://stackblitz.com/github/gitsindonesia/ui-component/tree/main/starter/nuxt-auth)

## Installation

```bash
npm i -D @gits-id/nuxt-auth
```

## Usage

Add it to the `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: '@gits-id/nuxt-auth',
});
```

## Configuration

You can change the default options for auth pages like redirect url and head options via `app.config.ts`.

You can checkout the default configuration in the [source of this file](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-auth/app.config.ts).

### Configuration example

```ts
export default defineAppConfig({
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/auth/login',
      home: '/',
    },
    head: {
      login: {
        title: 'Login',
      },
      protected: {
        title: 'Profile Page',
      },
    },
  },
});
```

## Auth Handler

The auth handle is located at `servers/api/auth/[...].ts`. Feel free to override the file if you want to customize the authentication methods or providers.

## Components

This theme comes with three components under `Auth` namespace.

- `AuthShell`: Two column layout to wrap the authentication page.
- `AuthSidebar`: Left side of the container to place such as illustration or image. By default comes with gradient background.
- `AuthForm`: Authentication form that include logic to login the user to the application.

### Customizating the components

To customize the components, just override the default components by creating file in your Nuxt app with the same as the theme.

| Component            | Path                                     |
| -------------------- | ---------------------------------------- |
| `AuthShell`          | `components/auth/AuthShell.vue`          |
| `AuthForm`           | `components/auth/AuthForm.vue`           |
| `AuthSidebar`        | `components/auth/AuthSidebar.vue`        |
| `AuthForgotPassword` | `components/auth/AuthForgotPassword.vue` |
| `AuthRegister`       | `components/auth/AuthRegister.vue`       |
| `AuthLayout`         | `components/auth/AuthLayout.vue`         |

## Pages

To customize the pages, just override the default pages by creating file in your Nuxt app with the same as the theme.

| Path                             | Description                                       |
| -------------------------------- | ------------------------------------------------- |
| `pages/auth/login.vue`           | The login page                                    |
| `pages/auth/register.vue`        | The register page                                 |
| `pages/auth/forgot-password.vue` | The forgot password page                          |
| `pages/protected.vue`            | The page that is protected with `auth` middleware |
| `pages/index.vue`                | The home page                                     |

## Authentication

Checkout the [official documentation](https://sidebase.io/nuxt-auth/getting-started) to learn more about `nuxt-auth`.

## GITS UI

Checkout the [official documentation](https://gitsindonesia.github.io/ui-component/) to
learn more about `GITS UI`.

## License

MIT
