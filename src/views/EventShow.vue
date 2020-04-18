<template>
    <div>
        <h1>Event #{{ user.name }}</h1>
        <h5>{{arrayCount}}</h5>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
            </li>
        </ul>
        <button @click="changeName">Press me</button>
    </div>
</template>
<script>
import EventService from '@/services/EventService.js'
import store from '@/store/index.js'
import { mapState } from 'vuex'

export default {

    computed: mapState({
        user: 'user',
        items: 'items'
    }),

    props: ['id'],
    data() {
        return  {
            arrayCount: store.getters.arrayCount,
            event: {},
        }
    },
    methods: {
        PUSH_NAME: () => {
            store.commit('pushName', {
                name: "Zaw Zaw"
            })
        },
        changeName: () => {
            store.dispatch('changeName', 'Ag zaw')
        }
    },
    created() {
        EventService.getEvent(this.id)
        .then(response => {
            this.event = response.data
        })
        .catch(err => {
            this.event = err.error
        })
    },
}
</script>