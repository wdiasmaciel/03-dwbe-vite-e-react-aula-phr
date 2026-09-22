export default function UserAvatar({ url, nome }) {
  return (
    <>
      <p>{nome}</p>
      <p>${nome}</p>
      <img 
        src={url || "https://via.placeholder.com/150"} 
        alt={`Foto de ${nome}`} 
        style={{ borderRadius: '50%', width: 50, height: 50 }} 
      />
    </>
  );
}