import React from "react";
import Stack from "ui/elements/Stack";
import { User } from "store/types";
import Text from "ui/elements/Text";

type Props = {
  user: User;
};

const UserRating: React.FC<Props> = ({ user }) => {
  return (
    <Stack gridTemplateColumns="auto auto auto" justifyContent={"center"}>
      <Text color="green" bold>+{user.reputation.plus}</Text>
      <Text>/</Text>
      <Text color="red" bold>-{user.reputation.minus}</Text>
    </Stack>
  );
};

export default React.memo(UserRating);
