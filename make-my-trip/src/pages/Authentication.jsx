import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Swal from "sweetalert2"
import axios from "axios";
import { useNavigate } from "react-router-dom"

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault()
    let obj = { email, password }
    // console.log("submit",obj)
    axios.post(`https://trip-53yq.onrender.com/users/login`, obj).then((res) => {
      console.log(res.data)
      if (res.data.msg == "User doesn't exits on this email") {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `${res.data.msg}`,
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        if (res.data.msg == "Wrong credentials") {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${res.data.msg}`,
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          localStorage.setItem('isAuth',"true")
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${res.data.msg}`,
            showConfirmButton: false,
            timer: 1500
          })
          (navigate("/",{replace:true}))
        }
      }
    })
  }
  return (
    <Flex
      flexDirection="column"

      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handlelogin}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="/signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};
export default Login