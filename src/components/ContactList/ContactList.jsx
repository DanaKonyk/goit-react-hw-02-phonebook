import css from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name + ': ' + contact.number}
          <button
            className={css.button}
            type="button"
            onClick={() => removeContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
