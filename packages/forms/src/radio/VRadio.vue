<script setup lang="ts">
import {PropType} from 'vue';
import {useFormValue, ValidationMode} from '../composables';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  name: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  groupClass: {
    type: String,
    default: '',
  },
  hideError: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated
   */
  disabledClass: {
    type: String,
    default: 'disabled:text-gray-200 disabled:cursor-not-allowed',
  },
  errorClass: {
    type: String,
    default: '',
  },
  validationMode: {
    type: String as PropType<ValidationMode>,
    default: 'aggressive',
  },
});

type RadioValue = string | number | boolean;

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: RadioValue): void;
  }>();

const {errorMessage, uncontrolledValue, inputId} = useFormValue(props, emit);
</script>

<template>
  <div
    class="v-radio"
    :class="[
      wrapperClass,
      {
        'v-radio--error': !!errorMessage,
      },
    ]"
  >
    <div class="v-radio-wrapper" :class="groupClass">
      <input
        :id="id"
        v-model="uncontrolledValue"
        type="radio"
        :name="name"
        :value="value"
        class="v-radio-input"
        :class="inputClass"
        :aria-disabled="disabled"
        :disabled="disabled"
        v-bind="$attrs"
      />
      <label
        v-if="label"
        :for="inputId"
        class="v-radio-label"
        :class="labelClass"
      >
        {{ label }}
      </label>
    </div>
    <div
      v-if="errorMessage && !hideError"
      class="v-radio-error"
      :class="errorClass"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<style src="./VRadio.scss" lang="scss"></style>
