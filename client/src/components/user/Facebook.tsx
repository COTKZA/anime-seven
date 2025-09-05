
import { useEffect } from "react"

const Facebook = () => {
    useEffect(() => {
        //Facebook SDK
        if (!document.getElementById("facebook-jssdk")) {
            const script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v17.0";
            script.async = true;
            document.body.appendChild(script);
        } else {
            // @ts-ignore
            if (window.FB) {
                // @ts-ignore
                window.FB.XFBML.parse();
            }
        }
    }, []);

    return (
        <>
            <div className="shadow-xl/40 w-full lg:w-[260px]">
                <div className="bg-[#e64a45] rounded-t-sm border">
                    <div className="flex items-center justify-between p-2.5">
                        <h3 className="text-white text-md">ฝากกด Like หน่อยนะครับ ^^</h3>
                    </div>
                </div>
                <div className="bg-[#2e3338] rounded-b-sm h-90 p-4 border">
                    <div
                        className="fb-page"
                        data-href="https://www.facebook.com/profile.php?id=100068704045790&ref=embed_page#"
                        data-tabs="none"
                        data-width="230"
                        data-height="200"
                        data-small-header="true"
                        data-adapt-container-width="false"
                        data-hide-cover="false"
                        data-show-facepile="true"
                    ></div>
                </div>
            </div>
        </>
    )
}

export default Facebook