export const fetchUsers = async (setUsers, setLoading, setError) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Greška!");
    }
    const json = await response.json();
    setUsers(json);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
