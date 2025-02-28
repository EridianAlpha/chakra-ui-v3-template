import { Box, Checkbox, ClientOnly, HStack, Heading, Progress, RadioGroup, Skeleton, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { ColorModeToggle } from "../components/color-mode/ColorModeToggle"

import Footer from "../components/Footer"

export default async function Page() {
    return (
        <VStack minH="100vh">
            <Box pos="absolute" top="4" right="4">
                <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
                    <ColorModeToggle />
                </ClientOnly>
            </Box>
            <VStack gap="8" justifyContent={"center"} alignItems={"center"} flexGrow={1}>
                <Image alt="chakra logo" src="/static/logo.svg" width="80" height="80" />
                <Heading size="2xl" letterSpacing="tight">
                    ChakraUI V3 & Next.js Template
                </Heading>

                <HStack gap="10">
                    <Checkbox.Root defaultChecked>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control>
                            <Checkbox.Indicator />
                        </Checkbox.Control>
                        <Checkbox.Label>Checkbox</Checkbox.Label>
                    </Checkbox.Root>

                    <RadioGroup.Root display="inline-flex" defaultValue="1">
                        <RadioGroup.Item value="1" mr="2">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemControl>
                                <RadioGroup.ItemIndicator />
                            </RadioGroup.ItemControl>
                            <RadioGroup.ItemText lineHeight="1">Radio 1</RadioGroup.ItemText>
                        </RadioGroup.Item>

                        <RadioGroup.Item value="2">
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemControl>
                                <RadioGroup.ItemIndicator />
                            </RadioGroup.ItemControl>
                            <RadioGroup.ItemText lineHeight="1">Radio 2</RadioGroup.ItemText>
                        </RadioGroup.Item>
                    </RadioGroup.Root>
                </HStack>

                <Progress.Root width="300px" value={65} striped>
                    <Progress.Track>
                        <Progress.Range />
                    </Progress.Track>
                </Progress.Root>
            </VStack>
            <Box flexGrow={1} />
            <Footer />
        </VStack>
    )
}
