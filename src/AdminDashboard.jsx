import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [currentSection, setCurrentSection] = useState('projects'); // 'projects' or 'certificates'
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
  });
  const navigate = useNavigate();

  // Check if admin is logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Fetch projects and certificates on component mount
  useEffect(() => {
    fetchProjects();
    fetchCertificates();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/projects');
      const data = await response.json();
      setProjects(data);
      setError('');
    } catch (err) {
      setError('Failed to load projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/certificates');
      const data = await response.json();
      setCertificates(data);
      setError('');
    } catch (err) {
      setError('Failed to load certificates');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    navigate('/admin/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('adminToken');
    if (!token) {
      setError('You are not authenticated. Please login again.');
      navigate('/admin/login');
      return;
    }

    try {
      let response;
      const endpoint = currentSection === 'projects' ? 'projects' : 'certificates';

      if (editingId) {
        // Update
        response = await fetch(`http://localhost:5000/api/${endpoint}/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });
      } else {
        // Create new
        response = await fetch(`http://localhost:5000/api/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });
      }

      if (!response.ok) {
        throw new Error(`Failed to save ${currentSection.slice(0, -1)}`);
      }

      // Reset form and refresh
      setFormData({ title: '', description: '', image: '', link: '' });
      setShowForm(false);
      setEditingId(null);
      if (currentSection === 'projects') {
        fetchProjects();
      } else {
        fetchCertificates();
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm(`Are you sure you want to delete this ${currentSection.slice(0, -1)}?`)) {
      return;
    }

    const token = localStorage.getItem('adminToken');
    if (!token) {
      setError('You are not authenticated. Please login again.');
      navigate('/admin/login');
      return;
    }

    try {
      const endpoint = currentSection === 'projects' ? 'projects' : 'certificates';
      const response = await fetch(`http://localhost:5000/api/${endpoint}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete ${currentSection.slice(0, -1)}`);
      }

      if (currentSection === 'projects') {
        fetchProjects();
      } else {
        fetchCertificates();
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ title: '', description: '', image: '', link: '' });
  };

  const adminEmail = localStorage.getItem('adminEmail');

  return (
    <div className="admin-dashboard-container">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
          <div className="admin-header-actions">
            <span className="admin-email">Welcome, {adminEmail}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-toolbar">
          <div className="section-tabs">
            <button
              className={currentSection === 'projects' ? 'active' : ''}
              onClick={() => setCurrentSection('projects')}
            >
              Projects
            </button>
            <button
              className={currentSection === 'certificates' ? 'active' : ''}
              onClick={() => setCurrentSection('certificates')}
            >
              Certificates
            </button>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="add-item-btn"
          >
            {showForm ? 'Cancel' : `+ Add New ${currentSection.slice(0, -1).charAt(0).toUpperCase() + currentSection.slice(1, -1)}`}
          </button>
        </div>

        {error && <div className="admin-error-message">{error}</div>}

        {showForm && (
          <div className="admin-form-container">
            <h3>{editingId ? `Edit ${currentSection.slice(0, -1)}` : `Add New ${currentSection.slice(0, -1)}`}</h3>
            <form onSubmit={handleSubmit} className="project-form">
              <div className="form-group">
                <label htmlFor="title"> Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter project title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter project description"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="image">Image URL *</label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://image.jpg"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="link">Link *</label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  placeholder="https://project/certificate.com"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  {editingId ? `Update ${currentSection.slice(0, -1)}` : `Create ${currentSection.slice(0, -1)}`}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <div className="loading">Loading {currentSection}...</div>
        ) : (currentSection === 'projects' ? projects : certificates).length === 0 ? (
          <div className="no-items">No {currentSection} found. Create your first {currentSection.slice(0, -1)}!</div>
        ) : (
          <div className="items-grid">
            {(currentSection === 'projects' ? projects : certificates).map((item) => (
              <div key={item._id} className="item-card">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">
                    View {currentSection.slice(0, -1)} →
                  </a>
                </div>
                <div className="item-actions">
                  <button
                    onClick={() => handleEdit(item)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
