import React, { useEffect } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { NavigationPropEnum } from "../design/layout/LayoutInterface";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import Screen from "../design/Screen";

//@ts-ignore
import GoogleAuth from "../design/assets/auth-google.svg";
import { CommonActions } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { storeUserInfo } from "../library/redux/UserInfoReducer";

const buttonWidth = Math.round(Dimensions.get("screen").width * 0.85);

export default function Start({ navigation }) {
    const dispatch = useDispatch();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                "749688606501-frpptri8ioiiapche8fk50nnit3p4bs5.apps.googleusercontent.com",
        });
    }, []);

    // Handle firebase Auth
    const onAuthStateChanged = (user: any) => {
        if (user) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        {
                            name: "MainContent",
                            params: { routeParam: "front" },
                        },
                    ],
                }),
            );

            dispatch(
                storeUserInfo({
                    id: user.uid,
                    username: user.displayName,
                    profilePic: user.photoURL,
                    createdAt: user.metadata.creationTime,
                }),
            );
        }
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    });

    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
        });

        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    return (
        <Screen
            title="test"
            navigationLeftProp={NavigationPropEnum.back}
            navigationRightProp={NavigationPropEnum.hide}
            onRightPropPress={() => {
                console.log("Testtest");
            }}
        >
            <TouchableOpacity
                style={{
                    margin: 5,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onPress={onGoogleButtonPress}
            >
                <GoogleAuth
                    style={{
                        width: buttonWidth,
                        height: buttonWidth * 0.15,
                    }}
                />
            </TouchableOpacity>
        </Screen>
    );
}
