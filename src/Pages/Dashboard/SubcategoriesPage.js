import React, { useState, useEffect } from 'react';
import { fetchMainCategories, fetchSuperSubCategories } from '../../BackendFunctions/FetchServices';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import TopBar from '../../Components/DashboardComponents/TopBar';
import '../../assets/css/subCatgeoryButton.css';
import {useLocation, useNavigate} from 'react-router-dom';

const SubCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem('userEmail');

  const location = useLocation();
  const serviceId = location.state?.serviceId;

  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      if (!serviceId) {
        console.error("Service ID is missing.");
        return;
      }
      try {
        const fetchedCategories = await fetchMainCategories(serviceId);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, [serviceId]);

  const handleCategoryClick = async (categoryName) => {
    setLoading(true);
    try {
      const fetchedSuperSubCategories = await fetchSuperSubCategories(serviceId, categoryName);
      setSubCategories(fetchedSuperSubCategories);
      setSelectedCategory(categoryName);
    } catch (error) {
      console.error('Error fetching super subcategories:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const handleNavigate = (data)=>{
      console.log(data);
      navigate('/servicesDetails', {state : { data}} );
  }
  return (
    <>
      <TopBar username={username} />
      <Container className="mt-4">
        <h2 className="text-center mb-4" style={{ color: '#34495e', fontWeight: 'bold' }}>Categories</h2>
        <Row>
          {categories.map((category) => (
            <Col md={3} key={category.id} className="mb-3">
              <Button
                variant="primary"
                className="w-100 category-button"
                onClick={() => handleCategoryClick(category.id)}
              >
               {category.id}
              </Button>
            </Col>
          ))}
        </Row>

         {selectedCategory && (
              <div className="mt-4">
                <h3 className="text-center mb-5" style={{ fontSize: '2rem', fontWeight: '600', color: '#34495e' }}>
                  {selectedCategory} Subcategories
                </h3>
                <Row>
                  {subCategories.map((subCategory, index) => (
                    <Col md={4} key={index} className="mb-4">
                      <div className="sub-category-card shadow-lg rounded-3 p-4">
                        <div className="card-image-container mb-3">
                          <img
                            src={subCategory.ImageUrl || 'https://via.placeholder.com/400x200'}
                            alt={subCategory.name}
                            className="img-fluid rounded-3"
                            style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
                          />
                        </div>
                        <h5 style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#2c3e50' }}>{subCategory.name}</h5>
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>{subCategory.description}</p>
                        <Button
                            onClick={()=>handleNavigate(subCategory)}
                          variant="outline-primary"
                          className="w-100 mt-3"
                          style={{ backgroundColor: '#2980b9', color: '#fff', borderRadius: '20px', padding: '10px 0' }}
                        >
                          Explore
                        </Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
      </Container>
    </>
  );
};

export default SubCategoryPage;
