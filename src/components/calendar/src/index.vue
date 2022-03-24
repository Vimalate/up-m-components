<template>
  {{ events }}
  <div id="calendar"></div>
</template>

<script setup lang="ts">
import "@fullcalendar/core/vdom" // vite 中使用引入，否则报错
import { Calendar } from '@fullcalendar/core'
import { onMounted, PropType, ref } from 'vue'
import daygrid from '@fullcalendar/daygrid'
import interaction from '@fullcalendar/interaction'
import { EventItem } from './types'

let props = defineProps({
  local: {
    type: String,
    default: 'zh-ch'
  },
  initalView: {
    type: String,
    default: 'dayGridMonth'
  },
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: '今天',
        month: '月',
        week: '周',
        day: '天',
        prevYear: '上一年',
        nextYear: '下一年',
        prev: '上一月',
        next: '下一月'
      }
    }
  },
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: 'title',
        canter: '',
        end: 'prev today next'
      }
    }
  },
  footerToolbar: {
    type: Object,
    default: () => { }
  },
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => {
      return []
    }
  }
})
let calendar = ref<Calendar>()

const renderCalendar = () => {
  let el = document.getElementById('calendar')
  if (el) {
    calendar.value = new Calendar(el, {
      plugins: [daygrid, interaction],
      locale: props.local,
      initialView: props.initalView,
      buttonText: props.buttonText,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      eventSources: [
        {
          events(e, callback) {
            console.log('eventSources', props.events);
            if (props.events.length) {
            } else {
              callback([])
            }
          }
        }
      ]
    })
    calendar.value.render()
  }
}

onMounted(() => {
  renderCalendar()
})

</script>

<style scoped>
</style>