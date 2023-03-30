import {MainLayout} from '../../components/layouts/MainLayout';

const Pricing = () => {
  return (
    <div>Pricing</div>
  )
}

export default Pricing;

Pricing.getLayout = function getLayout( page: JSX.Element ){
    return(
        <MainLayout>
            { page }
        </MainLayout>
    )
}