<script>
import { db } from '@/firebase';
import { addDoc, collection, doc } from 'firebase/firestore';
import ModalComponent from '../ModalComponent.vue';

export default {
  props: ["comments", "postId"],
  data() {
    return {
      formData: {
        name: '',
        comment: '',
        timestamp: null
      },
      alert: {
        title: '',
        content: ''
      }
    };
  },
  components: {
    ModalComponent
  },
  methods: {
    generateColorFromName(name) {
      const hash = Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const hue = hash % 360;
      const saturation = 70;
      const lightness = 85;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    },
    async onSubmitComment() {
      this.formData.timestamp = new Date().toISOString();
      const commentsCollection = collection(doc(db, 'posts', this.postId), 'comments');

      const result = await addDoc(commentsCollection, this.formData);
      if (result?.id) {
        this.alert = {
          title: "Publicado",
          content: "¡Gracias por tu comentario!"
        };
        this.formData.name = '';
        this.formData.comment = '';
      }
    },
    acceptModal() {
      this.alert.title = "";
    },
    getCommentStyle(comment) {
      return {
        backgroundColor: this.generateColorFromName(comment.name),
      };
    }
  }
};
</script>

<template>
  <ModalComponent
    v-show="alert.title != ''"
    :title="alert.title"
    :content="alert.content"
    @accept="acceptModal()"
  />
  <div class="comment-section">

    <div
      v-for="comment in comments"
      :key="comment.id"
      class="comment"
      :style="getCommentStyle(comment)"
    >
      <p class="comment-name">{{ comment.name }}:</p>
      <p>{{ comment.comment }}</p>
      <p class="comment-timestamp">{{ new Date(comment.timestamp).toLocaleString() }}</p>
    </div>

    <div class="add-comment">
      <input type="text" v-model="formData.name" placeholder="Escribe aquí tu nombre..." />
      <textarea rows="3" v-model="formData.comment" placeholder="Escribe aquí tu comentario..."></textarea>
      <button @click="onSubmitComment()">Enviar</button>
    </div>
  </div>
</template>

<style scoped>
.comments-section {
  background-color: #f7fbff;
  padding: 20px;
}

.comments-section h3 {
  margin: 0 0 10px;
}

.comment {
  background: #eaf4ff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.comment-name {
  font-weight: bold;
}

.comment-timestamp {
  font-size: 12px;
  color: #777;
}

.add-comment {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.add-comment input,
.add-comment textarea {
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px;
}

.add-comment button {
  align-self: flex-end;
  padding: 10px 20px;
  background-color: #002c5f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-comment button:hover {
  background-color: #004a99;
}
</style>

