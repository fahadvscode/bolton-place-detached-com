"use client";

import { useEffect } from "react";
import Script from "next/script";
import { isPlaceholderId } from "@/lib/analytics";
import { captureFirstTouch } from "@/lib/utm";

export function Analytics() {
  const ga4 = process.env.NEXT_PUBLIC_GA_ID;
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  const pixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gaReady = Boolean(ga4 && !isPlaceholderId(ga4, "G-XXXX"));
  const gtmReady = Boolean(gtm && !isPlaceholderId(gtm, "GTM-XXXX"));
  const pixelReady = Boolean(pixel && !isPlaceholderId(pixel, "XXXX"));

  useEffect(() => {
    captureFirstTouch();
  }, []);

  return (
    <>
      {gtmReady ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtm}');`}
        </Script>
      ) : null}
      {gaReady ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${ga4}');`}
          </Script>
        </>
      ) : null}
      {pixelReady ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixel}');fbq('track','PageView');`}
        </Script>
      ) : null}
    </>
  );
}

export function GtmNoscript() {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtm || isPlaceholderId(gtm, "GTM-XXXX")) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
