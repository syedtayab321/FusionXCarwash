// Import Firestore
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const db = getFirestore();
export const addToCart = async (cartData) => {
  try {
    const cartCollection = collection(db, 'cart_items');
    const cartItem = {
      ImageUrl: cartData.ImageUrl,
      adminEmail: cartData.adminEmail,
      adminId: cartData.adminId,
      adminName: cartData.adminName,
      adminPhoneNumber: cartData.adminPhoneNumber,
      selectedHours: cartData.selectedHours,
      title: cartData.title,
      totalPrice: cartData.totalPrice,
      userId: cartData.userId,
      createdAt: new Date(),
    };
    await addDoc(cartCollection, cartItem);
    console.log('Item successfully added to cart in Firestore!');
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
};
