import { ChakraProvider } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
console.log(process.env.NEXT_PUBLIC_SERVER);
console.log(process.env.NEXT_PUBLIC_APP_ID);
  return (
    <ChakraProvider>
      <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} appId={process.env.NEXT_PUBLIC_APP_ID}>
      <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  )
}

export default MyApp
