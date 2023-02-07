import { useSearchParams } from 'react-router-dom';

import { Form, Input, Button } from './SearchBox.styled';

import { toast } from 'react-toastify';

export default function SearchBox() {
  const [, setSearchParams] = useSearchParams();

  const handleSubmitForm = e => {
    e.preventDefault();

    if (e.target[0].value.trim().length === 0) {
      toast.error('Please try again!', {
        duration: 1000,
      });
      return;
    }
    setSearchParams({ query: e.target[0].value });
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Input type="text" />
      <Button type="submit">Search</Button>
    </Form>
  );
}
