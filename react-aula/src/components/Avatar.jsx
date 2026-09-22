export default function Avatar({ url, nome }) {
  let numAleatorio = Math.floor(Math.random() * 200);
  
  return (
    <>
      <img 
        src={url || `https://dummyjson.com/icon/abc${numAleatorio}/150`} 
        alt={`Foto de ${nome}`} 
        style={{ borderRadius: '50%', width: 50, height: 50 }} 
      />
      <p>{nome}</p>
    </>
  );
}