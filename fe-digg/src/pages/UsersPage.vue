<!-- 
 I denna komponent har jag lagt nästan all funktionalitet förutom anropet mot backend som ligger i api.js
I ett verkligt scenario hade jag delat upp detta i fler komponenter. Knapparna och tabellen i egna 
komponenter för att hålla koden ren och lättläst. För arbetsprovet tycker jag dock det fungerar.
-->
<script setup>
import { fetchUsers } from '@/services/api'
import { onMounted, ref } from 'vue'
const users = ref([])
const page = ref(1)
const totalPages = ref(0)

const pageChange = async (value) => {
  page.value += value
  fetchUsersAction()
}

const fetchUsersAction = async () => {
  try {
    const userResponse = await fetchUsers(page.value)
    totalPages.value = userResponse.totalPages
    users.value = userResponse.users
  } catch (error) {
    console.log(error)
  }
}
onMounted(async () => {
  await fetchUsersAction()
})
</script>

<template>
  <div class="users-page">
    <h1>Användare</h1>
    <h2 v-if="!!totalPages">Sida {{ page }} av {{ totalPages }}</h2>
    <li v-for="(user, index) in users" :key="index">
      <strong>Namn:</strong> {{ user.name }} - <strong>E-post:</strong> {{ user.email }}-
      <strong>Adress:</strong> {{ user.address }}- <strong>Telefonnummer:</strong>
      {{ user.phoneNumber }}
    </li>
    <div class="buttons">
      <button @click="pageChange(-1)" :disabled="page < 2">Föregående</button>
      <button @click="pageChange(+1)" :disabled="page >= totalPages">Nästa</button>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  margin-top: 20px;
}
</style>
