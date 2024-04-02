<script>
import RegisterDeveloper from "./welcoming/components/register-developer.component.vue";
import Welcome from "./welcoming/components/welcome.component.vue";
import ShowDeveloperCount from "./welcoming/components/show-developer-count.component.vue";

export default {
  name: "app",
  components: {ShowDeveloperCount, Welcome, RegisterDeveloper},
  data() {
    return {
      firstName: '',
      lastName: '',
      developerCount: 0
    }
  },
  methods: {
    onDeveloperRegistered(developer) {
      this.firstName = developer.firstName;
      this.lastName = developer.lastName;
      console.log("Developer Registered: ", developer);
      this.updateDeveloperCount();
    },
    updateDeveloperCount() {
      this.developerCount++;
    }
  }
}
</script>

<template>
  <h1>Hello Vue Developer Application</h1>
  <register-developer v-on:developer-registered="onDeveloperRegistered" />
  <welcome :first-name="firstName" :last-name="lastName" />
  <show-developer-count :developer-count="developerCount" />
</template>