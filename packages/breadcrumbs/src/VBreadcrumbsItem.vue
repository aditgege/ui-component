<script setup lang="ts">
import {PropType, resolveComponent} from 'vue';
import type {VBreadcrumbItem} from './types';

defineProps({
  tag: {
    type: String,
    default: 'li',
  },
  title: {
    type: String,
    default: '',
  },
  to: {
    type: String as PropType<VBreadcrumbItem['to']>,
    default: '',
  },
  activeClass: {
    type: String,
    default: 'breadcrumbs-item--active',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const RouterLink = resolveComponent('RouterLink');
</script>

<template>
  <component
    :is="to ? RouterLink : tag"
    :to="to"
    class="breadcrumbs-item"
    :class="{
      'breadcrumbs-item--disabled': disabled,
      [activeClass]: active,
    }"
    :exact-active-class="activeClass"
  >
    <slot>
      {{ title }}
    </slot>
  </component>
</template>
