import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = ({ children }) => {
    return <View style={styles.card}>
        <View style={styles.cardContent}>{children}</View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowRadius: 4,
        shadowColor: '#333',
        marginVertical: 10,
        marginHorizontal: 6,
        shadowOpacity: 0.2,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
    },
    cardContent: {
        padding: 10,
    }
})
export default Card;
