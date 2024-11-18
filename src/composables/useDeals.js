// composables/useDeals.js
import { ref } from "vue";
import { createDeal, copyDeal } from "../services/apiService";

export const useDeals = () => {
  const dealName = ref("");
  const dealPrice = ref("");
  const dealStatus = ref(null);

  const createNewDeal = async () => {
    const dealData = [
      {
        name: dealName.value,
        type: "text",
        price: dealPrice.value,
      },
    ];

    try {
      const response = await createDeal(dealData);
      dealStatus.value = "Deal created successfully";
      console.log(response);
    } catch (error) {
      dealStatus.value = "Error creating deal";
      console.error(error);
    }
  };

  const copyExistingDeal = async (dealId) => {
    try {
      const response = await copyDeal(dealId);
      dealStatus.value = "Deal copied successfully";
      console.log(response);
    } catch (error) {
      dealStatus.value = "Error copying deal";
    }
  };

  return {
    dealName,
    dealPrice,
    dealStatus,
    createNewDeal,
    copyExistingDeal,
  };
};
