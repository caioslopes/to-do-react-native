import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React, { useState } from "react";
import { Pressable } from "../ui/pressable";

export type TabsProps = {
  key: string;
  label: React.ReactNode;
  children: React.ReactNode;
};

type Props = {
  items: TabsProps[];
};

export default function Tabs({ items }: Props) {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Box>
        <Box className="flex flex-row justify-between">
          {items.map((item, i) => (
            <Pressable key={item.key} onPress={() => setCurrent(i)}>
              <Text>{item.label}</Text>
            </Pressable>
          ))}
        </Box>
        <Box>{items[current].children}</Box>
      </Box>
    </>
  );
}
