import React from "react";

interface Person {
  firstName: string;
  lastName: string;
}
interface Props {
  text: string;
  t?: boolean;
  f?: Boolean;
  i?: number;
  fn: (santheep: string) => string;
  Person: Person;
}

export const Field: React.FC<Props> = () => {
  const [count, setCount] = React.useState<number | boolean>();
  setCount(10);
  return (
    <div>
      <input type='text' />
    </div>
  );
};
