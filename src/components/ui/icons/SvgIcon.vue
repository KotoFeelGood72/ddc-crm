<template>
  <component :is="iconComponent" v-bind="attrs" />
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { useAttrs } from "vue";
import icons from "@/utils/loadIcons";

const props = defineProps<{
  icon: string;
}>();

const attrs = useAttrs();

const iconComponent = computed(() => {
  const component = icons[props.icon];
  console.log(component);
  if (component) {
    return component;
  } else {
    console.error(`Icon ${props.icon} not found`);
    return null;
  }
});
</script>
