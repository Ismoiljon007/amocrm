// composables/useContacts.js
import { ref } from "vue";
import { createContact } from "../services/apiService";

export const useContacts = () => {
  const contactName = ref("");
  const contactPhone = ref("");
  const contactStatus = ref(null);

  const createNewContact = async () => {
    const contactData = {
      name: contactName.value,
      custom_fields_values: [
        {
          field_id: 123456, // Your custom field ID for phone
          values: [{ value: contactPhone.value }],
        },
      ],
    };
    try {
      const response = await createContact(contactData);
      contactStatus.value = "Contact created successfully";
      console.log(response);
    } catch (error) {
      contactStatus.value = "Error creating contact";
    }
  };

  return {
    contactName,
    contactPhone,
    contactStatus,
    createNewContact,
  };
};
