import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_BASE_URL = 'http://localhost:3000/api';

export const fetchSlots = async () => {

    const { data } = await axios.get(API_BASE_URL+"/slots");
    return data;
  };

  
  export const useBookSlot = () => {
    return useMutation(async (slotId) => {
      const { data } = await axios.post(`${API_BASE_URL}/book`, { slotId });
      return data;
    });
  };
  
  export const useConfirmSlot = () => {
    return useMutation(async (slotId) => {
      const { data } = await axios.put(`${API_BASE_URL}/confirm/${slotId}`);
      return data;
    });
  };
  
  export const useCancelSlot = () => {
    return useMutation(async (slotId) => {
      const { data } = await axios.delete(`${API_BASE_URL}/cancel/${slotId}`);
      return data;
    });
  };