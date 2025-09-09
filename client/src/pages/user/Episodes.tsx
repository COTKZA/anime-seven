import UserContainer from "../../components/layouts/user/UserContainer"
import LogoImage from "../../components/layouts/user/LogoImage"
import Banner from "../../components/user/Banner"
import EpisodeList from "../../components/user/EpisodeList"

const Episodes = () => {
    return (
        <>
            <UserContainer>
                <LogoImage />
                <Banner />
                <EpisodeList />
            </UserContainer>
        </>
    )
}

export default Episodes