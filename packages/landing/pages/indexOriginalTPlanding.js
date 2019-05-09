// import React, { Fragment } from 'react';
// import Head from 'next/head';
// import Sticky from 'react-stickynode';
// import { ThemeProvider } from 'styled-components';
// import { saasTheme } from 'common/src/theme/saas';
// import { ResetCSS } from 'common/src/assets/css/style';
// import {
//   GlobalStyle,
//   ContentWrapper,
// } from 'common/src/containers/Saas/saas.style';
// import Navbar from 'common/src/containers/Saas/Navbar';
// import BannerSection from 'common/src/containers/Saas/BannerSection';
// import FeatureSection from 'common/src/containers/Saas/FeatureSection';
// import VisitorSection from 'common/src/containers/Saas/VisitorSection';
// import ServiceSection from 'common/src/containers/Saas/ServiceSection';
// import FaqSection from 'common/src/containers/Saas/FaqSection';
// import Footer from 'common/src/containers/Saas/Footer';
// import PricingSection from 'common/src/containers/Saas/PricingSection';
// //import TrialSection from 'common/src/containers/Saas/TrialSection';
// import TimelineSection from 'common/src/containers/Saas/TimelineSection';
// import TestimonialSection from 'common/src/containers/Saas/TestimonialSection';
// import WhatIsSection from 'common/src/containers/Saas/PartnerSection';
// import { DrawerProvider } from 'common/src/contexts/DrawerContext';
// import TPWorksSection from 'common/src/containers/Portfolio/Process2';
// import DeveloperSection from 'common/src/containers/Portfolio/Skill2';
// import ClientsSection from 'common/src/containers/Portfolio/Clients2';
// import TeamSection from 'common/src/containers/Agency/TeamSection';
// import VideoSection from 'common/src/containers/Agency/VideoSection';
// import NewsletterSection from 'common/src/containers/Agency/NewsletterSection';
// import BlogSection from 'common/src/containers/Agency/BlogSection';
// import FooterRideshare from 'common/src/containers/Ride/Footer';
// import Video2Section from 'common/src/containers/Agency/VideoSection2';








// export default () => {
//   return (
//     <ThemeProvider theme={saasTheme}>
//       <Fragment>
//         <Head>
//           <title>Token Prop | Property Tokenization & Investment Platform</title>
//           <meta name="Description" content="React next landing page" />
//           <meta name="theme-color" content="#ec5555" />
//           {/* Load google fonts */}
//           <link
//             href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
//             rel="stylesheet"
//           />
//         </Head>
//         <ResetCSS />
//         <GlobalStyle />
//         <ContentWrapper>
//           <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
//             <DrawerProvider>
//               <Navbar />
//             </DrawerProvider>
//           </Sticky>
//           <BannerSection /> 
//           <FeatureSection />
//           <Video2Section />     
//           <WhatIsSection />
//           <TPWorksSection />
//           <VisitorSection />
//           <ServiceSection />
//           <DeveloperSection />
//           <VideoSection />      
//           <BlogSection />
//           <PricingSection />
//           <TestimonialSection />
//           <TimelineSection />
//           <TeamSection />
//           <FaqSection />
//           <ClientsSection />
//           <NewsletterSection />
//           <FooterRideshare />
//         </ContentWrapper>
//       </Fragment>
//     </ThemeProvider>
//   );
// };