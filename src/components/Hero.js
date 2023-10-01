import { Box, Stack, VStack, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';

import ExternalLinksCloud from './ExternalLinksCloud';
import HeroImage from './HeroImage';

const RotateBox = styled.span`
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Hero = () => {
  return (
    <Box pt={28}>
      <Stack
        alignItems="center"
        spacing={12}
        w="full"
        direction={{ base: 'column-reverse', md: 'row' }}
        as="section"
      >
        <VStack spacing={3} alignItems="flex-start" w="full">
          <Stack
            spacing={3}
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems="center"
          >
            <Heading size="lg" as="h1">
              <RotateBox>
                <Image
                  src="/handwave.png"
                  width={24}
                  height={24}
                  alt="Hand Wave Emoji"
                />
              </RotateBox>{' '}
              Hey, I&apos;m Dan
            </Heading>
          </Stack>

          <Text lineHeight="175%" as="h2" fontSize="lg">
            I&apos;m a software engineer and a technical writer. I love working
            with open source technologies and writing about what I learn.
          </Text>
          <Text lineHeight="175%" as="h2" fontSize="lg">
            I&apos;ve been writing online since 2022, mostly cross-platform
            mobile development and sometimes on web. I&apos;ve written many
            articles and tutorials on the internet. Hence, I started this blog
            to share my software development journey.
          </Text>
          <ExternalLinksCloud />
        </VStack>
        <HeroImage />
      </Stack>
    </Box>
  );
};

export default Hero;
