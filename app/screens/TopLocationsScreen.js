import React, { useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";
// import ToplearnContext from "./../contexts/ToplearnContext";
import { useSelector } from "react-redux";
const TopLocationsScreen = () => {

    const courses = useSelector(state => state.courses);
    return (
        <Screen style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={(course) => course._id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        time="15:00:00"
                        price={item.price}
                        image={item.imageUrl}
                        teacher=""
                    />
                )}
            />
        </Screen>
    );
};

export default TopLocationsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f4f4",
    },
});
