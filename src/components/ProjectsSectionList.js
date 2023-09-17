import { VStack, Heading, List, ListItem } from '@chakra-ui/react';

import ProjectInfoCard from './ProjectInfoCard';

const ProjectsSectionList = ({ projects }) => {
  return (
    <VStack w="full" alignItems="flex-start" spacing={4} as="section" mt={16}>
      <Heading size="lg">Open Source Projects </Heading>
      <List spacing={6}>
        {projects.map(project => (
          <ListItem key={project.href}>
            <ProjectInfoCard {...project} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default ProjectsSectionList;
