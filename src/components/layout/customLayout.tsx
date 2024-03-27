import { Box } from "@chakra-ui/react";
import {
  ThemedLayoutContextProvider,
  ThemedLayoutV2,
} from "@refinedev/chakra-ui";
import Navbar from "./_components/navbar";
import Sider from "./_components/sider";
import { Footer } from "./_components/footer";

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemedLayoutContextProvider initialSiderCollapsed={false}>
      <Box display="flex">
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          minH="100vh"
          overflow="clip"
        >
          <Navbar />
          <Box flex="1">{children}</Box>
          <Footer />
        </Box>
      </Box>
    </ThemedLayoutContextProvider>
  );
};

export default CustomLayout;
