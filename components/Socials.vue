<template>
  <aside :class="classes">
    <a
      href="https://www.linkedin.com/in/jclaessens"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="LinkedIn Icon"
    >
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    </a>
    <a
      href="https://github.com/jclaessens97"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Github Icon"
    >
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a
      href="https://discordapp.com/users/310137027330965514/"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Discord Icon"
    >
      <font-awesome-icon :icon="['fab', 'discord']" />
    </a>
    <a
      href="mailto:jeroen.claessens@jcss.be"
      rel="noreferrer noopener"
      aria-label="Mail Icon"
    >
      <font-awesome-icon :icon="['far', 'envelope']" />
    </a>
  </aside>
</template>

<script>
export default {
  props: {
    orientation: {
      type: String,
      default: 'vertical',
    },
  },
  computed: {
    classes() {
      const base = 'text-3xl flex justify-center';

      if (this.orientation === 'horizontal') {
        return `${base} flex-row space-x-3`;
      }

      return `${base} fixed bottom-0 h-auto z-10 flex-col space-y-3 mb-8 ml-5 text-white`;
    },
  },
};
</script>

<style scoped>
svg {
  @apply block m-auto transition-all duration-300;
}

svg:hover {
  @apply text-teal-300;
}
</style>
