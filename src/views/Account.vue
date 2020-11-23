<template>
  <div>
    <NavBar />
    <Login />
    <EditProfile />
    <Profile />
  </div>
</template>
<script>
import Profile from "../components/Profile.vue";
import Login from "../components/Login.vue";
import EditProfile from "../components/EditProfile.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    Profile,
    Login,
    EditProfile,
    NavBar,
  },
};
</script>
