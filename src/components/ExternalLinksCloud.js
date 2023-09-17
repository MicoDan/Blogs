import { HStack, Text } from '@chakra-ui/react';

import ExternalLink from './ExternalLink';

const ExternalLinksCloud = () => {
  return (
    <HStack>
      <Text>
        <ExternalLink href="/about">
          🤙 More about me  
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="https://twitter.com/MicoDan6">
          🐦 Twitter
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="https://github.com/MicoDan">
          🐙 GitHub
        </ExternalLink>
      </Text>
      <Text>
        <ExternalLink href="micodan369@gmail.com">
          ✉️ Email
        </ExternalLink>
      </Text>
    </HStack>
  );
};

export default ExternalLinksCloud;
