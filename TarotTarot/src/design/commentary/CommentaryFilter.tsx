import React, { useMemo, useState } from "react";
import { View } from "react-native";
import Chip, { ChipContainer } from "../Chip";
import { Text, TextType } from "../Text";
import Color from "../Color";
import TextInput from "../TextInput";
import { Icon } from "@ui-kitten/components";

export default function CommentaryFilter({
    selectedChips = [],
    setSelectedChips,
}) {
    return (
        <View style={{ marginBottom: 30 }}>
            <FilterHeading text="Filter" />
            <ChipContainer>
                {chip.map((item) => (
                    <Chip
                        style={{
                            height: 30,
                            paddingHorizontal: 15,
                        }}
                        filled={true}
                        text={item}
                        selected={selectedChips.includes(item)}
                        onPress={() => {
                            !selectedChips.includes(item)
                                ? setSelectedChips([...selectedChips, item])
                                : setSelectedChips(
                                      selectedChips.filter(
                                          (value) => value != item,
                                      ),
                                  );
                        }}
                        showAccessoryRight={true}
                    />
                ))}
            </ChipContainer>
        </View>
    );
}

const FilterHeading = ({ text = "" }) => (
    <Text
        style={{ marginVertical: 10, fontWeight: "500" }}
        color={Color.Black}
        type={TextType.H3}
    >
        {text}
    </Text>
);

const chip = ["연애운", "금전운", "학업운"];
