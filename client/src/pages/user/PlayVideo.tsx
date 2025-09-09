import UserContainer from "../../components/layouts/user/UserContainer"
import LogoImage from "../../components/layouts/user/LogoImage"
import Banner from "../../components/user/Banner"
import Video from "../../components/user/Video"

const PlayVideo = () => {
    return (
        <UserContainer>
            <LogoImage />
            <Banner />
            <Video />
        </UserContainer>
    )
}

export default PlayVideo