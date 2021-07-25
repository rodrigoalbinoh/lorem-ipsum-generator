import React, { useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import {
  Box,
  Link as ChakraLink,
  Text,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  Button,
  VStack,
  useColorModeValue,
  Flex,
  useClipboard,
  chakra,
  Link,
} from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

const Index = () => {
  const [lorem, setLorem] = useState("");
  const { hasCopied, onCopy } = useClipboard(lorem);
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const generatedText = loremIpsum({
      count: parseInt(data.paragraphs),
      format: "plain",
      suffix: "\n",
      units: "paragraphs",
    });

    setLorem(generatedText);
  }

  const splitedText = useMemo(() => lorem.split("\n"), [lorem]);

  return (
    <Container pt="5rem">
      <Hero title="Lorem Ipsum Generator" description="Insira a quantidade de parágrafos desejada e gere o texto. Você poderá utilizá-lo onde desejar." />
      <Main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            spacing={4}
            bg={useColorModeValue("gray.100", "gray.800")}
            p={4}
            borderRadius={12}
          >
            <FormControl>
              <FormLabel>Parágrafos</FormLabel>
              <NumberInput defaultValue={2} min={1} max={20} variant="filled">
                <NumberInputField
                  bg={useColorModeValue("gray.200", "gray.700")}
                  {...register("paragraphs", {
                    required: true,
                    minLength: {
                      value: 1,
                      message: "O mínimo de parágrafos deve ser 1",
                    },
                  })}
                />
              </NumberInput>
            </FormControl>
            <Button
              width="100%"
              type="submit"
              variant="solid"
              colorScheme="blue"
            >
              Gerar
            </Button>
          </VStack>
        </form>
        <Box
          spacing={4}
          bg={useColorModeValue("gray.100", "gray.800")}
          p={4}
          borderRadius={12}
          maxHeight="500px"
        >
          <Flex justify="flex-end">
            <Button
              size="sm"
              variant="ghost"
              colorScheme="blue"
              onClick={onCopy}
            >
              {hasCopied ? "Copiado" : "Copiar texto"}
            </Button>
          </Flex>
          <Box
            mt={4}
            overflow="auto"
            maxHeight="420px"
            sx={{
              "p + p": {
                marginTop: "10px",
              },
            }}
          >
            {splitedText.map((paragraph) => (
              <chakra.p>{paragraph}</chakra.p>
            ))}
          </Box>
        </Box>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Feito com ❤️ por</Text>
        <ChakraLink pl={2} isExternal href="https://rodrigohammes.com">
          Rodrigo Albino Hammes
        </ChakraLink>
      </Footer>
    </Container>
  );
};

export default Index;
