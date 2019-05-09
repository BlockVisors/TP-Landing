webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/common/src/containers/Saas/ServiceSection/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/ServiceSection/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _data_Saas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _service_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service.style */ "../../node_modules/common/src/containers/Saas/ServiceSection/service.style.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/ServiceSection/index.js";










var ServiceSection = function ServiceSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      featureTitle = _ref.featureTitle,
      featureDescription = _ref.featureDescription,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      blockWrapperStyle = _ref.blockWrapperStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_service_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "feature_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "OUR FEATURES"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Why you should choose our Platform"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), _data_Saas__WEBPACK_IMPORTED_MODULE_7__["Service"].map(function (feature, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: feature.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }),
      wrapperStyle: blockWrapperStyle,
      iconStyle: iconStyle,
      contentStyle: contentStyle,
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.title
      }, featureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.description
      }, featureDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })),
      className: "saasService",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  }))));
}; // ServiceSection style props


ServiceSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // ServiceSection default style

ServiceSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['50px', '50px', '50px', '80px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px']
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '80px'],
    height: ['70px', '80px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: '30px',
    borderBottomLeftRadius: '50%'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
    mt: '-5px'
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    letterSpacing: '-0.020em',
    mb: '10px'
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceSection);

/***/ }),

/***/ "../../node_modules/common/src/data/Saas/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/data/Saas/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: Faq, Features, Footer_Data, Service, Timeline, Testimonial, MENU_ITEMS, MONTHLY_PRICING_TABLE, YEARLY_PRICING_TABLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return Faq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer_Data", function() { return Footer_Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonial", function() { return Testimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHLY_PRICING_TABLE", function() { return MONTHLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARLY_PRICING_TABLE", function() { return YEARLY_PRICING_TABLE; });
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/saas/testimonial/client-1.jpg */ "../../node_modules/common/src/assets/image/saas/testimonial/client-1.jpg");
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/agency/client/denny.png */ "../../node_modules/common/src/assets/image/agency/client/denny.png");
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1__);


var Faq = [{
  id: 1,
  expend: true,
  title: 'What is Tokenprop?',
  description: 'Tokenprop is a Real Estate investment and Trading Company based in UAE. The Company provides specialized Blockchain based Real estate investment products. '
}, {
  id: 2,
  title: 'What is Tokenprop Investment Platform (TIP)?',
  description: 'TIP is one of the products by Tokenprop. Tokenprop connects issuers (Sponsors, Developers, Property owners etc.,) with investors and fulfils the needs of both parties by providing the needed capital to issuers and by offering good investment opportunities to Investors, this process is facilitated by Tokenprop investment Platform. Instead of share certificates, Investors receive security tokens from the property called ‘Property Tokens’ which are tradable and offers multiple benefits'
}, {
  id: 3,
  title: 'What is PropX?',
  description: 'PropX is yet another product of Tokenprop, it is a securities Token exchange for trading of property tokens. This is an alternate of TIP for issuers (Sponsors, Developers, Property owners etc.,) to raise Capital and for investors to invest in properties. The only difference being that on TIP investors invest via Tokenprop while on PropX they invest directly. '
}, {
  id: 4,
  title: 'What is TPROP and where should I purchase it?',
  description: ' TPROP is a native utility token for Tokenprop. It allows for accessing different services of the platform. For example: 1.	Investors and Issuers will use TPROP to pay the yearly registration fee to access the Investor Portal and Issuer’s Portal respectively.  2.	To access detailed Investment prospectus for any listed Property after onboarding. 3.	To pay the platform fee in order to be able to invest in a specific Property. 4.	To exchange with utility ‘Timeshare’ Tokens of invested properties, where applicable. 5.	To pay the fees on PropX (eg., registration fee, transaction fees, listing fee, report/data fees etc.,) 6.	To access various Real Estate Investments training courses led by Industry professionals.  7.	Issuers (sponsors, property Owners or developers), can avail a 40% discount on listing fee if paid using TPROP.    8.	To trade it like any other token on public exchanges that we get listed on.  TPROP is for sale during the ICO at a discounted price, while after the ICO, it can be purchased on the Cryptocurrency exchanges we get listed on at a higher price. '
}, {
  id: 5,
  title: 'What are Property Tokens and how do I purchase them? ',
  description: "Property Tokens are security tokens of different Properties Investment offerings available on the platform. They are specific to each property and offer different types of returns and benefits. Investors can choose to pick the properties that best suit their interest. Property Tokens can be purchased by participating in the token sale of Properties on the dates listed similar to participating in an ICO. They can also be purchased on PropX when they are made available for sale"
}, {
  id: 6,
  expend: true,
  title: '	What are the benefits of purchasing Property Tokens? ',
  description: 'Property Tokens are equivalent of equity rights in the property. They provide the investor with many great benefits. Fractional ownership in the Property.	 Rights to Transfer Ownership.  An Entitlement to Dividends.  Opportunity to Inspect Property records. The right to Sue for wrongful acts. These Tokens can be used for: Earning dividends from the Property’s transaction (resale or rent, depending upon Property type).  Trading with other Property Tokens on PropX or other third party Security Token exchanges.These tokens can be sold on the market anytime to redeem BTC/ETHER/USDT or fiat back to your wallet offering massive liquidiy. Some properties offer additional type of tokens free of cost with the purchase of the Property tokens, they are called ‘Utility Timeshare tokens’. They can be used to redeem different services depending upon the Property type invested, for example, accommodations at Hotels/Resorts, free or discounted merchandise at malls, access to co-working spaces, medical facilities, Self-storage etc., '
}, {
  id: 7,
  title: 'How can non-accredited Investors benefit from the platform? ',
  description: 'TPROP tokens are utility tokens which can be purchased by anyone. These can be held or traded on any Cryptocurrency exchanges that we get listed on.  Also, Tokenprop will also offer investments under REG S and A+ where appropriate where non-accredited investors can participate too. This is applicable for TIP and PropX. '
}, {
  id: 8,
  title: 'What information is available on individual Property Token?',
  description: 'Each of the Property Token is linked to different sets of information.  1.	Dividend information like Dividend amount, Date of Dividend declaration, date of last cum-dividend, Ex-date, record date and Date of dividend payment. Holders of Property Tokens receive periodic performance reports, Dividend Share report, Fact Sheet, Historic Performance, Quarterly updates, Prospectus, latest announcements etc., In addition, it also contains the below. -----Example below: <> IRR: low 20’s  <>  Equity multiple: 1.5x  <> Hold period: 2-5 years. <>  The deal is underwritten for a 5 year hold but most of their past deals are sold after 1-3 years. <> Cap rate: 3.5 <>  Preferred Return: 8% <> Cash on Cash: 0% during the first year of repositioning and rehab. 6-7% after the first year.  <>  Waterfall:  After preferred return to investors pari parsu and after return of capital, 60/40 in favor of the LP investor to 30% IRR hurdle, then 50/50 split.  <> GP equity: 10%  <> Debt:  Senior debt with interest only payment for the first two years, then principal plus interest starting in year three. 70% LTV  <>  Sponsor’s equity (skin in the game): At least 10%.    2.	The property information includes, property photos, documentation, website, description, total size, tokenized equity etc.,   '
}, {
  id: 9,
  title: '	What information is shared to investors for their investments?    ',
  description: "The below information is shared every quarter: One Page Property Summary - each quarter's activities, Rental income, Operating expenses, Operating Cash flow, Occupancy Rate, Average rent/unit, Property Photos. "
}, {
  id: 10,
  title: ' Why am I paying TPROPs in order to be able to invest in a Property?  ',
  description: "This is a fee for Tokenprop, this enables us to operate, study the market thoroughly and find you the best deals.  "
}, {
  id: 11,
  title: 'Are there Tax benefits for such Investments? ',
  description: " There are certain tax advantages to investing in commercial real estate.  Investors can participate in the depreciation of an asset.  In many cases, the depreciation can be accelerated by an accounting technique called cost segregation.  This technique can increase immediate cash-flow and is an example of the general principle of 'a dollar today is worth more than a dollar tomorrow'.  This depreciation can be used to 'shield' cash flow from rental income.  The depreciation is of course recaptured when the property is sold, but it is taxed at the Section 1250 gain rate of 25%.  In addition, when the property is sold and there is a true capital gain, the gains are taxed at the long term capital gain rate which is usually lower than the ordinary income rate.  The pass-through nature of the sponsor’s company (usually an LLC or a limited partnership) together with that of the Tokenprop LLC allows investors to enjoy the tax benefits of direct real estate ownership; this is a significant difference between our “direct participation” structures and REITs, for example, which don’t feature all the benefits of a direct pass-through.\u2028These tax benefits can include depreciation, mortgage interest, and other deductions that often offset (sometimes entirely) the actual distributable cash — so that investors may receive distributions throughout the year and yet may have little or no taxable income. Much or all of this tax advantage is subject to “recapture” at a later date, however, at the time that the property is sold; nevertheless, the tax deferral benefit of real estate equity investments can be a significant one. "
}, {
  id: 12,
  title: ' Do we pay taxes for the Capital gains we make in the Investment?  ',
  description: "Yes, this depends upon the Tax payer’s jurisdiction.  "
}, {
  id: 13,
  title: 'How do you vet the Investment options offered on TIP?',
  description: 'We have several methods to analyze the viability of a potential project, the most common being the weighted average cost of capital (WACC) as a discount rate, which is the average cost the company pays for capital from borrowing or selling equity. In either case, the net present value of all cash flows should be positive to proceed with the investment or the project.  '
}, {
  id: 14,
  title: 'What happens if someone loses his/her private key for wallets?  ',
  description: "Since these are security tokens, the investor simply needs to send a notarized sworn affidavit of the loss to us. We will cancel the hacked or lost tokens and issue new tokens. The investor and their investment are now whole again. This is critical because properly issues securities cannot be lost or inaccessible. These are real assets with owners.    "
}, {
  id: 15,
  title: 'What happens to my Wallet and my investments in case of my death, can I nominate someone else? ',
  description: "Yes, the portal allows for addition of nominees. In case of unforeseen circumstances including death, the nominee must register the death certificate and raise a request to Tokenprop. A new Wallet will be provided to the nominee and the Tokens will be restored.   "
}, {
  id: 16,
  title: 'When will Property Tokens start to payout dividends?',
  description: 'The dividends will be paid at different times for different Property Tokens, there is different maturity period for different Tokens. If the investor chooses to retain the Tokens inside the wallet, then the dividends get paid directly to the Investor’s Bank account. The earliest a payout can be received is at the end of third month of investment. Daily traders on PropX are more likely to be interested in the value of the Token which is determined by Supply and Demand, instead of the inherent dividend a particular Property Token offers. There will also be Tokens that are paying out dividends already, for such tokens it is important to know the below dates, which are all also embedded on the Tokens: 1) Date of Dividend declaration, this is the date when the Property LLC declares the date of Dividend distribution.   2) Date of Last Cum-dividend, the date up-to which the tokens can be bought on PropX and be eligible to receive dividend is called the Last cum-dividend date.   3) Ex-date, The ex-date usually precedes the record date by about two. On or after this date, the Property Tokens will trade without its dividend. the buyer of the Tokens on or after the ex-date will not be eligible for the dividends. However, if you sell tokens on the ex-date, you will still be eligible for dividends.  4) Record date - The record date is the day on which the company looks at its records to see who its Token holders are (Wallets).  5) Date of Dividend payment.   '
}, {
  id: 17,
  title: 'Why is the initial Lockup period of three months necessary? ',
  description: "This lockup period is necessary for us to settle transaction, manage agreements with issuers and handle currency conversions and money transfers.   "
}, {
  id: 18,
  title: 'Where will I hold my Tokens for trading on PropX?  ',
  description: "On PropX Wallet or on the PropX exchange, the choice is with the trader.  "
}, {
  id: 19,
  title: '	What if there are no takers for my Property Token on the exchange? ',
  description: "We on-board specialist market makers and liquidity tools to ensure there is always sufficient liquidity on PropX.   "
}, {
  id: 20,
  title: 'Do the tokens for non-income generating properties (Ground-Up New developments) also pay dividends?  ',
  description: ' No, all such Property Tokens are traded Ex-Dividend (traded without dividends dates) although may they have tentative Payout dates.  '
}, {
  id: 21,
  title: 'How exactly will the value of Property Token be determined?  ',
  description: " The Token will show the Property Type (Land/Hotel/Hospital/Residential/Commercial Apartment), it will show where it is located, when will be the first payout, how much will be the dividend, and if the property offers any timeshare benefits. These factors if appealing to any Investor should alleviate the demand for the tokens  "
}];
var Features = [{
  id: 1,
  icon: 'flaticon-creative',
  title: 'Property Tokenization',
  description: 'Automatically create liquidity buy converting property equity into tokens, allowing for a larger range of investors to purchase interest in property '
}, {
  id: 2,
  icon: 'flaticon-briefing',
  title: 'Micro-Equity Investment',
  description: 'Our platform allows an investor to invest as litte as 100 USD in a real estate project? No need to an accredited investor .'
}, {
  id: 3,
  icon: 'flaticon-flask',
  title: 'Dedicated Property Token Exchange',
  description: 'PropX will function as a dedicated exchange for our property tokens created in TIP platform. This will allow investors and property owners to get instant liquidity.'
}, {
  id: 4,
  icon: 'flaticon-creative',
  title: 'Low Capital Investment',
  description: 'Invest as little as 100USD to acquire part of a property or development'
}, {
  id: 5,
  icon: 'flaticon-briefing',
  title: 'Global Real Estate Investment',
  description: 'Use our TIP -(Token Investment Platform) to access properties around the globe.'
}, {
  id: 6,
  icon: 'flaticon-flask',
  title: 'Fixed Yields',
  description: 'Know what return you will recieve on your investment. We provide the information you need to make decisions.'
}];
var Footer_Data = [{
  title: 'About Us',
  menuItems: [{
    url: '#',
    text: 'Support Center'
  }, {
    url: '#',
    text: 'Customer Support'
  }, {
    url: '#',
    text: 'About Us'
  }, {
    url: '#',
    text: 'Copyright'
  }, {
    url: '#',
    text: 'Popular Campaign'
  }]
}, {
  title: 'Our Information',
  menuItems: [{
    url: '#',
    text: 'Return Policy'
  }, {
    url: '#',
    text: 'Privacy Policy'
  }, {
    url: '#',
    text: 'Terms & Conditions'
  }, {
    url: '#',
    text: 'Site Map'
  }, {
    url: '#',
    text: 'Store Hours'
  }]
}, {
  title: 'My Account',
  menuItems: [{
    url: '#',
    text: 'Press inquiries'
  }, {
    url: '#',
    text: 'Social media directories'
  }, {
    url: '#',
    text: 'Images & B-roll'
  }, {
    url: '#',
    text: 'Permissions'
  }, {
    url: '#',
    text: 'Speaker requests'
  }]
}, {
  title: 'Policy',
  menuItems: [{
    url: '#',
    text: 'Application security'
  }, {
    url: '#',
    text: 'Software principles'
  }, {
    url: '#',
    text: 'Unwanted software policy'
  }, {
    url: '#',
    text: 'Responsible supply chain'
  }]
}];
var Service = [{
  id: 1,
  icon: 'flaticon-briefing',
  title: 'App Development',
  description: 'We are specialized at custom Saas Application Development and special features .'
}, {
  id: 2,
  icon: 'flaticon-trophy',
  title: 'Dedicated Wallet',
  description: 'Dedicated wallet that connects to both platforms (TIP + PropX). Use our mobile app for IOS and Android anywhere your go. Hold TProp tokens as well as your property tokens.'
}, {
  id: 3,
  icon: 'flaticon-atom',
  title: 'Cloud Stroage',
  description: 'LiteSpeed Web Server known for its high performance and low resource consumption.'
}, {
  id: 4,
  icon: 'flaticon-ruler',
  title: 'Dedicated Market-Makers',
  description: 'Brokers acting as market-makers for exchange on PropX. '
}, {
  id: 5,
  icon: 'flaticon-creative',
  title: 'UX Planning',
  description: 'We provide the best UI/UX Design by following the latest trends of the market  .'
}, {
  id: 6,
  icon: 'flaticon-conversation',
  title: 'Customer Support',
  description: 'A Dedicated support team is always ready to provide best support to our customers.'
}];
var Timeline = [{
  title: 'Concept phase for project',
  description: 'Discussion and description of market need for Token Prop and property liquidity in markets'
}, {
  title: 'Project Services Design',
  description: 'We decided to work from the ground up to figure out what the market neets. Investors need options and developers need liquidity .'
}, {
  title: 'Negotiation about project',
  description: 'After the negotiation is done , We start to build the project with latest technology .'
}, {
  title: 'Wireframing for project',
  description: 'We respect our customer opinions and deals with them with perfect wireframing.'
}, {
  title: 'UI/UX for project',
  description: 'We provide the best UI/UX Design by following the latest trends of the market .'
}, {
  title: 'Negotiation about project',
  description: 'After the negotiation is done , We start to build the project with latest technology .'
}];
var Testimonial = [{
  id: 1,
  name: 'Michal Andry',
  designation: 'Ceo of Invission Co.',
  comment: 'Love to work with this designer in every our future project to ensure we are going to build best prototyping features.',
  avatar_url: _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  social_icon: 'flaticon-instagram'
}, {
  id: 2,
  name: 'Roman Ul Oman',
  designation: 'Co-founder of QatarDiaries',
  comment: 'Impressed with master class support of the team and really look forward for the future. A true passionate team.',
  avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  social_icon: 'flaticon-twitter-logo-silhouette'
}];
var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'How It Works',
  path: '#service_section',
  offset: '70'
}, {
  label: 'TIP Platform',
  path: '#feature_section',
  offset: '70'
}, {
  label: 'Developers',
  path: '#pricing_section',
  offset: '70'
}, {
  label: 'Whitepaper',
  path: '#pricing_section',
  offset: '70'
}, {
  label: 'Packages',
  path: '#pricing_section',
  offset: '70'
}, {
  label: 'PropX',
  path: '#testimonial_section',
  offset: '70'
}, {
  label: 'Medium',
  path: 'http://www.medium.com',
  offset: '70'
}, {
  label: 'FAQ',
  path: '#faq_section',
  offset: '70'
}];
var MONTHLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For Small teams or group who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Mediums teams or group who need to build website ',
  price: '$9.87',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$12.98',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}];
var YEARLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For a single client or team who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Small teams or group who need to build website ',
  price: '$6.00',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Unlimited secure storage'
  }, {
    content: '2,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: '24/7 phone support'
  }, {
    content: '50+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$9.99',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '3,000s of Templates Ready'
  }, {
    content: 'Advanced branding'
  }, {
    content: 'Knowledge base support'
  }, {
    content: '80+ Webmaster Tools'
  }]
}];

/***/ })

})
//# sourceMappingURL=index.js.281ac13f28ad47b05687.hot-update.js.map