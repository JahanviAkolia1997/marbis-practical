<template>
  <div class="accordion">
    <div v-for="section in sections" :key="section.id" class="accordion-item">
      <button class="accordion-header" @click="toggleSection(section.id)">
        {{ section.name }}
        <span class="icon">{{ section.id === activeSection ? "-" : "+" }}</span>
      </button>
      <div
        :class="['accordion-content', { show: section.id === activeSection }]"
      >
        <div class="user-detail-container">
          <p><strong>Username:</strong> {{ section.username }}</p>
          <p><strong>Email:</strong> {{ section.email }}</p>
          <p><strong>Phone:</strong> {{ section.phone }}</p>
          <p>
            <strong>Website:</strong>
            <a :href="'http://' + section.website" target="_blank">{{
              section.website
            }}</a>
          </p>
          <p><strong>Company:</strong> {{ section.company?.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

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
  name: "AccordionComponent",
  setup() {
    const sections = ref<User[]>([]);
    const activeSection = ref<number | null>(null);

    const fetchSections = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        sections.value = response.data;
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    const toggleSection = (id: number) => {
      activeSection.value = activeSection.value === id ? null : id;
    };

    onMounted(fetchSections);

    return {
      sections,
      activeSection,
      toggleSection,
    };
  },
});
</script>

<style src="../assets/AccordionStyles.css" />
