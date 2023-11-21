import {
  ContactItem,
  ContactItemText,
  ContactDelete,
  FormText,
} from './ContactListItem.styled';

export const ContactListItem = ({
  contact: { firstName, tel, id },
  onDeleteContact,
}) => {
  return (
    <>
      <ContactItem>
        <ContactItemText>
          <FormText>{firstName}:</FormText>
          <FormText>{tel}</FormText>
        </ContactItemText>

        <ContactDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </ContactDelete>
      </ContactItem>
    </>
  );
};
