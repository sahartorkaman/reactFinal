


// List.js
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import Card from "../components/shared/Card";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{details}</Text>
    </View>
);

// the filter
const LisrSearchScreen = ({ searchPhrase, setCLicked, data }) => {
    // const renderItem = ({ item }) => {
    //     // when no input, show all
    //     if (searchPhrase === "") {
    //         return <Item name={item.title} details={item.info.} />;
    //     }
    //     // filter of the name
    //     if (item.title.includes(searchPhrase)) {
    //         return <Item name={item.title} details={item.info} />;
    //     }
    //     // filter of the description
    //     if (item.info.includes(searchPhrase)) {
    //         return <Item name={item.title} details={item.info} />;
    //     }

    // };

    return (
        <SafeAreaView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    setCLicked(false);
                }}
            >
                {searchPhrase ? (
                    <FlatList
                        data={data}
                        // renderItem={renderItem}
                        keyExtractor={(item) => item._id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("LocationDetailsScreen", {
                                        course: item,
                                    })
                                }
                            >
                                <Card
                                    title={item.title}
                                    time="15:00:00"
                                    price={item.price}
                                    image={item.imageUrl}
                                    teacher=""
                                    info={item.info}
                                    stylee="0"

                                />
                            </TouchableOpacity>
                        )}
                    />
                ) : null}

            </View>
        </SafeAreaView>
    );
};

export default LisrSearchScreen
const styles = StyleSheet.create({
    list__container: {
        margin: 10,
        // height: "85%",
        width: "100%",
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
});
