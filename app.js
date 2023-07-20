import Vue from 'vue';

const isClient = !!globalThis?.document?.baseURI;
console.log('isClient', isClient);

export function createApp() {
  return new Vue({
    data: () => ({ count: 1, isClient }),
    template: `<div v-if="isClient"><button @click="count++">{{ count }}</button></div>`,
  });
}
