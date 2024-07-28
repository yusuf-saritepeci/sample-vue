<script setup>
defineProps({
  show: Boolean
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        class="fixed z-9998 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-opacity"
      >
        <div class="p-8 rounded-xl shadow-lg bg-white transition-all">
          <div class="mb-5">
            <slot name="header"></slot>
          </div>
          <div class="flex flex-wrap gap-5">
            <slot name="body"></slot>
          </div>
          <div class="flex justify-end gap-5 mt-5">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
