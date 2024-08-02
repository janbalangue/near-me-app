import { Button, Form, Input, FormGroup } from "reactstrap";

const SearchFilterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.filter.value);
  };
  return (
    <Form className="mt-3 px-5" onSubmit={handleSubmit}>
      <FormGroup inline>
        <Input
          id="filter"
          name="filter"
          placeholder="Enter a search term to filter this list"
          type="text"
          className="border"
        />
        <Button
          color="primary"
          className="mt-2 px-5"
          name="submit"
          type="submit"
        >
          Filter
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SearchFilterForm;
