<script setup lang="ts">
import {Icon as Iconify} from '@iconify/vue/dist/offline';
import {loadIcon} from '@iconify/vue';
import {computed, ref, watch} from 'vue';
import {type DefaultSizes, defaultSizes} from '@gits-id/theme/defaultTheme';

export type Props = {
  name: string;
  size?: DefaultSizes | string | number;
};

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const isFetching = ref(false);
const icon = ref();

async function loadIconComponent() {
  isFetching.value = true;
  icon.value = await loadIcon(props.name).catch(() => {});
  isFetching.value = false;
}

watch(() => props.name, loadIconComponent);

const classes = computed(() => {
  return `v-icon v-icon--${props.size}`;
});

const style = computed(() => {
  if (!defaultSizes.includes(String(props.size))) {
    return {
        width: props.size,
        height: props.size,
    };
  }
  return {}
});

loadIconComponent();
</script>

<template>
  <span v-if="isFetching" :class="classes" :style="style" />
  <Iconify v-else-if="icon" :icon="icon" :class="classes" :style="style" />
  <span v-else>{{ name }}</span>
</template>

<style src="./Icon.scss" lang="scss"></style>
