import { ContactFilter } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <label htmlFor="findContacts"></label>
      <ContactFilter
        type="text"
        name="findContacts"
        value={filter}
        onChange={evt => onChangeFilter(evt.target.value)}
        placeholder="Search by name"
      />
    </>
  );
};
