import {
  AuthProvider,
  Authenticated,
  GitHubBanner,
  Refine,
} from "@refinedev/core";
import {
  AuthPage,
  ThemedLayoutV2,
  ErrorComponent,
  RefineThemes,
  useNotificationProvider,
} from "@refinedev/chakra-ui";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
  NavigateToResource,
  CatchAllNavigate,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { mode } from "@chakra-ui/theme-tools";

import { PostCreate, PostEdit, PostList, PostShow } from "./pages";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ForgotPassword } from "./pages/forgotPassword";
import { authProvider } from "./providers/authProvider";
import CustomLayout from "./components/layout/customLayout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/contact";
import About from "./pages/about/About";
import Profile from "./pages/profile/Profile";

const App: React.FC = () => {
  const customTheme = extendTheme({
    ...RefineThemes.Blue,
    styles: {
      global: (props: any) => {
        const bgLight = props.theme.colors.gray[0];
        const bgDark = props.theme.colors.gray[900];
        return {
          "html, body": {
            background: mode(bgLight, bgDark)(props),
          },
        };
      },
    },
    fonts: {
      heading:
        "Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      body: "Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    },
  });

  return (
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <Refine
          dataProvider={dataProvider("http://localhost:8080")}
          authProvider={authProvider}
          routerProvider={routerProvider}
          notificationProvider={useNotificationProvider()}
          resources={[
            {
              name: "courses",
              list: "/courses",
              create: "/courses/create",
              edit: "/courses/edit/:id",
              show: "/courses/show/:id",
              meta: {
                canDelete: true,
              },
            },
            {
              name: "profile",
              show: "/profile/show",
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route
              element={
                <Authenticated
                  key="authenticated-routes"
                  fallback={<CatchAllNavigate to="/login" />}
                >
                  <CustomLayout>
                    <Outlet />
                  </CustomLayout>
                </Authenticated>
              }
            >
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />

              <Route path="/profile">
                <Route index element={<Profile />} />
              </Route>

              <Route path="/courses">
                <Route index element={<PostList />} />
                <Route path="create" element={<PostCreate />} />
                <Route path="edit/:id" element={<PostEdit />} />
                <Route path="show/:id" element={<PostShow />} />
              </Route>

              <Route path="*" element={<ErrorComponent />} />
            </Route>

            <Route
              element={
                <Authenticated key="authenticated-outer" fallback={<Outlet />}>
                  <NavigateToResource />
                </Authenticated>
              }
            >
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>

            <Route
              element={
                <Authenticated key="catch-all">
                  <ThemedLayoutV2>
                    <Outlet />
                  </ThemedLayoutV2>
                </Authenticated>
              }
            >
              <Route path="*" element={<ErrorComponent />} />
            </Route>
          </Routes>
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
