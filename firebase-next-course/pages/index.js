import Link from "next/link";
import Loader from "../components/Loader"

const Home = () => {
  return ( 
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'thiago' }
      }}>
        <a>Thiago{"'"}s Profile</a>
      </Link>
      <Loader show />
    </div>
  );
}
 
export default Home;
