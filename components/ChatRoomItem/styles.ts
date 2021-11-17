import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    text: {
        color: "gray"
    },
    container: {
        flexDirection: 'row',
        padding: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 3
    },
    image: {
        height: '50px',
        width: '50px',
        borderRadius: 50,
        marginRight: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    badgeContainer: {
        backgroundColor: '#3872E9',
        width: 20,
        height: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 44,
        top: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    badgeText: {
        color: 'white',
        fontSize: 12
    }
})

export default styles;