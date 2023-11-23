import React from "react";
import FastImage from "react-native-fast-image";

export default function TarotCard() {
    return <FastImage />;
}

export enum TarotCardType {
    // MAJOR ARCANA
    "TheFool", 
    "TheMagician", 
    "TheHighPriestess", 
    "TheEmpress", 
    "TheEmperor",
    "TheHierophant",
    "TheLover",
    "TheChariot",
    "Strength",
    "TheHermit",
    "TheWheelOfFortune",
    "Justice",
    "TheHangedMan",
    "TheDeath",
    "TheTemperance",
    "TheDevil",
    "TheTower",
    "TheStar",
    "TheMoon",
    "TheSun",
    "TheJudgement",
    "TheWorld",
    // MINOR ARCANA - CUPS
    "PageOfCups",
    "KnightOfCups",
    "QueenOfCups",
    "KingOfCups",
    "AceOfCups",
    "TwoOfCups",
    "ThreeOfCups",
    "FourOfCups",
    "FiveOfCups",
    "SixOfCups",
    "SevenOfCups",
    "EightOfCups",
    "NineOfCups",
    "TenOfCups",
    // MINOR ARCANA - SWORD
    "PageOfSwords",
    "KnightOfSwords",
    "QueenOfSwords",
    "KingOfSwords",
    "AceOfSwords",
    "TwoOfSwords",
    "ThreeOfSwords",
    "FourOfSwords",
    "FiveOfSwords",
    "SixOfSwords",
    "SevenOfSwords",
    "EightOfSwords",
    "NineOfSwords",
    "TenOfSwords",
    // MINOR ARCANA - WAND
    "PageOfWands",
    "KnightOfWands",
    "QueenOfWands",
    "KingOfWands",
    "AceOfWands",
    "TwoOfWands",
    "ThreeOfWands",
    "FourOfWands",
    "FiveOfWands",
    "SixOfWands",
    "SevenOfWands",
    "EightOfWands",
    "NineOfWands",
    "TenOfWands",
    // MINOR ARCANA - PENTACLE
    "PageOfPentacles",
    "KnightOfPentacles",
    "QueenOfPentacles",
    "KingOfPentacles",
    "AceOfPentacles",
    "TwoOfPentacles",
    "ThreeOfPentacles",
    "FourOfPentacles",
    "FiveOfPentacles",
    "SixOfPentacles",
    "SevenOfPentacles",
    "EightOfPentacles",
    "NineOfPentacles",
    "TenOfPentacles",
}
