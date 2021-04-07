import Layout from "../../Components/Layout/Layout";
import ContactsList from "../../Components/PagesComponents/Contacts/ContactsList/ContactsList";
import SendMessage from "../../Components/PagesComponents/Contacts/SendMessage/SendMessage";

/*====================*/

function Contacts() {
  return (
    <Layout title="Contacts">
      <ContactsList />
      <SendMessage />
    </Layout>
  );
}

/*====================*/

export default Contacts;
