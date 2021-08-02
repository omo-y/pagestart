import styled from "styled-components";
import { SearchInput } from "../../molecules/Searchinput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10)].map((val) => {
  return {
    id: val,
    name: "猫 ${val}",
    image: "https://source.unsplash.com/NodtnCsLdTE",
    email: "info@google.com",
    phone: "12345678",
    company: {
      name: "テスト会社"
    },
    website: "google.com"
  };
});

export const Users = () => {
  return (
    <Scontainar>
      <h2>ユーザーズ一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Scontainar>
  );
};

const Scontainar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
