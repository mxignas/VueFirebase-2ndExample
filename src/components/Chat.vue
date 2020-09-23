<template>
    <div class="chat container">
        <h2 class="center teal-text">Ninja Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text"> {{ message.name }}</span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" /> <!-- Passing a name as a literal string, so we are binding name so we have access to it in "NewMessage" -->
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'], // accepting prop "name" as a parameter from welcome
    components: {
        NewMessage
    },

    data() {
        return {
            messages: [] // storing messages from users
        }
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp') // ordering by timestamp
        ref.onSnapshot(snapshot =>  {   //this method listens to changes to whatever changes in "messages" collection
            snapshot.docChanges().forEach(change => {
                // everytime we see there is a change with a type of "added"
                if(change.type == 'added') {
                    let doc = change.doc // reffering to that individual document
                    // we pushing that document into 'messages' array property
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll') // formatting time with "moment"
                    })
                }
            })
        })
    }
}
</script>

<style>
.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span {
    font-size: 1.4em;

}
.chat .time {
    display: block;
    font-size: 0.8em;
}
.messages {
    max-height: 300px;
    overflow: auto;
}

</style>