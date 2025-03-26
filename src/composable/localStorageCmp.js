export default function localStorageCmp(storageKey) {
    function getUsers() {
      const data = localStorage.getItem(storageKey);
      if (data) {
        try {
          return JSON.parse(data);
        } catch (e) {
          console.error('JSON parse error:', e);
          localStorage.removeItem(storageKey);
        }
      }
      return [];
    }
    
    function saveUsers(users) {
      localStorage.setItem(storageKey, JSON.stringify(users));
    }
    
    return { getUsers, saveUsers };
  }
  