import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useConfirmSlot } from '../api/slot.api';
import { fetchSlots } from '../api/slot.api';

// Define the API call inside the useQuery
// const fetchSlots = async () => {

//   const { data } = await axios.get('http://localhost:3000/api');
//   console.log("hii");
//   return data;
// };

const ConfirmedSlots = () => {
  // Use the updated useQuery to fetch the slots
  const { data: slots, isLoading, isError, error } = useQuery({
    queryKey: ['slots'],
    queryFn: fetchSlots,
  });

  const confirmSlot = useConfirmSlot();

  // useEffect to handle side-effects after fetching data (if needed)
  useEffect(() => {
    if (isError) {
      console.error('Error fetching slots:', error);
    }
  }, [isError, error]);

  if (isLoading) return <p>Loading slots...</p>;
  if (isError) return <p>Error loading slots.</p>;

  return (
    <div>
      <h2>Available Slots</h2>
      {slots.map((slot) => (
        <div key={slot.id}>
          <p>Slot Time: {slot.time}</p>
          <button onClick={() => confirmSlot.mutate(slot.id)}>Confirm</button>
        </div>
      ))}
    </div>
  );
};

export default ConfirmedSlots;
