import React from "react";
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'


const RoomPage = () => {
    const{ roomId } = useParams()

    const myMeeting = async (element) => {
        const appID = 727906480;
        
        const serverSecret = "4b966f7ac32b88ad317f453109034cfe";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, 
            serverSecret, 
            roomId, 
            Date.now().toString(),
             "Lorik Popaj"
             );
             const zc = ZegoUIKitPrebuilt.create(kitToken);
             zc.joinRoom({
                container: element, 
                sharedLinks:[
                    {
                        name: 'Copy Link',
                        url: `http://localhost:3000/room/@{roomId}`
                        
                    }

                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
             });
    };

    return <div>
        <div ref={myMeeting}/>
         </div>;



};

export default RoomPage;