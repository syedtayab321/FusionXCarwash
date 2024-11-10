import React, { useState, useEffect } from 'react';
import { fetchMainCategories, fetchSuperSubCategories } from '../../BackendFunctions/FetchServices';
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import TopBar from '../../Components/DashboardComponents/TopBar';
import '../../assets/css/subCatgeoryButton.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

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

  const handleNavigate = (data) => {
    navigate('/servicesDetails', { state: { data } });
  };

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
                <Col md={6} key={index} className="mb-4">
                  <Card className="shadow-lg sub-category-card">
                    <Card.Body>
                      <Card.Title style={{ color: '#2c3e50', fontWeight: 'bold', fontSize: '1.5rem' }}>
                        {subCategory.id}
                      </Card.Title>
                      <Card.Subtitle className="text-muted mb-2" style={{ fontSize: '1.1rem' }}>
                        {subCategory.title}
                      </Card.Subtitle>
                      <Card.Text className="text-dark" style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                        {subCategory.description || 'No description available'}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rating:</strong>
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} color={i < subCategory?.rating ? '#f39c12' : '#ddd'} />
                        ))}
                      </Card.Text>
                      <Button
                        onClick={() => handleNavigate(subCategory)}
                        variant="outline-primary"
                        className="w-100 mt-3"
                        style={{ backgroundColor: '#2980b9', color: '#fff', borderRadius: '5px', padding: '10px 0' }}
                      >
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>

      {/* Custom styling for the updated card design */}
      <style jsx>{`
        .sub-category-card {
          transition: transform 0.3s ease;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
        }
        .sub-category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
        }
        .category-button {
          font-size: 1rem;
          font-weight: 600;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default SubCategoryPage;
