import { Link } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const DashboardScreen = () => {
    return (
        <SafeAreaView>
            <Text>
                Dashboard
            </Text>
            <Link href="/profile">Profile</Link>
        </SafeAreaView>
    )
}

export default DashboardScreen