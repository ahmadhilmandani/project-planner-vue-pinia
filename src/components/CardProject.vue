<template>
  <div
    class="bg-neutral-900 border-[0.8px] border-neutral-800 w-[560px] rounded-tr-3xl px-4 py-8">
    <div class="flex gap-8 items-center">
      <h1 class="text-2xl text-white bg-neutral-800 px-5 py-2 rounded-full w-fit">
        <slot name="title"></slot>
      </h1>
      <div class="flex text-white items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-due" width="20" height="20"
          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M16 3v4"></path>
          <path d="M8 3v4"></path>
          <path d="M4 11h16"></path>
          <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
        <p class="text-sm">
          <slot name="deadline"></slot>
        </p>
      </div>
      <p class="text-xs text-neutral-400">
        <slot name="deadlineLeft"></slot>
      </p>
    </div>
    <p class="text-white text-sm mt-5 p-5 border-t-[0.8px] border-b-[0.8px] border-neutral-700">
      <slot name="body"></slot>
    </p>
    <slot name="prepNeeded"></slot>
  </div>
</template>