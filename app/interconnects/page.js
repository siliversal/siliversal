import React, {Fragment} from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import Subbanner from '../Components/sub-banner/sub-banner';
import Interconnects from '../Components/sub-interconnects/interconnects';

export default function About () {
  return (
    <Fragment>
      <Header />
      <Subbanner title="Fresh Vegetables" subBannerPath ='./images/no-ib-sub.jpg' />
      <section className="max-w-6xl mx-auto relative" />
      <main className='mtb sm:px-3.5 xl:px-0'>
        <Interconnects/>
      </main>
      <Footer />
    </Fragment>
  );
}
