import { APP_NAME, OPERATOR, CONTACT_EMAIL, LAST_UPDATED, SUPPORTED_PLATFORMS } from './config';

export const termsContent = {
  title: "Terms & Conditions",
  subtitle: `Rules, legal disclaimers, and user obligations governing your use of the ${APP_NAME} mobile application and associated backend services.`,
  lastUpdated: LAST_UPDATED,
  operator: OPERATOR,
  contactEmail: CONTACT_EMAIL,

  sections: [
    {
      id: "acceptance-of-terms",
      title: "1. Acceptance of Terms",
      content: [
        `By downloading, installing, accessing, or using the ${APP_NAME} mobile application or its associated backend conversion services (collectively referred to as the "Service"), you agree to be bound by these Terms & Conditions ("Terms").`,
        `If you do not agree with any part of these Terms, you must immediately cease using the Service and uninstall the application from your device.`
      ]
    },
    {
      id: "description-of-service",
      title: "2. Description of Service",
      content: [
        `${APP_NAME} is an Android software utility developed with the Flutter framework that interacts with a remote FastAPI server running the yt-dlp media extraction engine.`,
        `The Service enables users to submit public media links, parse video and audio streams, temporarily process stream multiplexing on a remote server, and transmit the assembled media file back to the user's device for local storage and offline playback.`,
        `The Service does not offer media hosting, streaming subscription libraries, or public media indexing. All downloads are executed on an ephemeral, user-initiated basis.`
      ]
    },
    {
      id: "lawful-use",
      title: "3. Lawful Use",
      content: [
        `You agree to use ${APP_NAME} strictly for legitimate, lawful, and authorized purposes in full compliance with all local, state, national, and international laws, statutes, and regulations.`,
        `You may only download and store content where you hold the necessary intellectual property rights, licenses, or express legal permissions, or where your action is explicitly authorized under governing statutory copyright exemptions (such as fair use or personal non-commercial archiving).`
      ]
    },
    {
      id: "user-responsibility-for-content",
      title: "4. User Responsibility for Content",
      content: [
        `You acknowledge and agree that you bear sole, exclusive legal responsibility for any URL entered, any media stream requested, and any media file downloaded or distributed using the Service.`,
        `${OPERATOR} acts solely as a technical tool provider and does not monitor, review, screen, catalog, or curate the content processed through the Service.`,
        `You represent and warrant that your use of the Service does not infringe or violate the copyright, trademark, privacy, publicity, or other proprietary rights of any third party.`
      ]
    },
    {
      id: "third-party-platforms",
      title: "5. Third-Party Platforms & Disclaimer of Affiliation",
      content: [
        `The Service may interact with publicly accessible media URLs from third-party hosting platforms, including but not limited to ${SUPPORTED_PLATFORMS.join(", ")}.`,
        `Strict Disclaimer: ${APP_NAME} and ${OPERATOR} are entirely independent entities. We are NOT affiliated with, sponsored by, endorsed by, or associated in any official capacity with YouTube, Google LLC, Meta Platforms, Inc. (Instagram, Facebook), ByteDance Ltd. (TikTok), X Corp. (formerly Twitter), or any of their parent, subsidiary, or affiliate companies.`,
        `Third-party trademarks, brand names, service marks, and logos mentioned are the property of their respective owners and are referenced solely for descriptive and interoperability identification under nominative fair use principles.`
      ]
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property",
      content: [
        `All intellectual property rights in the ${APP_NAME} mobile application code, application design, brand identity, website, and proprietary backend logic are owned by ${OPERATOR} or licensed to us.`,
        `You are granted a limited, personal, revocable, non-exclusive, non-transferable license to use the application for its intended purpose on compatible Android devices.`,
        `You may not reverse-engineer, decompile, disassemble, or derive source code from the backend server or application binary, except to the extent permitted by applicable open-source component licenses.`
      ]
    },
    {
      id: "prohibited-use",
      title: "7. Prohibited Use",
      content: [
        `You agree NOT to use the Service to:`,
      ],
      list: [
        `Download, copy, or redistribute copyrighted media without the explicit consent of the copyright owner or legal right to do so.`,
        `Circumvent, disable, or tamper with technological protection measures (TPMs), digital rights management (DRM) mechanisms, or security features.`,
        `Attempt to overload, flood, launch denial-of-service (DoS) attacks, or disrupt our FastAPI backend infrastructure.`,
        `Deploy automated bots, spiders, scrapers, or scripts to bulk-download or exploit our conversion servers.`,
        `Process, download, or distribute unlawful, harmful, defamatory, obscene, harassing, or sexually explicit material, particularly any form of Child Sexual Abuse Material (CSAM).`,
        `Use the Service for commercial resale, distribution, or repackaging without written authorization from ${OPERATOR}.`
      ]
    },
    {
      id: "availability-and-changes",
      title: "8. Availability and Changes to Service",
      content: [
        `We reserve the right to modify, suspend, upgrade, or discontinue the Service (or any portion thereof) at any time, with or without prior notice.`,
        `We shall not be liable to you or any third party for any modification, suspension, throttling, or termination of the Service or any of its extraction capabilities.`
      ]
    },
    {
      id: "no-guarantee-of-download-availability",
      title: "9. No Guarantee of Download Availability",
      content: [
        `Because ${APP_NAME} depends upon external platforms, API endpoints, and web layouts operated by third parties, media extraction availability cannot be guaranteed.`,
        `Third-party platforms frequently alter their streaming protocols, security handshakes, anti-scraping mechanisms, and page structures without warning.`,
        `Consequently, certain URLs, video resolutions, audio streams, or media formats may become temporarily or permanently unavailable. We do not warrant that any specific URL or media file can or will be successfully downloaded.`
      ]
    },
    {
      id: "third-party-services",
      title: "10. Third-Party Services and Terms",
      content: [
        `When accessing content from third-party platforms via ${APP_NAME}, your actions may also be subject to the terms of service and community guidelines of those external host websites.`,
        `You are solely responsible for reviewing and adhering to the terms governing any third-party websites or services you interact with through our utility.`
      ]
    },
    {
      id: "disclaimer",
      title: "11. Disclaimer of Warranties",
      content: [
        `THE SERVICE IS PROVIDED STRICTLY ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.`,
        `TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, ${OPERATOR.toUpperCase()} DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.`,
        `WE DO NOT WARRANT THAT THE APPLICATION WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, ACCURATE, COMPLETE, OR FREE OF BUGS, VIRUSES, OR OTHER HARMFUL COMPONENTS.`
      ]
    },
    {
      id: "limitation-of-liability",
      title: "12. Limitation of Liability",
      content: [
        `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ${OPERATOR.toUpperCase()}, ITS OWNERS, DEVELOPERS, AFFILIATES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, LOSS OF GOODWILL, OR DEVICE MALFUNCTION, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO, USE OF, OR INABILITY TO USE THE SERVICE.`,
        `UNDER NO CIRCUMSTANCES SHALL OUR AGGREGATE LIABILITY ARISING FROM OR RELATING TO THE SERVICE EXCEED THE AMOUNT YOU ACTUALLY PAID TO US FOR THE USE OF THE APP (WHICH IS ZERO FOR FREE USERS) OR FIFTY UNITED STATES DOLLARS ($50.00 USD), WHICHEVER IS GREATER.`
      ]
    },
    {
      id: "indemnification",
      title: "13. Indemnification",
      content: [
        `You agree to indemnify, defend, and hold harmless ${OPERATOR}, its developers, contractors, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, and reasonable legal fees arising out of or in any way connected with:`,
      ],
      list: [
        `Your access to or use of the Service;`,
        `Your violation of these Terms or any applicable law or regulation;`,
        `Any infringement, misappropriation, or violation of any intellectual property rights or other rights of any third party resulting from media you requested, downloaded, or distributed through the Service.`
      ]
    },
    {
      id: "termination",
      title: "14. Termination",
      content: [
        `These Terms remain in effect until terminated by either you or us. You may terminate these Terms at any time by deleting the application and stopping all usage of our services.`,
        `We reserve the right to suspend or block your IP address, restrict your access to the backend conversion API, or terminate your ability to use the Service immediately and without notice if we detect abusive traffic, automated exploitation, or material breach of these Terms.`
      ]
    },
    {
      id: "changes-to-terms",
      title: "15. Changes to Terms",
      content: [
        `We reserve the right to update or replace these Terms at our sole discretion at any time. When modifications occur, we will post the updated version on this portal and revise the "Last updated" date.`,
        `Your continued use of the application following the posting of any changes constitutes your binding acceptance of the revised Terms.`
      ]
    },
    {
      id: "governing-law",
      title: "16. Governing Law and Jurisdiction",
      content: [
        `These Terms and any disputes arising out of or related to the Service shall be governed by and construed in accordance with the laws governing ${OPERATOR}, without giving effect to any choice or conflict of law principles.`,
        `Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the competent courts having jurisdiction over the operator.`
      ]
    },
    {
      id: "contact",
      title: "17. Contact Information",
      content: [
        `If you have questions, notices, or require clarification regarding these Terms & Conditions, please contact:`,
        `Operator: ${OPERATOR}`,
        `Email: ${CONTACT_EMAIL}`
      ]
    }
  ]
};
