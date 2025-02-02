import { TodoType } from "@/@Types/TodoType";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { StarIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import React from "react";
import { View } from "react-native";

type Props = {
  todo: TodoType;
};

export default function TodoItem({ todo }: Props) {
  return (
    <>
      <Card size="sm" variant="outline" className="rounded-2xl">
        {/* <Badge size="md" variant="solid" action="success">
          <BadgeText>Novo</BadgeText>
          <BadgeIcon as={StarIcon} className="ml-2" />
        </Badge> */}
        <Heading size="md" className="mb-1">
          {todo.name}
        </Heading>
        <Text size="sm">{todo.description}</Text>
        <Text size="sm">{todo.doAt.toLocaleString()}</Text>
      </Card>
    </>
  );
}
