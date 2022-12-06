# Menus

Menus component. Usefull to create navigation menus. Triggered on hover.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <VMenus :items="items" />
</template>
```

<LivePreview src="components-menus--default" />

::: info
The `VMenus` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Right

```vue
<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <VMenus :items="items" right />
</template>
```

<LivePreview src="components-menus--right" />

### Small

```vue
<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <VMenus :items="items" small />
</template>
```

<LivePreview src="components-menus--small" />

### In `AppBar`

```vue
<script setup lang="ts">
import VAppBar from '@gits-id/app-bar';

const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <div class="space-y-2">
    <VAppBar shadow>
      <span class="font-semibold mr-4">Default</span>
      <nav aria-label="Nav" class="flex gap-3 items-center">
        <VMenus label="Home" :items="items" />
        <VMenus label="About" :items="items" />
        <VMenus label="Profile" :items="items" />
      </nav>
    </VAppBar>
    <VAppBar shadow>
      <span class="font-semibold mr-4">Small</span>
      <nav aria-label="Nav" class="flex gap-3 items-center">
        <VMenus label="Home" :items="items" small />
        <VMenus label="About" :items="items" small />
        <VMenus label="Profile" :items="items" small />
      </nav>
    </VAppBar>
    <VAppBar shadow class="flex justify-between">
      <span class="font-semibold mr-4">Right</span>
      <nav aria-label="Nav" class="flex gap-3 items-center">
        <VMenus label="Home" :items="items" right />
        <VMenus label="About" :items="items" right />
        <VMenus label="Profile" :items="items" right />
      </nav>
    </VAppBar>
  </div>
</template>
```

<LivePreview src="components-menus--in-app-bar" />

### Slots

```vue
<template>
  <VMenus label="Account">
    <template #items>
      <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
      <VMenusItem prepend-icon="ri:settings-4-line"> Preferences </VMenusItem>
      <VMenusItem divider />
      <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
    </template>
  </VMenus>
</template>
```

<LivePreview src="components-menus--slots" />

## Custom Style

```vue
<script setup lang="ts">
import VAppBar from '@gits-id/app-bar';
import VMenus from '../VMenus.vue';
import VMenusItem from '../VMenusItem.vue';
</script>

<template>
  <div class="h-screen">
    <VAppBar shadow color="primary">
      <VMenus
        label="Account"
        popper-class="custom"
        items-class="!backdrop-blur-2xl !bg-white/30"
        :items-style="{
          '--v-menus-item-hover-bg-color': '#28A0F6',
          '--v-menus-item-hover-text-color': 'white',
        }"
      >
        <template #items>
          <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
          <VMenusItem prepend-icon="ri:settings-4-line">
            Preferences
          </VMenusItem>
          <VMenusItem divider />
          <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
        </template>
      </VMenus>
    </VAppBar>
    <div class="p-6">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
        justo turpis. Nullam tempor semper purus vel ullamcorper. In hac
        habitasse platea dictumst. Nullam ornare erat aliquet ex feugiat, in
        lobortis augue tincidunt. Nulla viverra risus a malesuada tristique.
        Mauris venenatis libero leo, eget tincidunt justo luctus vel. Nullam et
        cursus dolor. Etiam eget metus at dui sodales malesuada in a libero.
        Quisque eleifend pretium eros at luctus. Curabitur hendrerit tortor id
        enim viverra ullamcorper. In ac velit elit. Donec suscipit ligula id
        elit lobortis, at ullamcorper leo molestie. Donec pulvinar porta tortor,
        nec semper metus tincidunt non. Sed pulvinar sapien in sapien
        scelerisque blandit. Fusce egestas nunc et egestas rutrum. Vestibulum
        interdum eros sed massa gravida interdum. Morbi libero mauris, viverra
        vitae iaculis maximus, bibendum non mi. Integer viverra placerat neque
        vulputate gravida. Duis luctus facilisis euismod. In nec pulvinar odio,
        sed ullamcorper felis. Cras hendrerit enim et quam commodo, eu congue
        ligula cursus. Suspendisse mi sapien, aliquet ac leo in, tristique
        euismod augue. Curabitur congue finibus nulla ac suscipit. Aenean eget
        ex viverra, fringilla ex fermentum, porta nunc. In hac habitasse platea
        dictumst. Phasellus facilisis turpis nec interdum pulvinar. Fusce semper
        vestibulum nibh, et imperdiet nunc laoreet tristique. Nullam diam dui,
        dignissim at aliquam vel, aliquet ut nunc. In molestie sapien eros, nec
        tempor sem scelerisque eget. Donec et vehicula justo, et pharetra diam.
        Integer ullamcorper ante felis, ac gravida leo luctus quis. Morbi
        convallis velit nisi, non ultrices felis placerat nec. In tempus eget
        risus sit amet bibendum. Phasellus at nisl fermentum, posuere diam
        porta, pulvinar nisl. Fusce ut nulla at mi sodales porttitor. Sed ante
        nisl, euismod egestas egestas a, porttitor ac nisl. Vivamus quis metus
        at nibh rhoncus pellentesque. Quisque vitae turpis bibendum, lacinia leo
        a, volutpat turpis. Aenean a aliquet orci. Morbi auctor, massa id
        iaculis elementum, mi eros congue ipsum, in tristique libero dui quis
        urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Pellentesque at auctor ante. Nunc nec blandit
        diam. Cras ac ipsum in quam mollis fringilla. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nulla et viverra augue, sed
        scelerisque urna. Nunc id mi velit. Integer et orci massa. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Maecenas vulputate id erat vel sodales. Nulla in mauris eu tortor
        pharetra fermentum ut quis nisi. Nullam ut varius nisl. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Sed sit amet arcu quis magna blandit laoreet. Quisque viverra a
        ante sed tincidunt. Vestibulum et finibus mi, vitae convallis tortor.
        Sed placerat dolor ornare nibh aliquet commodo. Suspendisse potenti.
      </p>
    </div>
  </div>
</template>

<style>
.custom {
  --v-menus-popper-border: none;
}
</style>
```

<LivePreview src="components-menus--custom-style" />

## Props

| Name                        | Type                                                                                                | Default                  |
| --------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------ |
| [`items`](#items)           | [`VMenuItem[]`](#VMenuItem)                                                                         | `[]`                     |
| [`right`](#right)           | `Boolean`                                                                                           | `false`                  |
| [`small`](#small)           | `Boolean`                                                                                           | `false`                  |
| ~~rightIcon~~               | `Boolean`                                                                                           | `false`                  |
| [`btnClass`](#btnClass)     | `String`                                                                                            | `''`                     |
| [`btnIcon`](#btnIcon)       | `String`                                                                                            | `'ri:arrow-down-s-line'` |
| [`btnIconClass`](#btnClass) | `String`                                                                                            | `''`                     |
| [`placement`](#placement)   | `String`. See [available options](https://floating-vue.starpad.dev/guide/component.html#placements) | `'bottom-start'`         |
| [`label`](#label)           | `String`                                                                                            | `'Menu'`                 |

- [`VMenuItem`](#VMenuItem)

```ts
export interface VMenuItem {
  icon?: string;
  text: string;
  to?: string;
  onClick?: () => void;
}
```

::: info

- ❌ = deprecated
- ~~propName~~ = deprecated
  :::

## Methods

None

## Events

None

## Slots

- [`default`](#default): used as menu activator.

```vue
<template>
  <VMenus>
    <button>Account</button>
    <template #items>
      <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
      <VMenusItem prepend-icon="ri:settings-4-line"> Preferences </VMenusItem>
      <VMenusItem divider />
      <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
    </template>
  </VMenus>
</template>
```

- [`items`](#items): used to place menu items.

```vue
<template>
  <VMenus label="Account">
    <template #items>
      <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
      <VMenusItem prepend-icon="ri:settings-4-line"> Preferences </VMenusItem>
      <VMenusItem divider />
      <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
    </template>
  </VMenus>
</template>
```

## CSS Variables

```css
:root {
  --v-menus-popper-border: 1px solid #ddd;
  /* menus */
  --v-menus-margin-y: theme('margin.0');
  --v-menus-margin-x: theme('margin.0');
  --v-menus-padding-y: theme('padding.1');
  --v-menus-padding-x: theme('padding.1');
  --v-menus-width: theme('width.56');
  --v-menus-bg-color: theme('colors.white');
  --v-menus-border-width: 1px;
  --v-menus-border-style: solid;
  --v-menus-border-color: theme('colors.transparent');
  --v-menus-box-shadow: theme('boxShadow.DEFAULT');
  --v-menus-border-radius: theme('borderRadius.DEFAULT');
  --v-menus-opacity: 1;

  /* button */
  --v-menus-button-icon-color: theme('colors.gray.500');

  /* item */
  --v-menus-item-padding-y: theme('spacing.2');
  --v-menus-item-padding-x: theme('spacing.3');
  --v-menus-item-bg-color: theme('colors.transparent');
  --v-menus-item-text-color: theme('colors.gray.800');
  --v-menus-item-font-size: theme('fontSize.base');
  --v-menus-item-font-weight: theme('fontWeight.normal');
  --v-menus-item-transition: all 0.2s ease-in-out;
  --v-menus-item-text-align: left;
  --v-menus-item-justify-content: flex-start;
  --v-menus-item-gap: theme('gap.4');
  --v-menus-item-border-radius: theme('borderRadius.DEFAULT');

  /* item hover */
  --v-menus-item-hover-bg-color: theme('colors.gray.100');
  --v-menus-item-hover-text-color: theme('colors.gray.800');

  /* arrow */
  --v-menus-arrow-border-color: theme('colors.white');
}
```

## Manual Installation

You can also install the `Menus` component individually via `@gits-id/menus` package:

```bash
# with npm
npm install @gits-id/menus
# or with yarn
yarn add @gits-id/menus
# or with pnpm
pnpm add @gits-id/menus
```

```vue
<script setup lang="ts">
import VMenus from '@gits-id/menus';
</script>

<template>
  <VMenus />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-menus--default).
