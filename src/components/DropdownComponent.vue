<template>
  <div class="dropdown">
    <!-- Loop through sections -->
    <select v-model="selectedUserId" @change="updateSelectedUser">
      <option disabled value="">Select a user</option>
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
    <!-- Display user details -->
    <div class="user-details" v-if="selectedUser">
      <h3>{{ selectedUser.name }}</h3>
      <p><strong>Username:</strong> {{ selectedUser.username }}</p>
      <p><strong>Email:</strong> {{ selectedUser.email }}</p>
      <p><strong>Phone:</strong> {{ selectedUser.phone }}</p>
      <p><strong>Website:</strong> {{ selectedUser.website }}</p>
      <p><strong>Company:</strong> {{ selectedUser.company?.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
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
  name: "DropdownComponent",
  setup() {
    const users = ref<User[]>([]);
    const selectedUserId = ref<number | null>(null);

    const selectedUser = computed(() =>
      users.value.find((user) => user.id === selectedUserId.value)
    );

    // Fetch data from API
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        users.value = response.data;
        selectedUserId.value = response.data[0].id;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // update selected user
    const updateSelectedUser = () => {
      selectedUserId.value = selectedUserId.value ? selectedUserId.value : null;
    };

    // onLoad
    onMounted(fetchUsers);

    return {
      users,
      selectedUserId,
      selectedUser,
      updateSelectedUser,
    };
  },
});
</script>

<!-- Add styles -->
<style src="../assets/DropdownStyles.css" />
