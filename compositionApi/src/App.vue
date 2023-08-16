<script>
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref, watchEffect } from 'vue'
import { IconClick } from '@tabler/icons-vue'
import TopNavbar from './components/TopNavbar.vue'

export default {
  setup() {
    console.log('commposition')

    const test = ref(null)
    const searchInput = ref('')
    const arraysTest = ref(['mario', 'yoshi', 'toad', 'bowser', 'ahmad', 'hilman', 'dani'])

    let name = 'mario'

    const handleClick = () => {
      console.log(test)
      console.log(test.value)
      test.value.textContent = test + "   " + test.value
      test.value.classList.add('bg-rose-500')
    }

    const computedArraysTest = computed(() => {
      console.log('jalan')
      return arraysTest.value.filter((arrayTest) => {
        return arrayTest.includes(searchInput.value)
      })
    })

    watchEffect(() => {
      console.log("testinggg")
    }, searchInput)


    return { name, test, handleClick, searchInput, arraysTest, computedArraysTest }
  },
  components: { IconClick, TopNavbar }
}
</script>

<template>
  <div class="w-full min-h-screen bg-neutral-950">
    <TopNavbar />
    <RouterView />
  </div>
</template>

