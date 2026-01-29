import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Album() {
  const { albumId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/data/${albumId}.json`)
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
  }, [albumId]);

  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.school}</p>
      <p>{data.class}</p>

      {data.gallery.map((img, i) => (
        <img key={i} src={img} width="200" alt={`Gallery image ${i + 1}`} />
      ))}
    </div>
  );
}
