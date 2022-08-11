import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({isAuthenticated, isAuthenticating, user, authenticate, logout, isLoggingOut}) {
    
    return(
        <header>
            <Flex justifyContent="space-between" bg="blue.600" color="white" px={10} py={6}>
                <Center><Text fontSize="xl" fontWeight="bold">Dashboard</Text></Center>
                <Center>
                    {isAuthenticated ? (
                        <>
                        <Text>{user.getUsername()}</Text>
                        <Button ml={4} colorScheme="#0075be" onClick={logout} disabled={isLoggingOut}>Logout</Button>
                        </>
                    ) : (
                        <Button colorScheme="purple" onClick={() => authenticate({
                            signingMessage: "Sign to auth on Dashboard3"
                        })} disabled={isAuthenticating}>Login</Button>
                    )}
                </Center>
            </Flex>
        </header>
    )
}