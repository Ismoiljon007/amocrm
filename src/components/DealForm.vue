<template>
  <Card>
    <template #title>Создать сделку</template>
    <template #content>
      <Form
        v-slot="$form"
        :resolver="resolver"
        :initialValues="initialValues"
        @submit="onFormSubmit"
        class="flex flex-col gap-4 w-full sm:w-56"
      >
        <div class="flex flex-col gap-1">
          <InputText name="dealName" type="text" placeholder="Username" fluid />
          <Message
            v-if="$form.dealName?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.dealName.error?.message }}</Message
          >
        </div>
        <div class="flex flex-col gap-1">
          <InputNumber name="dealPrice" placeholder="Price" fluid />
          <Message
            v-if="$form.dealPrice?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.dealPrice.error?.message }}</Message
          >
        </div>
        <Button type="submit" severity="secondary" label="Submit" />
      </Form>
    </template>
  </Card>

  <div>
    <input v-model="dealName" placeholder="Deal Name" />
    <input v-model="dealPrice" type="number" placeholder="Deal Price" />
    <button @click="createNewDeal">Create Deal</button>
    <p v-if="dealStatus">{{ dealStatus }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Form } from "@primevue/forms";
import { Card } from "primevue";
import { Button } from "primevue";
import { InputText } from "primevue";
import { InputNumber } from "primevue";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import { z } from "zod";
import { useDeals } from "../composables/useDeals";
const { dealName, dealPrice, dealStatus, createNewDeal } = useDeals();

const toast = useToast();
const initialValues = ref({
  dealName,
  dealPrice,
});
const resolver = ref(
  zodResolver(
    z.object({
      dealName: z.string().min(1, { message: "Username is required." }),
      dealPrice: z
        .string()
        .min(1, { message: "Email is required." })
        .email({ message: "Invalid email address." }),
    })
  )
);

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({
      severity: "success",
      summary: "Form is submitted.",
      life: 3000,
    });
  }
};
</script>
