import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.nameId}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </label>

        <label className={css.label} htmlFor={this.numberId}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
