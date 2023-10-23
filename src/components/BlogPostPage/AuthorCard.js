import {
  Box,
  Text,
  VStack,
  Link,
  useColorModeValue,
  HStack
} from '@chakra-ui/react';

const AuthorCard = () => {
  const textMode = useColorModeValue('black', 'white');
  return (
    <Box
      borderRadius="md"
      padding="8px 12px"
      alignItems="center"
      border="1px solid #805AD5"
    >
      <HStack justifyContent="flex-start">
        <VStack alignItems="stretch" as="section" pt={2}>
          <HStack justifyContent="space-between">
            <Text fontSize="md" fontWeight="600" color={textMode}>
              <Link href="/about">Mico Dan</Link>{' '}
            </Text>
            <HStack justifyContent="flex-end">
              {/* <Box
                borderRadius="md"
                padding="2px 2px"
                alignItems="center"
                border="1px solid #805AD5"
              > */}
              {/* </Box> */}
              <Box>&nbsp;</Box>
              <Link isExternal href="https://amanhimself.substack.com/">
              </Link>
              {/* </Box> */}
              <Box>&nbsp;</Box>
              {/* <Box
                borderRadius="md"
                padding="2px 2px"
                alignItems="center"
                border="1px solid #805AD5"
              > */}
              <Link isExternal href="https://twitter.com/MicoDan6">
                <Text fontSize="13px" color="purple.500" fontWeight="bold">
                  Twitter
                </Text>
              </Link>
              {/* </Box> */}
            </HStack>
          </HStack>
          <Text fontSize="md" color={textMode}>
            I&apos;m a FullStack Developer and a technical writer. In this blog,
            I write about Technical writing, Node.js, React Native and Expo.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AuthorCard;
