import Contact from "./Contact/Contact";

/*====================*/

function ContactsList() {
  return (
    <section className="contacts additional-block">
      <div className="container">
        <h2 className="custom-heading line">Список контактов</h2>
        <div className="contacts__list line content-center">
          <Contact href="https://vk.com/id240061567" image="/images/contacts/vk.svg" />
          <Contact href="https://t.me/stasrikon" image="/images/contacts/telegram.svg" />
          <Contact href="mailto:odkukunov@gmail.com" image="/images/contacts/mail.svg" />
        </div>
      </div>
    </section>
  );
}

/*====================*/

export default ContactsList;
