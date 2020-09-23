<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add): </label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class="red-text" v-if="feedback"> {{ feedback }}</p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init' // importing firebase

export default {
    name: 'NewMessage', // component name
    props: ['name'], // this is because we are receiving prop from another component
    data() {
        return {
            newMessage: null,
            feedback: null,

        }
    },
    methods: {
        addMessage() {
            if(this.newMessage) {
                // asynchronous request to create a collection and then doc with a parameters like this:
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err)
                })
                this.newMessage = null
                this.feedback = null
            }
            else {
                this.feedback = 'You must enter a message to send one'
            }
        }
    }
}
</script>