import { Link } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SettingsScreen = () => {
    return (
        <SafeAreaView>
            <Text>Settings</Text>
            <Link href="/about">About Us</Link>
        </SafeAreaView>
    )
}

export default SettingsScreen