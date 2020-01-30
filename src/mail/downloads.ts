export const main = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <style type="text/css">
    @media screen {
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }

      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 500;
        src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 500;
        src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }

      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 700;
        src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 700;
        src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }

      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 800;
        src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 800;
        src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
    }

    #outlook a {
      padding: 0;
    }

    .ReadMsgBody,
    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
      line-height: 100%;
    }

    div[style*="margin: 14px 0"],
    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    table,
    td {
      mso-table-lspace: 0;
      mso-table-rspace: 0;
    }

    table,
    tr,
    td {
      border-collapse: collapse;
    }

    body,
    td,
    th,
    p,
    div,
    li,
    a,
    span {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      mso-line-height-rule: exactly;
    }

    img {
      border: 0;
      outline: none;
      line-height: 100%;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      -webkit-font-smoothing: antialiased;
    }

    .pc-gmail-fix {
      display: none;
      display: none !important;
    }

    @media screen and (min-width: 621px) {
      .pc-email-container {
        width: 620px !important;
      }
    }

    @media screen and (max-width:620px) {
      .pc-sm-p-30 {
        padding: 30px !important
      }

      .pc-sm-p-30-25 {
        padding: 30px 25px !important
      }

      .pc-sm-p-25 {
        padding: 25px !important
      }

      .pc-sm-w-100pc {
        width: 100% !important
      }

      .pc-sm-mw-100pc {
        max-width: 100% !important
      }

      .pc-sm-ta-center {
        text-align: center !important
      }

      .pc-sm-p-30-20 {
        padding: 30px 20px !important
      }

      .pc-sm-fs-30 {
        font-size: 30px !important
      }

      .pc-sm-fs-18 {
        font-size: 18px !important
      }

      .pc-sm-p-38-30-40 {
        padding: 38px 30px 40px !important
      }
    }

    @media screen and (max-width:525px) {
      .pc-xs-p-20 {
        padding: 20px !important
      }

      .pc-xs-p-20-15 {
        padding: 20px 15px !important
      }

      .pc-xs-p-15 {
        padding: 15px !important
      }

      .pc-xs-p-25-10 {
        padding: 25px 10px !important
      }

      .pc-xs-fs-16 {
        font-size: 16px !important
      }

      .pc-xs-br-disabled br {
        display: none !important
      }

      .pc-xs-p-25-20 {
        padding: 25px 20px !important
      }

      .pc-xs-fs-14 {
        font-size: 14px !important
      }
    }
  </style>
  <!--[if mso]>
    <style type="text/css">
        .pc-fb-font {
            font-family: Helvetica, Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>

<body style="width: 100% !important; margin: 0; padding: 0; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f4f4f4" class="">
  <span style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
  <table class="pc-email-body" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed;">
    <tbody>
      <tr>
        <td class="pc-email-body-inner" align="center" valign="top">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4"/>
            </v:background>
            <![endif]-->
          <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
          <table class="pc-email-container" width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto; max-width: 620px;">
            <tbody>
              <tr>
                <td align="left" valign="top" style="padding: 0 10px;">
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- BEGIN MODULE: Menu 7 -->
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-30 pc-xs-p-20" bgcolor="#ffffff" valign="top" style="padding: 39px 40px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody>
                              <tr>
                                <td align="center" valign="top">
                                  <a href="http://productcentral.mylibertyfurn.com" style="text-decoration: none;"><img src="http://assets.mylibertyfurn.com/mail-assets/LibertyLogo_BigBell_Horizontal_Vector.png" width="250" height="61" alt="" style="max-width: 100%; height: auto; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #1B1B1B;"></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="8" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-30-20 pc-xs-p-25-10" style="padding: 40px 30px; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);" bgcolor="#ffffff" valign="top">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody>
                              <tr>
                                <td class="pc-sm-fs-30 pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 46px; letter-spacing: -0.6px; color: #151515; padding: 0 10px; text-align: center" valign="top">Your Product Central Image Downloads are Ready for you.</td>
                              </tr>
                              <tr>
                                <td height="15" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td class="pc-sm-fs-18 pc-xs-fs-16 pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 20px; line-height: 30px; letter-spacing: -0.2px; color: #9B9B9B; padding: 0 10px" valign="top">Your selections have been grouped by Category. You will find each file as a Zip file for easy download.</td>
                              </tr>
                              <tr>
                                <td height="25" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td style="padding: 0 10px;" valign="top">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                    </tbody>
                                    <tbody>`;

export const row = `<tr>
                                        <td style="padding: 20px 10px 20px 0; font-size: 16px; letter-spacing: -0.2px; line-height: 26px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; border-bottom: 1px solid #E5E5E5;" valign="top">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                            <tbody>
                                              <tr>
                                                <td valign="top">
                                                  <!--[if (gte mso 9)|(IE)]><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="400"><tr><td width="120" valign="top"><![endif]-->
                                                  <div style="display: inline-block; max-width: 120px; vertical-align: top;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                      <tbody>
                                                        <tr>
                                                          <td style="padding: 0 20px 0 0;" valign="top">
                                                            <img class="pc-fb-font" src="{{image}}" width="100" alt="" style="border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; display: block; border-radius: 5px">
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <!--[if (gte mso 9)|(IE)]></td><td width="280" valign="top"><![endif]-->
                                                  <div style="display: inline-block; max-width: 280px; vertical-align: top;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                      <tbody>
                                                        <tr>
                                                          <td style="padding: 9px 0 0;" valign="top">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                              <tbody>
                                                                <tr>
                                                                  <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; letter-spacing: -0.3px; line-height: 28px; font-weight: 500; font-size: 18px; color: #151515; padding: 0 0 4px 0;" valign="top">
                                                                    {{category}}
                                                                  </td>
                                                                </tr>
                                                                <tr>
                                                                  <td height="4" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td class="pc-fb-font" style="padding: 29px 0 20px; letter-spacing: -0.2px; line-height: 26px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; border-bottom: 1px solid #E5E5E5; color: #151515;" valign="top" align="right">
                                          <a href="{{downloadUrl}}">Download {{fileSize}}</a>
                                        </td>
                                      </tr>`;

export const bottom = `</tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                            <tbody>
                              <tr>
                                <td height="25" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                              </tr>
                              <tr>
                                <td class="pc-sm-fs-18 pc-xs-fs-16 pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 20px; line-height: 30px; letter-spacing: -0.2px; color: #9B9B9B; padding: 0 10px; text-align: center" valign="top">Your download links are valid for the next 6 hours.</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="8" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tbody>
                      <tr>
                        <td class="pc-sm-p-38-30-40 pc-xs-p-25-20" style="padding: 38px 40px 40px 40px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);" valign="top" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                            <tbody>
                              <tr>
                                <td class="pc-fb-font" style="text-align: center; line-height: 20px; letter-spacing: -0.2px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: #9B9B9B;" valign="top">Liberty Furniture Industries<br>6021 Greensboro Dr<br>Atlanta, GA 30336</td>
                              </tr>
                              <tr>
                                <td height="13" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                              </tr>
                            </tbody>
                            <tbody>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- END MODULE: Footer 7 -->
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tbody>
                      <tr>
                        <td height="20" style="font-size: 1px; line-height: 1px;">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Fix for Gmail on iOS -->
  <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
</body>
</html>
`;
