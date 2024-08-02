import { Button, Form, Input, FormGroup } from "reactstrap";

const SearchFilterForm = () => {
  return (
    <Form className="mt-3 px-5">
      <FormGroup inline>
        <Input
          id="filter"
          name="filter"
          placeholder="Enter a search term to filter this list"
          type="text"
          className="border"
        />
        <Button color="primary" className="mt-2 px-5">
          Filter
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SearchFilterForm;
