// services/apiService.js
import axios from "axios";

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI0N2VjYjE0MTMzNTE3NDQ5OTcxZWY2YWFhM2M5M2VhOTIxZGI3MDc1NDI2MGU2NDZiY2NkNjFkOTFlZjZjNmIxYjZmNGE1ZmM5MGFiMTZlIn0.eyJhdWQiOiJiZmE4MDg3Yy1mMGFjLTRmMWMtODQwZC1mODQ0ZmVlNjkwMTYiLCJqdGkiOiIyNDdlY2IxNDEzMzUxNzQ0OTk3MWVmNmFhYTNjOTNlYTkyMWRiNzA3NTQyNjBlNjQ2YmNjZDYxZDkxZWY2YzZiMWI2ZjRhNWZjOTBhYjE2ZSIsImlhdCI6MTczMDk4OTk5MiwibmJmIjoxNzMwOTg5OTkyLCJleHAiOjE3NTEyNDE2MDAsInN1YiI6IjExNzQ0MzQyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMyMDUyMjAyLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNzUzNjkxN2MtYzRmZS00YzFhLWFjZDQtZWNjNDQxMWFjNDg5IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.lCQZgmWwrKQkzpubaN9JRti7U1jCS14iKWVLKwzPmVNPJp7JXajNOhE3FLYBl12LiBLBaT2x8XL0TZa9J2JHoVAK1trtZOHV2R6WwniCkN31fqXqh3n2LasFS6FPify5c9rLkAbkRC6SHZIPGJ6mdS6tm7tE3gFTT7xmjv6NgqshSRIF73JTdzZtwxzkEwtjqQhwAFKKMRgxzuKHLaD7w-6gG20zk-96eT_elk27pcp80FtYsMnoq_sHIlarJzz9BDAkaOIkPeOqoCmLlFDaZsnms0ySaXI2YxDhtwTIDYXzHwCs-AKkeeIsbylQlAJIjg9RbU_zKT3xNWknprHtBg"; // Token should be dynamic if possible

const api = axios.create({
  baseURL: "https://baxtiyorovismoiljon5.amocrm.ru/api/v4/", // Replace with your domain
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});

export const createContact = async (contactData) => {
  try {
    const response = await api.post("contacts", contactData);
    return response.data;
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  }
};

export const createDeal = async (dealData) => {
  try {
    const response = await api.post("leads", dealData);
    return response.data;
  } catch (error) {
    console.error("Error creating deal:", error);
    throw error;
  }
};

export const copyDeal = async (dealId) => {
  try {
    const dealResponse = await api.get(`leads/${dealId}`);
    const copiedDeal = await api.post("leads", {
      name: `${dealResponse.data.name} (Copy)`,
      price: dealResponse.data.price,
      _embedded: {
        contacts: dealResponse.data._embedded.contacts,
      },
    });
    return copiedDeal.data;
  } catch (error) {
    console.error("Error copying deal:", error);
    throw error;
  }
};

export default api;
