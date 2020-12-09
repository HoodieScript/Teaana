<template>
  <div>
    <NavBar2 :key="componentKey" />
    <Login />
    <EditProfile />
    <Profile />
  </div>
</template>
<script>
import Profile from "../components/Profile.vue";
import Login from "../components/Login.vue";
import EditProfile from "../components/EditProfile.vue";
import NavBar2 from "@/components/NavBar2.vue";

export default {
  components: {
    Profile,
    Login,
    EditProfile,
    NavBar2,
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
  },
};
</script>
