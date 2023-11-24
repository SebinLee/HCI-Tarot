import React from "react";
import FastImage from "react-native-fast-image";

export default function TarotCard({ index = 0 }) {
    return (
        <FastImage
            source={TarotCardType[index].source}
            style={{ width: 100, height: 200 }}
        />
    );
}

// Index
// 0 - 21: MAJOR ARCANA
// 22 - 35: MINOR - Wand
// 36 - 49: MINOR - Cup
// 50 - 63: MINOR - Sword
// 64 - 77: MINOR - Pentacle
export const TarotCardType = [
    // MAJOR ARCANA
    { card: "TheFool", source: require("./assets/tarotCard/0.jpg") },
    { card: "TheMagician", source: require("./assets/tarotCard/1.jpg") },
    { card: "TheHighPriestess", source: require("./assets/tarotCard/2.jpg") },
    { card: "TheEmpress", source: require("./assets/tarotCard/3.jpg") },
    { card: "TheEmperor", source: require("./assets/tarotCard/4.jpg") },
    { card: "TheHierophant", source: require("./assets/tarotCard/5.jpg") },
    { card: "TheLover", source: require("./assets/tarotCard/6.jpg") },
    { card: "TheChariot", source: require("./assets/tarotCard/7.jpg") },
    { card: "Strength", source: require("./assets/tarotCard/8.jpg") },
    { card: "TheHermit", source: require("./assets/tarotCard/9.jpg") },
    { card: "TheWheelOfFortune", source: require("./assets/tarotCard/10.jpg") },
    { card: "Justice", source: require("./assets/tarotCard/11.jpg") },
    { card: "TheHangedMan", source: require("./assets/tarotCard/12.jpg") },
    { card: "TheDeath", source: require("./assets/tarotCard/13.jpg") },
    { card: "TheTemperance", source: require("./assets/tarotCard/14.jpg") },
    { card: "TheDevil", source: require("./assets/tarotCard/15.jpg") },
    { card: "TheTower", source: require("./assets/tarotCard/16.jpg") },
    { card: "TheStar", source: require("./assets/tarotCard/17.jpg") },
    { card: "TheMoon", source: require("./assets/tarotCard/18.jpg") },
    { card: "TheSun", source: require("./assets/tarotCard/19.jpg") },
    { card: "TheJudgement", source: require("./assets/tarotCard/20.jpg") },
    { card: "TheWorld", source: require("./assets/tarotCard/21.jpg") },
    // MINOR ARCANA - Wand (22-35)
    { card: "AceOfWand", source: require("./assets/tarotCard/22.jpg") },
    { card: "TwoOfWand", source: require("./assets/tarotCard/23.jpg") },
    { card: "ThreeOfWand", source: require("./assets/tarotCard/24.jpg") },
    { card: "FourOfWand", source: require("./assets/tarotCard/25.jpg") },
    { card: "FiveOfWand", source: require("./assets/tarotCard/26.jpg") },
    { card: "SixOfWand", source: require("./assets/tarotCard/27.jpg") },
    { card: "SevenOfWand", source: require("./assets/tarotCard/28.jpg") },
    { card: "EightOfWand", source: require("./assets/tarotCard/29.jpg") },
    { card: "NineOfWand", source: require("./assets/tarotCard/30.jpg") },
    { card: "TenOfWand", source: require("./assets/tarotCard/31.jpg") },
    { card: "PageOfWand", source: require("./assets/tarotCard/32.jpg") },
    { card: "KnightOfWand", source: require("./assets/tarotCard/33.jpg") },
    { card: "QueenOfWand", source: require("./assets/tarotCard/34.jpg") },
    { card: "KingOfWand", source: require("./assets/tarotCard/35.jpg") },
    // MINOR ARCANA - Cups (36-49)
    { card: "AceOfCups", source: require("./assets/tarotCard/36.jpg") },
    { card: "TwoOfCups", source: require("./assets/tarotCard/37.jpg") },
    { card: "ThreeOfCups", source: require("./assets/tarotCard/38.jpg") },
    { card: "FourOfCups", source: require("./assets/tarotCard/39.jpg") },
    { card: "FiveOfCups", source: require("./assets/tarotCard/40.jpg") },
    { card: "SixOfCups", source: require("./assets/tarotCard/41.jpg") },
    { card: "SevenOfCups", source: require("./assets/tarotCard/42.jpg") },
    { card: "EightOfCups", source: require("./assets/tarotCard/43.jpg") },
    { card: "NineOfCups", source: require("./assets/tarotCard/44.jpg") },
    { card: "TenOfCups", source: require("./assets/tarotCard/45.jpg") },
    { card: "PageOfCups", source: require("./assets/tarotCard/46.jpg") },
    { card: "KnightOfCups", source: require("./assets/tarotCard/47.jpg") },
    { card: "QueenOfCups", source: require("./assets/tarotCard/48.jpg") },
    { card: "KingOfCups", source: require("./assets/tarotCard/49.jpg") },
    // MINOR ARCANA - SWORD (50-63)
    { card: "AceOfSword", source: require("./assets/tarotCard/50.jpg") },
    { card: "TwoOfSword", source: require("./assets/tarotCard/51.jpg") },
    { card: "ThreeOfSword", source: require("./assets/tarotCard/52.jpg") },
    { card: "FourOfSword", source: require("./assets/tarotCard/53.jpg") },
    { card: "FiveOfSword", source: require("./assets/tarotCard/54.jpg") },
    { card: "SixOfSword", source: require("./assets/tarotCard/55.jpg") },
    { card: "SevenOfSword", source: require("./assets/tarotCard/56.jpg") },
    { card: "EightOfSword", source: require("./assets/tarotCard/57.jpg") },
    { card: "NineOfSword", source: require("./assets/tarotCard/58.jpg") },
    { card: "TenOfSword", source: require("./assets/tarotCard/59.jpg") },
    { card: "PageOfSword", source: require("./assets/tarotCard/60.jpg") },
    { card: "KnightOfSword", source: require("./assets/tarotCard/61.jpg") },
    { card: "QueenOfSword", source: require("./assets/tarotCard/62.jpg") },
    { card: "KingOfSword", source: require("./assets/tarotCard/63.jpg") },
    // MINOR ARCANA - PENTACLE(64-77)
    { card: "AceOfPentacles", source: require("./assets/tarotCard/64.jpg") },
    { card: "TwoOfPentacles", source: require("./assets/tarotCard/65.jpg") },
    { card: "ThreeOfPentacles", source: require("./assets/tarotCard/66.jpg") },
    { card: "FourOfPentacles", source: require("./assets/tarotCard/67.jpg") },
    { card: "FiveOfPentacles", source: require("./assets/tarotCard/68.jpg") },
    { card: "SixOfPentacles", source: require("./assets/tarotCard/69.jpg") },
    { card: "SevenOfPentacles", source: require("./assets/tarotCard/70.jpg") },
    { card: "EightOfPentacles", source: require("./assets/tarotCard/71.jpg") },
    { card: "NineOfPentacles", source: require("./assets/tarotCard/72.jpg") },
    { card: "TenOfPentacles", source: require("./assets/tarotCard/73.jpg") },
    { card: "PageOfPentacles", source: require("./assets/tarotCard/74.jpg") },
    { card: "KnightOfPentacles", source: require("./assets/tarotCard/75.jpg") },
    { card: "QueenOfPentacles", source: require("./assets/tarotCard/76.jpg") },
    { card: "KingOfPentacles", source: require("./assets/tarotCard/77.jpg") },
];
