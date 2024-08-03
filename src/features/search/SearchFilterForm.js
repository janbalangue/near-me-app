import { Input } from "reactstrap";

const SearchFilterForm = () => {
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
        <Input
          id="filter"
          name="filter"
          placeholder="Type here to filter the places below"
          type="text"
          className="border"
          onChange={handleChange}
        />
  );
};

export default SearchFilterForm;
