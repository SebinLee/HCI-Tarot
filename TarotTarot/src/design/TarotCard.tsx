import React from "react";
import FastImage from "react-native-fast-image";

export default function TarotCard({ index = 0, size = 100 }) {
    return (
        <FastImage
            source={TarotCardType[index].source}
            style={{ width: size * 0.8, height: size }}
            resizeMode="contain"
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
    { card: "The Fool", source: require("./assets/tarotCard/0.jpg") },
    { card: "The Magician", source: require("./assets/tarotCard/1.jpg") },
    { card: "The High Priestess", source: require("./assets/tarotCard/2.jpg") },
    { card: "The Empress", source: require("./assets/tarotCard/3.jpg") },
    { card: "The Emperor", source: require("./assets/tarotCard/4.jpg") },
    { card: "The Hierophant", source: require("./assets/tarotCard/5.jpg") },
    { card: "The Lover", source: require("./assets/tarotCard/6.jpg") },
    { card: "The Chariot", source: require("./assets/tarotCard/7.jpg") },
    { card: "Strength", source: require("./assets/tarotCard/8.jpg") },
    { card: "The Hermit", source: require("./assets/tarotCard/9.jpg") },
    {
        card: "The Wheel of Fortune",
        source: require("./assets/tarotCard/10.jpg"),
    },
    { card: "Justice", source: require("./assets/tarotCard/11.jpg") },
    { card: "The Hanged Man", source: require("./assets/tarotCard/12.jpg") },
    { card: "The Death", source: require("./assets/tarotCard/13.jpg") },
    { card: "The Temperance", source: require("./assets/tarotCard/14.jpg") },
    { card: "The Devil", source: require("./assets/tarotCard/15.jpg") },
    { card: "The Tower", source: require("./assets/tarotCard/16.jpg") },
    { card: "The Star", source: require("./assets/tarotCard/17.jpg") },
    { card: "The Moon", source: require("./assets/tarotCard/18.jpg") },
    { card: "The Sun", source: require("./assets/tarotCard/19.jpg") },
    { card: "The Judgement", source: require("./assets/tarotCard/20.jpg") },
    { card: "The World", source: require("./assets/tarotCard/21.jpg") },
    // MINOR ARCANA - Wand (22-35)
    { card: "Ace of Wand", source: require("./assets/tarotCard/22.jpg") },
    { card: "Two of Wand", source: require("./assets/tarotCard/23.jpg") },
    { card: "Three of Wand", source: require("./assets/tarotCard/24.jpg") },
    { card: "Four of Wand", source: require("./assets/tarotCard/25.jpg") },
    { card: "Five of Wand", source: require("./assets/tarotCard/26.jpg") },
    { card: "Six of Wand", source: require("./assets/tarotCard/27.jpg") },
    { card: "Seven of Wand", source: require("./assets/tarotCard/28.jpg") },
    { card: "Eight of Wand", source: require("./assets/tarotCard/29.jpg") },
    { card: "Nine of Wand", source: require("./assets/tarotCard/30.jpg") },
    { card: "Ten of Wand", source: require("./assets/tarotCard/31.jpg") },
    { card: "Page of Wand", source: require("./assets/tarotCard/32.jpg") },
    { card: "Knight of Wand", source: require("./assets/tarotCard/33.jpg") },
    { card: "Queen of Wand", source: require("./assets/tarotCard/34.jpg") },
    { card: "King of Wand", source: require("./assets/tarotCard/35.jpg") },
    // MINOR ARCANA - Cups (36-49)
    { card: "Ace of Cups", source: require("./assets/tarotCard/36.jpg") },
    { card: "Two of Cups", source: require("./assets/tarotCard/37.jpg") },
    { card: "Three of Cups", source: require("./assets/tarotCard/38.jpg") },
    { card: "Four of Cups", source: require("./assets/tarotCard/39.jpg") },
    { card: "Five of Cups", source: require("./assets/tarotCard/40.jpg") },
    { card: "Six of Cups", source: require("./assets/tarotCard/41.jpg") },
    { card: "Seven of Cups", source: require("./assets/tarotCard/42.jpg") },
    { card: "Eight of Cups", source: require("./assets/tarotCard/43.jpg") },
    { card: "Nine of Cups", source: require("./assets/tarotCard/44.jpg") },
    { card: "Ten of Cups", source: require("./assets/tarotCard/45.jpg") },
    { card: "Page of Cups", source: require("./assets/tarotCard/46.jpg") },
    { card: "Knight of Cups", source: require("./assets/tarotCard/47.jpg") },
    { card: "Queen of Cups", source: require("./assets/tarotCard/48.jpg") },
    { card: "King of Cups", source: require("./assets/tarotCard/49.jpg") },
    // MINOR ARCANA - SWORD (50-63)
    { card: "Ace of Sword", source: require("./assets/tarotCard/50.jpg") },
    { card: "Two of Sword", source: require("./assets/tarotCard/51.jpg") },
    { card: "Three of Sword", source: require("./assets/tarotCard/52.jpg") },
    { card: "Four of Sword", source: require("./assets/tarotCard/53.jpg") },
    { card: "Five of Sword", source: require("./assets/tarotCard/54.jpg") },
    { card: "Six of Sword", source: require("./assets/tarotCard/55.jpg") },
    { card: "Seven of Sword", source: require("./assets/tarotCard/56.jpg") },
    { card: "Eight of Sword", source: require("./assets/tarotCard/57.jpg") },
    { card: "Nine of Sword", source: require("./assets/tarotCard/58.jpg") },
    { card: "Ten of Sword", source: require("./assets/tarotCard/59.jpg") },
    { card: "Page of Sword", source: require("./assets/tarotCard/60.jpg") },
    { card: "Knight of Sword", source: require("./assets/tarotCard/61.jpg") },
    { card: "Queen of Sword", source: require("./assets/tarotCard/62.jpg") },
    { card: "King of Sword", source: require("./assets/tarotCard/63.jpg") },
    // MINOR ARCANA - PENTACLE(64-77)
    { card: "Ace of Pentacles", source: require("./assets/tarotCard/64.jpg") },
    { card: "Two of Pentacles", source: require("./assets/tarotCard/65.jpg") },
    {
        card: "Three of Pentacles",
        source: require("./assets/tarotCard/66.jpg"),
    },
    { card: "Four of Pentacles", source: require("./assets/tarotCard/67.jpg") },
    { card: "Five of Pentacles", source: require("./assets/tarotCard/68.jpg") },
    { card: "Six of Pentacles", source: require("./assets/tarotCard/69.jpg") },
    {
        card: "Seven of Pentacles",
        source: require("./assets/tarotCard/70.jpg"),
    },
    {
        card: "Eight of Pentacles",
        source: require("./assets/tarotCard/71.jpg"),
    },
    { card: "Nine of Pentacles", source: require("./assets/tarotCard/72.jpg") },
    { card: "Ten of Pentacles", source: require("./assets/tarotCard/73.jpg") },
    { card: "Page of Pentacles", source: require("./assets/tarotCard/74.jpg") },
    {
        card: "Knight of Pentacles",
        source: require("./assets/tarotCard/75.jpg"),
    },
    {
        card: "Queen of Pentacles",
        source: require("./assets/tarotCard/76.jpg"),
    },
    { card: "King of Pentacles", source: require("./assets/tarotCard/77.jpg") },
];
