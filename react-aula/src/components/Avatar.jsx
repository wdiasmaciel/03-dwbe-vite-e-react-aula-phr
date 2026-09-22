export default function Avatar({ url, nome }) {
  return (
    <>
      <img 
        src={url || "https://dummyjson.com/icon/abc123/150"} 
        alt={`Foto de ${nome}`} 
        style={{ borderRadius: '50%', width: 50, height: 50 }} 
      />
      <p>{nome}</p>
    </>
  );
}