import { db } from '../firebaseConfig';
import { collection, doc, getDocs } from 'firebase/firestore';

// Fetch services
export const fetchServices = async () => {
  try {
    const servicesCollection = collection(db, 'Services');
    const servicesSnapshot = await getDocs(servicesCollection);
    return servicesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const fetchMainCategories = async (serviceId) => {
  try {
    if (!serviceId) {
      throw new Error("Service ID is required to fetch main categories.");
    }
    const subcategoriesRef = collection(doc(db, 'Services', serviceId), 'subcategories');
    const snapshot = await getDocs(subcategoriesRef);
    const categories = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return categories;
  } catch (error) {
    console.error('Error fetching main categories:', error);
    throw error;
  }
};


export const fetchSuperSubCategories = async (serviceId, mainCategoryName) => {
  try {
    if (!serviceId || !mainCategoryName) {
      throw new Error("Missing required parameters to fetch super subcategories.");
    }
    const serviceDetailsRef = collection(
      doc(db, 'Services', serviceId),
      'subcategories',
      mainCategoryName,
      'ServicesDetails'
    );
    const snapshot = await getDocs(serviceDetailsRef);
    const superSubCategories = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return superSubCategories;
  } catch (error) {
    console.error('Error fetching super subcategories:', error);
    throw error;
  }
};

