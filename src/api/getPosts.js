export const fetchPosts = async (setPosts, setLoading, setError) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Greška!");
    }
    const json = await response.json();
    setPosts(json);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
