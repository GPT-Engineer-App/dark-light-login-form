import { useState } from "react";
import { Container, VStack, Input, Button, Text, useColorMode, useColorModeValue, IconButton, FormControl, FormLabel, Box, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const toast = useToast();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleLogin = () => {
    if (!email) {
      setEmailError("Email is required.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Email must contain '@' and '.'.");
      return;
    }

    if (!password) {
      setPasswordError("Password is required.");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }

    toast({
      title: "Login successful.",
      description: "You have successfully logged in.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });

    setEmailError("");
    setPasswordError("");
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
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => !email && setEmailError("Email is required.")} />
            {emailError && (
              <Text color="red.500" fontSize="sm">
                {emailError}
              </Text>
            )}
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => !password && setPasswordError("Password is required.")} />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {passwordError && (
              <Text color="red.500" fontSize="sm">
                {passwordError}
              </Text>
            )}
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
