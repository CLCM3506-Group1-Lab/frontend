import { Box } from "@chakra-ui/react";
import { ThemedLayoutV2 } from "@refinedev/chakra-ui";
import Navbar from "./_components/navbar";
import Sider from "./_components/sider";

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemedLayoutV2
      Sider={() => (
        <Sider
          items={[<></>]}
          logout={<></>}
          dashboard={<></>}
          collapsed={false}
        />
      )}
      Header={Navbar}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default CustomLayout;
