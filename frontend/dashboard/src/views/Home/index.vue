<template>
  <CustomHeader @create-account="handleAccountCreate" @login="handleLogin" />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker © 2021</p>
  </div>
</template>

<script>
/* eslint-disable */
import CustomHeader from "./CustomHeader.vue";
import Contact from "./Contact.vue";
import { onMounted, useModel } from "vue";
import { useRouter } from "vue-router";
import useModal from '../../hooks/useModal';

//import { reactive, toRefs } from 'vue'

export default {
  name: "Home",
  components: {
    CustomHeader,
    Contact,
  },
  setup() {
    const router = useRouter()
    const modal = useModal()
    function handleLogin () {
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handleAccountCreate() {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }
    // const state = reactive({
    //     count: 0,
    // })

    onMounted(() => {
      const token = localStorage.getItem("token");
      if (token) router.push({ name: "Feedbacks" });
    });
    return {
      handleLogin,
      handleAccountCreate,
      //     ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
