import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, View, Text } from "react-native";
import { cores } from '../../estilosGlobal';
import { Video } from 'expo-av';

export default function Reels() {
    const video = useRef(null);
    const [status, setStatus] = useState({});

    function myVideo() {
        return <>
            <Video
                ref={video}
                style={{ width: 420, height: 770 }}
                source={{
                    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                isLooping
                resizeMode="cover"
                shouldPlay
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </>
    }

    return <>
        <ScrollView>
                {myVideo()}
                {myVideo()}
                {myVideo()}
        </ScrollView>
    </>
}