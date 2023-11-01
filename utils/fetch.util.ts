export const fetchData = async (url: string, setData: any) => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`Error: ${resp.status} - ${resp.statusText}`);
      }
      const json = await resp.json();
      setData(json);
    } catch (err) {
      console.error(err);
    }
  };