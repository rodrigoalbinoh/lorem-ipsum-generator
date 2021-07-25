import { Flex, Grid, Stack, StackProps } from '@chakra-ui/react'
import React from 'react'

export const Main = (props: StackProps) => (
  <Grid
    gap={6}
    width="100%"
    maxWidth="48rem"
    height="100%"
    minH="100vh"
    pt="2rem"
    px="1rem"
    gridTemplateColumns={{
      base: 'none',
      lg: '1fr 2fr'
    }}
    gridAutoRows={{
      base: 'min-content',
      lg: 'unset'
    }}
    {...props}
  />
)
