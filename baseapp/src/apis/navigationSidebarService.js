  
  import axios from 'axios';

export const simulateGetMenuItems = async () => {
    try {
      // Simulate a delay of 1 second (1000 milliseconds) to mimic network latency
      await new Promise(resolve => setTimeout(resolve, 1000));
  
      // Make a GET request to the server to fetch menu items
      const response = await axios.get('http://localhost:5000/sidebar');
          
      // Extract the menu items from the response data
      const menuItems = response.data;

      // Hardcoded menu items array
      // const menuItems = ['computer', 'handTools', 'machineTools', 'powerTools', 'storageTools', 'clothesAndPpe', 'electrical', 'buildingTools', 'foods', 'drinks'];
  

  
      // Return the menu items array
      return menuItems;
    } catch (error) {
      throw new Error('Error fetching menu items: ' + error.message);
    }
  };
