import { Link } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const ProfileScreen = () => {
    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Link href="/settings">Settings</Link>
        </SafeAreaView>
    )
}

export default ProfileScreen