import Link from "next/link";

const Home = () => {
  return ( 
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'thiago' }
      }}>
        <a>Thiago{"'"}s Profile</a>
      </Link>
    </div>
  );
}
 
export default Home;
