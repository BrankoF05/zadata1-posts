export const fetchComments = async (setComments, setLoading, setError) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    if (!response.ok) {
      throw new Error("Greška!");
    }
    const json = await response.json();
    setComments(json);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
