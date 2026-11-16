export function JsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Done-For-You WhatsApp Lead System for Real Estate",
    "serviceType": "Lead Qualification and Viewing Booking Infrastructure",
    "description":
      "A Done-For-You WhatsApp Lead Qualification and Viewing-Booking System for real estate agencies. Inquiries are answered in seconds, qualified by budget and location, and handed to agents ready to book with zero monthly software fees.",
    "provider": {
      "@type": "Person",
      "name": "Divyansh Dubey",
      "url": "https://solutions.divyanshdubey.dev",
      "email": "divyanshdubey1108@gmail.com",
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WhatsApp Real Estate Lead Infrastructure",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Client-Owned WhatsApp Real Estate Qualification System",
          "description":
            "Custom deployed infrastructure connected directly to your Meta Business Manager with clean CSV import and export.",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can we send follow-ups without risking our WhatsApp number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. The system operates exclusively through the official Meta Business Platform API with strict opt-in compliance and Meta-approved message templates. Because conversations are initiated by incoming buyer inquiries, your number maintains the highest quality rating with zero risk of carrier bans.",
        },
      },
      {
        "@type": "Question",
        "name": "Can we keep using the WhatsApp Business app on the same number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. Through official Meta coexistence support, your agency brokers can continue using the WhatsApp Business app on mobile devices for direct chats, while automated qualification and viewing scheduling run continuously in the background.",
        },
      },
      {
        "@type": "Question",
        "name": "Are there any monthly software or per-seat fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. This is a one-time Done-For-You build. You pay zero software subscriptions, zero monthly platform retainers, and zero per-seat user licenses. You only pay direct wholesale conversation rates directly to Meta via your own Business Manager.",
        },
      },
      {
        "@type": "Question",
        "name": "Who owns the lead database and WhatsApp number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Your agency maintains 100% non-custodial ownership. The WhatsApp Business API account, the phone number, the customer database, and the workflow automation all reside inside your Meta Business Manager and your own server or cloud database. We hold zero proprietary lock-in.",
        },
      },
      {
        "@type": "Question",
        "name": "How does the deployment process work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We handle the complete Done-For-You setup end-to-end. This includes official WhatsApp Business account verification, qualification flow customization for your property portfolio, calendar synchronization, and full broker testing before go-live.",
        },
      },
      {
        "@type": "Question",
        "name": "Does this require an external CRM or complex software setup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. The system sits 100% inside WhatsApp. You don't need to connect an external CRM, configure webhooks, or pay for third-party software. Inquiries, buyer qualification criteria, and viewing appointments are managed directly in WhatsApp, and you can import or export phone numbers in clean CSV format at any time.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
