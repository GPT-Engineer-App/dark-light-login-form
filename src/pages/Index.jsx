import { useState } from "react";
import { Container, VStack, Input, Button, Text, useColorMode, useColorModeValue, IconButton, FormControl, FormLabel, Box, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleShowClick = () => setShowPassword(!showPassword);

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

    if (!email.includes("@") || !email.includes(".")) {
      toast({
        title: "Email must contain '@' and '.'",
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

    if (password.length < 6) {
      toast({
        title: "Password must be at least 6 characters.",
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
    <Container centerContent maxW={{ base: "container.sm", md: "container.md", lg: "container.lg" }} height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4} bg={bgColor} color={textColor}>
      <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} alignSelf="flex-end" mb={4} />
      <Box bg={useColorModeValue("white", "gray.700")} p={8} borderRadius="md" boxShadow="md" width="100%">
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Login
          </Text>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                if (!email) {
                  toast({
                    title: "Email is required.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                }
              }}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  if (!password) {
                    toast({
                      title: "Password is required.",
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    });
                  }
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin}>
            Log In
          </Button>
        </VStack>
      </Box>
      <Box as="footer" mt={8} textAlign="center" width="100%">
        <Text fontSize="sm">© 2024 Made by OVFTeam</Text>
      </Box>
    </Container>
  );
};

export default Index;
