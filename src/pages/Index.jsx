import { useState } from "react";
import { Container, VStack, Input, Button, Text, useColorMode, useColorModeValue, IconButton, FormControl, FormLabel, Box, useToast } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const handleLogin = () => {
    if (!email) {
      toast({
        title: "Email is required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!password) {
      toast({
        title: "Password is required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    toast({
      title: "Login successful.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color={textColor}>
      <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} alignSelf="flex-end" mb={4} />
      <Box bg={useColorModeValue("white", "gray.700")} p={8} borderRadius="md" boxShadow="md" width="100%">
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Login
          </Text>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin}>
            Log In
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
