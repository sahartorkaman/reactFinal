import React from "react";

import { View, StyleSheet, Image, ScrollView, } from "react-native";
import { numberWithCommas } from "../../utils/price";
import CustomText from "./CustomText";

const Card = ({ title, price, teacher, time, image, Info = null, stylee = 1 }) => {

    return (
        <View style={(stylee == 0) ? styles.cardHorizontal : styles.card} >
            <Image

                fadeDuration={200}

                resizeMode="contain"
                source={{
                    uri: `https://rnapi.ghorbany.dev/${image}`,
                }}
                style={styles.courseImage}
            />
            <View style={{ padding: 20 }}>
                <CustomText fontFamily="yekan" size="2" styles={styles.title}>
                    {title}
                </CustomText>
                <View style={styles.courseDetails}>
                    <CustomText fontFamily="yekan" size="1.5">
                        قیمت دوره :
                        {price === 0
                            ? " رایگان"
                            : ` ${numberWithCommas(price)} تومان`}
                    </CustomText>
                    <CustomText fontFamily="yekan" size="1.5">
                        زمان دوره : {time}
                    </CustomText>
                </View>
                <View style={styles.userContainer}>
                    <CustomText
                        fontFamily="ih"
                        size="1.5"
                        styles={styles.teacher}
                    >
                        مدرس دوره : {teacher}
                    </CustomText>
                </View>
            </View>
            {Info ? (
                <View style={{ flex: 1 }}>
                    <CustomText fontFamily="yekan" size="2.5">
                        توضیحات دوره :
                    </CustomText>
                    <ScrollView>
                        <CustomText
                            fontFamily="ih"
                            size="1.7"
                            styles={styles.courseInformation}
                        >
                            {Info}
                        </CustomText>
                    </ScrollView>
                </View>
            ) : null}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardHorizontal: {
        marginTop: 5,
        padding: 10,

        //  backgroundColor: "teal",

        // color: "white",
        marginHorizontal: 10,
        //  height: 300,
        color: "black",
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
    },
    card: {
        // flex: 1,
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,

    },

    courseImage: {
        textAlign: 'center',
        marginTop: 10,
        width: "100%",
        height: 200,
    },
    courseDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    courseInformation: {
        textAlign: "justify",
        marginVertical: 10,
        lineHeight: 25,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    userContainer: {
        marginVertical: 10,
    },
    title: {
        marginBottom: 7,
        alignSelf: "center",
    },
    teacher: {
        alignSelf: "center",
    },
});
