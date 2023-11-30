import { Dimensions, View } from "react-native";
import TarotCard, { TarotCardType } from "../TarotCard";
import { Text, TextType } from "../Text";
import Color from "../Color";

export default function DisplayTarotCard({ index }) {
    if (index < 0 || TarotCardType.length <= index) return null;

    return (
        <View style={{ marginVertical: 5, alignItems: "center" }}>
            <TarotCard
                index={index}
                size={Dimensions.get("window").height * 0.3}
            />
            <Text
                type={TextType.H3}
                color={Color.Primary}
                style={{ marginVertical: 3, fontWeight: "700" }}
            >
                {TarotCardType[index].card}
            </Text>
        </View>
    );
}
