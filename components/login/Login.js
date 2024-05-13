import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Avatar } from "native-base";
import { useNavigation } from '@react-navigation/native';

import Logo from "../../assets/6.png";

const Example = () => {
  console.log("Logo path:", Logo);
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Home');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignUpPress = () => {
    navigation.navigate('Register');
  };

  return (
    <Center w="100%">
      <Avatar bg="black" alignSelf="center" size="2xl" marginLeft="-2px" source={Logo}>
        RB
      </Avatar>
      <Box safeArea p="2" py="8" w="90%" maxW="290" bg="#131212"> {/* Set background color to black */}
        <Heading size="lg" fontWeight="600" color="white" textAlign="center" fontSize="30px" marginBottom="20px" _dark={{
          color: "warmGray.50"
        }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1" onPress={handleForgotPasswordPress}>
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleLoginPress}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} onPress={handleSignUpPress}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" bg="#131212"> {/* Set background color to black */}
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
