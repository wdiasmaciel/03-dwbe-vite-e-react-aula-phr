import Header from "./Header"
import Banner from "./Banner"
import Avatar from "./Avatar"

export default function Principal() {
    return ( 
      <>
        <Header />
        <Banner />
        <Avatar url="https://thispersondoesnotexist.com/" nome="Usuário(a)"/>
      </>
    );
}