<template>
  <div class="container">
    <div class="tabs" v-if="users.length">
      <div
        v-for="(user, index) in users"
        :key="user.id"
        :class="['tab', { active: activeTab === index }]"
        @click="selectTab(index)"
      >
        <div class="title">{{ user.name }}</div>
      </div>
    </div>
    <div class="content" v-if="activeTab !== null">
      <h2>{{ users[activeTab]?.name }}</h2>
      <p>{{ users[activeTab]?.username }}</p>
      <p>{{ users[activeTab]?.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      activeTab: 0,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users", error);
      }
    },
    selectTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style src="./../assets/TabsStyles.css" />
