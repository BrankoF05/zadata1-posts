export const fetchPost = async (id, setPost, setLoading, setError) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
      throw new Error("Greška");
    }
    const json = await response.json();
    setPost(json);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
