import {MainLayout} from '../../components/layouts/MainLayout';

const Contact = () => {
  return (
  <>
        <h1>Contact Page</h1>
  </>

  )
}

export default Contact;

Contact.getLayout = function getLayout( page: JSX.Element ){
  return(
    <MainLayout>
      { page }
    </MainLayout>
    
  )
}