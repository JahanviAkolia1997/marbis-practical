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
    <!-- Display user details -->
    <div class="content" v-if="activeTab !== null">
      <h2>{{ users[activeTab]?.name }}</h2>
      <div class="user-detail-container">
        <p><strong>Username:</strong> {{ users[activeTab]?.username }}</p>
        <p><strong>Email:</strong> {{ users[activeTab]?.email }}</p>
        <p><strong>Phone:</strong> {{ users[activeTab]?.phone }}</p>
        <p>
          <strong>Website: </strong>
          <a :href="'http://' + users[activeTab]?.website" target="_blank">{{
            users[activeTab]?.website
          }}</a>
        </p>
        <p><strong>Company:</strong> {{ users[activeTab]?.company?.name }}</p>
        <p><strong>Address:</strong></p>
        <ul>
          <li>
            <strong>Street:</strong> {{ users[activeTab]?.address.street }}
          </li>
          <li><strong>Suite:</strong> {{ users[activeTab]?.address.suite }}</li>
          <li><strong>City:</strong> {{ users[activeTab]?.address.city }}</li>
          <li>
            <strong>Zipcode:</strong> {{ users[activeTab]?.address.zipcode }}
          </li>
          <li>
            <strong>Geo:</strong> {{ users[activeTab]?.address.geo.lat }},
            {{ users[activeTab]?.address.geo.lng }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

// Define interface
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company?: Company;
}

export default defineComponent({
  name: "TabComponent",
  setup() {
    const users = ref<User[]>([]);
    const activeTab = ref<number | null>(0);

    // Fetch data from API
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        users.value = response.data;
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    // selected tab
    const selectTab = (index: number) => {
      activeTab.value = index;
    };

    // onLoad
    onMounted(fetchUsers);

    return {
      users,
      activeTab,
      selectTab,
    };
  },
});
</script>

<!-- Add styles -->
<style src="../assets/TabsStyles.css" />
