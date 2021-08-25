import Bookings from "../models/bookings.js";
export const generateID = (length) => {
  const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

export const deleteExpiredBookings = async () => {
  try {
    const bookings = await Bookings.find();
    console.log("i was trigged from the heper file");
    for (let booking of bookings) {
      const endDate = new Date(booking.endDate).getTime();
      if (endDate < new Date().getTime() - 86400000) {
        console.log(`${booking.confirmation} has expired`);
        await Bookings.findOneAndDelete({ confirmation: booking.confirmation });
      }
    }
    return bookings;
  } catch (error) {
    console.log(error);
  }
};
