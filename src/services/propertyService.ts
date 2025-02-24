import { Property } from '../types/property';

export const propertyService = {
  async getProperties(): Promise<Property[]> {
    try {
      const response = await fetch('/api/properties');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }
  },

  async getPropertyByType(type: string): Promise<Property[]> {
    try {
      const response = await fetch(`/api/properties?type=${type}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching properties by type:', error);
      throw error;
    }
  }
}; 