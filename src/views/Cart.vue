  <template>
  <div>
    <NavBar />
    <CartList />
    <Footer />
  </div>
</template>
  <script>
import CartList from "@/components/Cartlist.vue";
import Footer from "@/components/NavFooter.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
    CartList,
    Footer,
  },
};
</script>
  <style scoped>
.cart {
  margin-top: 50px;
}
</style>
