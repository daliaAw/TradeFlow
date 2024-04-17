import * as usersService from "./users-service"; // Import the user services

class AuthService {
  async login(email, password) {
    try {
      // Delegate the login request to the user services
      const user = await usersService.login({ email, password });
      // Save token to local storage
      localStorage.setItem("token", user.token);
      return usersService.getUser(); // Return the user object
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  async logout() {
    try {
      // Delegate the logout request to the user services
      await usersService.logOut();
      // Remove token from local storage
      localStorage.removeItem("token");
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await usersService.getUser();
      return user;
    } catch (error) {
      console.error('Error getting current user:', error);
      throw error;
    }
  }


  // Optionally, you can add other methods like signUp, getToken, checkToken, etc.
}

export default new AuthService();
