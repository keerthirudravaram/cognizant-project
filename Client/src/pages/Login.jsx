import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Login = () => {
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    dob: "", 
  });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = (type)=>{

  }

  return (
    <div className="flex items-center w-full justify-center">
      <Tabs defaultValue="account" className="w-[500px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account here. Click signup when you are done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={signupInput.name}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  name="email"
                  value={signupInput.email}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  name="dob"
                  value={signupInput.dob}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter username"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  name="username"
                  value={signupInput.username}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Enter Password"
                  name="password"
                  value={signupInput.password}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your details to login. Click Login when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="Enter your username"
                  name="username"
                  value={loginInput.username}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => changeInputHandler(e, "login")}
                  name="password"
                  value={loginInput.password}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
