import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api'
});

export const getBlogPosts = async () => {
  try {
    const response = await api.get('/blog-posts?populate=*');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPost = async (slug) => {
  try {
    const response = await api.get(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}; 