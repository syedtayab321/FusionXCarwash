import { db } from '../firebaseConfig';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
export const fetchCartItems = async (userId) => {
  try {
    const cartItems = [];
    const cartRef = collection(db, 'cart_items');
    const q = query(cartRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      cartItems.push({ id: doc.id, ...doc.data() });
    });

    return cartItems;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
};

export const removeFromCart = async (itemId) => {
  try {
    const itemRef = doc(db, 'cart_items', itemId);
    await deleteDoc(itemRef);
    console.log(`Item with ID ${itemId} removed successfully`);
  } catch (error) {
    console.error("Error removing item:", error);
  }
};
