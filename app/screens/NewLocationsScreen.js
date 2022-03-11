import React, { useContext } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";
import { useSelector } from "react-redux";
const NewLocationsScreen = () => {

    const courses = useSelector(state => state.courses);
    return (
        <Screen style={styles.container}>
            <Text>دوره های جدید</Text>
        </Screen>
    );
};

export default NewLocationsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f4f4",
    },
});
