
// Component
import LandingPage from "@/components/LandingPage/LandingPage"

const URL = 'https://periodictablechydev.vercel.app/api/datas'

export async function getServerSideProps() {
  const response = await fetch(URL)
  const data = await response.json();
  return {
    props: { data }
  }
}


const Home = ({ data }) => {
  return <LandingPage data={data} />
}

export default Home