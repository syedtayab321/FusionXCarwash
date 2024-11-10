import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
export const addOrders = async (orderData) => {
  try {
    const cartRef = collection(db, 'orders');
    const docRef = await addDoc(cartRef, {
      adminId: orderData.adminId,
      adminEmail: orderData.adminEmail,
      adminName: orderData.adminName,
      adminPhoneNumber: orderData.adminPhoneNumber,
      cartItem: [
        {
          title: orderData.title,
          price: orderData.price,
          selectedHours: orderData.selectedHours,
        },
      ],
      userId: orderData.userId,
      orderDate: Timestamp.now(),
      status: 'order_pending',
      userLocation: orderData.userLocation,
      userName: orderData.userName,
      userPhone: orderData.userPhone,
      userUid: orderData.userUid,
    });
    console.log("Order added with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding order: ", e);
  }
};
