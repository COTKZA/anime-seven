import UserContainer from "../../components/layouts/user/UserContainer"
import LogoImage from "../../components/layouts/user/LogoImage"
import Anime from "../../components/user/Anime"
import Banner from "../../components/user/Banner"

const Home = () => {
    return (
        <>
            <UserContainer>
                <LogoImage />
                <Banner />
                <Anime />
            </UserContainer>
        </>
    )
}

export default Home