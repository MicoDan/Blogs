import {
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

import { DocumentHead, ExternalLink } from '../src/components';

const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Mico Dan - About" postPath="/about" />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1">
          About Me
        </Heading>
        <small>Last Update: May 17, 2023</small>
        <Text lineHeight="175%" as="h2" fontSize="lg" pt={2}>
          Hi! My name is Mico Dan. I am a software engineer,
          and a technical writer. I love working with open source technologies
          and writing most of what I learn.
        </Text>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          When I am not writing code or working on a blog post, I&#39;m probably
          spending my time either{' '}
            reading a book
          or{' '}
          <ExternalLink href="https://www.instagram.com/mico.dan.50">
            traveling and socializing
          </ExternalLink>
        </Text>

        <Heading size="lg" as="h1" pt={8}>
          Open Source & Me
        </Heading>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          Over the years I&#39;ve made some contributions to some projects and
          organizations such as Node.js and Reactjs both as a
          contributor and maintainer. 
        </Text>

        <Heading size="lg" as="h1" pt={8}>
          Technical Writing
        </Heading>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          I specifically write on JavaScript frameworks such as Node.js,
          Reactjs, and React Native (Expo).
        </Text>
        <List spacing={4}>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            Started Writing on{' '}
            Medium
            {' '}
            in 2017.
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            In December 2020, recognized as a Distinguished author and a
            moderator by{' '}
            <ExternalLink href="https://dev.to/amanhimself">
              Dev.to
            </ExternalLink>
            .
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            In 2021, one of my post on{' '}
            <ExternalLink href="https://amanhimself.dev/blog/firebase-authentication-with-expo/">
              integrating Firebase auth in an Expo app
            </ExternalLink>{' '}
            was recommended as an official resource by{' '}
            <ExternalLink href="https://devlibrary.withgoogle.com/products/firebase">
              Google&#39;s Dev Library
            </ExternalLink>
            .
          </ListItem>
          <ListItem fontSize="lg">
            <ListIcon as={MdCheckCircle} color="green.500" />
            By 2022, worked with more thanorganizations and tech
            publications and have written many articles and
            tutorials.
          </ListItem>
        </List>
        <Text lineHeight="175%" as="h2" fontSize="lg" pt={2}>
          Some of the publications I&#39;ve worked with:{' '}
          <ExternalLink href="https://blog.logrocket.com/author/amanmittal/">
            LogRocket
          </ExternalLink>
          ,{' '}
          <ExternalLink href="https://blog.openreplay.com/authors/aman-mittal">
            Open Replay
          </ExternalLink>
          .
        </Text>
        <Heading size="lg" as="h1" pt={8}>
          Work History
        </Heading>
        <List spacing={4}>
          <ListItem>
            🚀 Software engineer and coordinator of app deliverance at Daca (2022 -
            8/2023)
          </ListItem>
          <ListItem>🥑 Full-time Fullstack JavaScript Developer and coordinator of app deliverance at MoonHoldings (2020 - 2023)</ListItem>
        </List>
        <Heading size="lg" as="h2" pt={8}>
          Speaking
        </Heading>
        <List spacing={4}>
          <ListItem fontSize="lg">
            <ExternalLink href="https://youtu.be/cYTcD_RqQwE">
              Developed a library that embeds an AI powered chat component in your website
              (2023)
            </ExternalLink>
          </ListItem>
        </List>
        <Heading size="lg" as="h1" pt={8}>
          ⚙️ What I use
        </Heading>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          {`I almost never get asked about what's my setup is or what I use.
          Nonetheless, here is what I use on daily basis.`}
        </Text>
        <Heading size="md" as="h2" pt={8}>
          Coding Software
        </Heading>

        <List spacing={4}>
          <ListItem fontSize="lg">
            <ExternalLink href="https://code.visualstudio.com/">
              Visual Studio Code
            </ExternalLink>
            - My friend{' '}
            <ExternalLink href="https://github.com/mugishayves">
              yves
            </ExternalLink>{' '}
            introduced me to VS Code. At that time, we were both using Atom. I
            have never looked back
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://brave.com/">Brave</ExternalLink>- as my
            personal side browser. I also use Chrome and sometimes Safari and Firefox
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=nopjmp.fairyfloss">
              fairyFloss
            </ExternalLink>
            - As much as I love to try new themes in VSCode, I always come back
            to fairyFloss
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://iterm2.com/">item2</ExternalLink>- My
            terminal of choice, with ZSH shell
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.blender.org">
              Blender
            </ExternalLink>
            - For modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.cockos.com/licecap/">
              LICEcap
            </ExternalLink>
            - For creating GIFs
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.figma.com">
              Figma
            </ExternalLink>
            - For designing amazing user interfaces.
          </ListItem>
        </List>
        <Text>
          Find out more about what VSCode extensions I regularly use{' '}
          <ExternalLink href="https://amanhimself.dev/blog/setup-macbook-m1/">
            here
          </ExternalLink>
          .
        </Text>
        <Heading size="md" as="h2" pt={8}>
          Gear
        </Heading>

        <List spacing={4}>
          <ListItem fontSize="lg">
              Lenovo ThinkBook
          </ListItem>
          <ListItem fontSize="lg">
              Desk & Chair
            - Pretty much, any flat surface
          </ListItem>
        </List>
        <Heading size="lg" as="h1" pt={8}>
          Awards and recognition
        </Heading>
        <List spacing={4}>
          <ListItem fontSize="lg">
              Won an award as the best mentor in HerInTech awards for teaching
              a successful young group of girls to program.

          </ListItem>
        </List>
      </VStack>
    </>
  );
};

export default AboutPage;
