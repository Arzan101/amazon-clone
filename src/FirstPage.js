import React from "react";
import { useHistory } from "react-router-dom";


import Order from "./Orders";

  function FirstPage(){
    const history = useHistory();

    const Login = () =>{ 
      let path = `Login`; 
      history.push(path);
    }
    const Home = () =>{ 
      let path = `Home`; 
      history.push(path);
    }
    
      return (
        <div>
        
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="alternate" type="application/json+oembed" href="https://www.jotform.com/oembed/?format=json&url=https%3A%2F%2Fform.jotform.com%2F230912145770048" title="oEmbed Form" />
        <link rel="alternate" type="text/xml+oembed" href="https://www.jotform.com/oembed/?format=xml&url=https%3A%2F%2Fform.jotform.com%2F230912145770048" title="oEmbed Form" />
        <meta property="og:title" content="Form" />
        <meta property="og:url" content="https://form.jotform.com/230912145770048" />
        <meta property="og:description" content="Please click the link to complete this form." />
        <meta name="slack-app-id" content="AHNMASS8M" />
        <meta property="og:image" content="https://cdn.jotfor.ms/assets/img/landing/opengraph.png" />
        <link rel="shortcut icon" href="https://cdn.jotfor.ms/assets/img/favicons/favicon-2021-light%402x.png" />
        <link rel="canonical" href="https://form.jotform.com/230912145770048" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=1" />
        <meta name="HandheldFriendly" content="true" />
        <title>Form</title>
        <style type="text/css" dangerouslySetInnerHTML={{__html: "@media print{.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}" }} />
        <link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.40641" />
        <link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/css/styles/payment/payment_styles.css?3.3.40641" />
        <link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_feature.css?3.3.40641" />
        <style type="text/css" id="form-designer-style" dangerouslySetInnerHTML={{__html: "\n    /* Injected CSS Code */\n/*PREFERENCES STYLE*/\n    .form-all {\n      font-family: Inter, sans-serif;\n    }\n  \n    .form-label.form-label-auto {\n      \n    display: block;\n    float: none;\n    text-align: left;\n    width: 100%;\n  \n    }\n  \n    .form-line {\n      margin-top: 12px;\n      margin-bottom: 12px;\n      padding-top: 0;\n      padding-bottom: 0;\n    }\n  \n    .form-all {\n      max-width: 752px;\n      width: 100%;\n    }\n  \n    .form-label.form-label-left,\n    .form-label.form-label-right,\n    .form-label.form-label-left.form-label-auto,\n    .form-label.form-label-right.form-label-auto {\n      width: 230px;\n    }\n  \n    .form-all {\n      font-size: 16px\n    }\n  \n    .supernova .form-all, .form-all {\n      background-color: #fff;\n    }\n  \n    .form-all {\n      color: #2C3345;\n    }\n    .form-header-group .form-header {\n      color: #2C3345;\n    }\n    .form-header-group .form-subHeader {\n      color: #2C3345;\n    }\n    .form-label-top,\n    .form-label-left,\n    .form-label-right,\n    .form-html,\n    .form-checkbox-item label,\n    .form-radio-item label,\n    span.FITB .qb-checkbox-label,\n    span.FITB .qb-radiobox-label,\n    span.FITB .form-radio label,\n    span.FITB .form-checkbox label,\n    [data-blotid][data-type=checkbox] [data-labelid],\n    [data-blotid][data-type=radiobox] [data-labelid],\n    span.FITB-inptCont[data-type=checkbox] label,\n    span.FITB-inptCont[data-type=radiobox] label {\n      color: #2C3345;\n    }\n    .form-sub-label {\n      color: #464d5f;\n    }\n  \n    .supernova {\n      background-color: #f3f3fe;\n    }\n    .supernova body {\n      background: transparent;\n    }\n  \n    .form-textbox,\n    .form-textarea,\n    .form-dropdown,\n    .form-radio-other-input,\n    .form-checkbox-other-input,\n    .form-captcha input,\n    .form-spinner input {\n      background-color: #fff;\n    }\n  \n      .supernova {\n        height: 100%;\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-attachment: fixed;\n        background-position: center top;\n      }\n      .supernova {\n        background-image: url(\"https://www.jotform.com/uploads/khanazzu994/form_files/donation%20background.64295cebdeb443.51000386.jpg\");\n      }\n      #stage {\n        background-image: url(\"https://www.jotform.com/uploads/khanazzu994/form_files/donation%20background.64295cebdeb443.51000386.jpg\");\n      }\n    \n    .form-all {\n      background-image: none;\n    }\n  .form-all:before { content: none; }/*PREFERENCES STYLE*//*__INSPECT_SEPERATOR__*/\n    /* Injected CSS Code */\n" }} />
        <form className="jotform-form" action="https://submit.jotform.com/submit/230912145770048" method="post" name="form_230912145770048" id={230912145770048} acceptCharset="utf-8" autoComplete="on"><input type="hidden" name="formID" defaultValue={230912145770048} /><input type="hidden" id="JWTContainer" defaultValue /><input type="hidden" id="cardinalOrderNumber" defaultValue />
          <div role="main" className="form-all">
            <ul className="form-section page-section">
              <li id="cid_12" className="form-input-wide" data-type="control_head">
                <div style={{display: 'table', width: '100%'}}>
                  <div className="form-header-group hasImage header-large" data-imagealign="Left">
                    <div className="header-logo"><img src="https://www.jotform.com/uploads/khanazzu994/form_files/pfc_clone_6425e6b2cca00.png" alt="Please Select your Role!!" width={314} className="header-logo-left" /></div>
                    <div className="header-text httac htvam">
                      <h1 id="header_12" className="form-header" data-component="header">Please Select your Role!!</h1>
                    </div>
                  </div>
                </div>
              </li>
              <li className="form-line form-line-column form-col-1" data-type="control_image" id="id_3">
                <div id="cid_3" className="form-input-wide" data-layout="full"> <img alt="Image" loading="lazy" className="form-image" style={{border: 0}} src="https://www.jotform.com/uploads/khanazzu994/form_files/%E2%80%94Pngtree%E2%80%943d%20gift%20box%20with%20pink_8102815.642949a604f4b3.50847174.png" tabIndex={0} height="250px" width="250px" data-component="image" /> </div>
              </li>
              <li className="form-line form-line-column form-col-2" data-type="control_image" id="id_4">
                <div id="cid_4" className="form-input-wide" data-layout="full">
                  <div style={{textAlign: 'center'}}><img alt="Image" loading="lazy" className="form-image" style={{border: 0}} src="https://img.freepik.com/premium-vector/new-message-concept-landing-page_23-2148314295.jpg?size=626&ext=jpg&ga=GA1.2.459164167.1680426794&semt=ais" tabIndex={0} height="250px" width="250px" data-component="image" /></div>
                </div>
              </li>
              <li className="form-line form-line-column form-col-3" data-type="control_button" id="id_7">
                <div id="cid_7" className="form-input-wide" data-layout="full">
                <div data-align="center" class="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField"><button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" onClick={Login}>Donate</button></div>
                 
                </div>
              </li>
              <li className="form-line form-line-column form-col-4" data-type="control_button" id="id_2">
                <div id="cid_2" className="form-input-wide" data-layout="full">
                <div data-align="center" class="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField"><button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" onClick={Login}>Collect</button></div>
                </div>
              </li>
              <li style={{clear: 'both'}} />
              <li style={{display: 'none'}}>Should be Empty: <input type="text" name="website" defaultValue /></li>
            </ul>
          </div>
         
         
        </form>
      </div>

 
      );
  }
    
export default FirstPage