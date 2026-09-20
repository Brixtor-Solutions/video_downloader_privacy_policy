import { APP_NAME, OPERATOR, CONTACT_EMAIL, LAST_UPDATED, SUPPORTED_PLATFORMS, SERVICES_CONFIG } from './config';

export const privacyContent = {
  title: "Privacy Policy",
  subtitle: `How ${APP_NAME} processes URLs, temporarily handles media via server-side infrastructure, and protects user privacy.`,
  lastUpdated: LAST_UPDATED,
  operator: OPERATOR,
  contactEmail: CONTACT_EMAIL,

  architectureSummary: [
    {
      step: "1",
      title: "User Inputs URL",
      desc: `You submit a publicly accessible media link inside the ${APP_NAME} Flutter mobile app.`
    },
    {
      step: "2",
      title: "FastAPI Backend Request",
      desc: "The app securely transmits the link to our FastAPI backend service to extract media metadata."
    },
    {
      step: "3",
      title: "yt-dlp Extraction",
      desc: "Our server executes the open-source yt-dlp engine to resolve video streams and audio tracks."
    },
    {
      step: "4",
      title: "Temporary Processing",
      desc: "If stream merging or formatting is needed, media is temporarily processed in server-side scratch memory/disk."
    },
    {
      step: "5",
      title: "Media Delivery",
      desc: "The processed media stream or download payload is transmitted directly back to your mobile device."
    },
    {
      step: "6",
      title: "Local Device Storage",
      desc: "The Flutter app saves the final media file directly into your device's local storage gallery or downloads folder."
    }
  ],

  sections: [
    {
      id: "who-we-are",
      title: "1. Who We Are",
      content: [
        `This Privacy Policy explains how ${OPERATOR} ("we", "us", or "our") handles technical information and user privacy in connection with the ${APP_NAME} mobile application for Android.`,
        `We are committed to operating with complete transparency. We believe in providing truthful, technical disclosures about how our software operates behind the scenes rather than hiding behind vague legal boilerplate.`
      ]
    },
    {
      id: "what-the-app-does",
      title: "2. What the App Does",
      content: [
        `${APP_NAME} is a utility application built using the Flutter framework that assists users in retrieving and saving online media content for personal, offline viewing.`,
        `The app accepts public URLs provided by the user, resolves downloadable video and audio streams using backend extraction tools, and saves the resulting files directly to the user's local Android device storage.`,
        `The application is intended strictly for downloading content that you own, have created, or have received explicit legal authorization or license from the rights holder to download and retain.`
      ]
    },
    {
      id: "information-we-process",
      title: "3. Information We Process",
      content: [
        `We do not maintain user accounts, profiles, or registration databases. You are never asked to provide your name, physical address, phone number, or social media passwords to use ${APP_NAME}.`,
        `To fulfill media extraction requests, our application and server infrastructure process the following minimum technical data points:`,
      ],
      list: [
        `Media URLs: The exact web address submitted by you in the app to initiate extraction.`,
        `Technical HTTP Headers: Standard connection details including IP address, user-agent string, and timestamp sent automatically by your HTTP client during the download handshake.`,
        `Format Preferences: Resolution, codec, and format selections chosen by you (e.g., MP4 1080p, MP3 audio).`
      ]
    },
    {
      id: "urls-and-media-requests",
      title: "4. URLs and Media Requests",
      content: [
        `When you submit a link to ${APP_NAME}, the URL is dispatched to our backend API to interrogate the source platform and determine available media streams.`,
        `URLs are processed dynamically in real time to satisfy the active request. We do not correlate submitted URLs with persistent personal identities because no user accounts exist in our system.`,
        `Users must exercise discretion and avoid submitting URLs that contain private authentication tokens, session identifiers, or confidential personal information.`
      ]
    },
    {
      id: "server-side-processing",
      title: "5. Server-Side Processing Architecture",
      content: [
        `Unlike simple client-only web wrappers, ${APP_NAME} employs a robust client-server architecture:`,
      ],
      list: [
        `Mobile Client: A Flutter-based Android application providing the user interface, input validation, and final file storage management.`,
        `Backend API: A high-performance FastAPI service running on remote servers.`,
        `Extraction Engine: The open-source media extraction library (yt-dlp) executed by the FastAPI backend to parse streams from supported host platforms.`,
        `Stream Assembly: Many modern video platforms split high-definition video and high-fidelity audio into distinct streams (DASH/HLS). Our backend merges or formats these streams server-side so that a playable, cohesive media file can be delivered to your device.`
      ],
      callout: {
        type: "important",
        title: "Technical Disclosure: Not Exclusively On-Device",
        body: `We do NOT claim that all media processing takes place exclusively on your mobile device. Because high-resolution stream multiplexing and extraction algorithms require specialized tooling and significant computational resources, media extraction and temporary conversion occur on our backend servers before being delivered back to your device.`
      }
    },
    {
      id: "temporary-files-and-retention",
      title: "6. Temporary Files and Retention",
      content: [
        `When our FastAPI backend retrieves video or audio segments to merge them or prepare them for delivery, files are written to temporary server scratch storage or held in temporary memory buffers.`,
        `These temporary files exist solely for the duration required to complete the conversion and stream the finished file to your device.`,
        `Once the download stream is delivered to your client, or after a short automated expiry timeout (typically within a few hours at most), temporary files are permanently purged from server disks through automated garbage collection scripts.`,
        `We do not operate a permanent media archive, library, or public mirror of downloaded files.`
      ]
    },
    {
      id: "device-storage",
      title: "7. Device Storage",
      content: [
        `Once the download is completed, the media file is saved directly onto your Android device's local filesystem (such as your device's standard "Downloads" directory or your designated media gallery).`,
        `The app requires standard Android storage / media permissions solely to write the requested video or audio file to your local disk.`,
        `${APP_NAME} does not scan, inspect, upload, or alter any existing personal photos, videos, contacts, or files stored on your device.`
      ]
    },
    {
      id: "advertising-and-analytics",
      title: "8. Advertising and Analytics",
      content: [
        `Depending on the specific build and release version of the mobile app installed on your device, third-party advertising or analytics SDKs may be included:`,
      ],
      list: [
        `Google AdMob: May be utilized to display mobile advertisements that support server operating expenses. When active, Google AdMob may collect and process device identifiers (such as Google Advertising ID / GAID), general coarse location, and ad interaction telemetry in compliance with Google's Advertising Policies.`,
        `Firebase Analytics / Crashlytics: May be configured to measure anonymous crash logs, app performance metrics, and feature usage to help us stabilize and improve app updates.`
      ],
      conditionalNotice: SERVICES_CONFIG.enableAdMob || SERVICES_CONFIG.enableFirebaseAnalytics
        ? `Note: One or more advertising/analytics services are currently marked as active in this deployment configuration.`
        : `Current Release Status: In this baseline configuration, optional advertising and analytics networks are not actively engaged for user tracking. If enabled in future store updates, this policy provides prior disclosure of their operating parameters.`
    },
    {
      id: "third-party-services",
      title: "9. Third-Party Services & Platforms",
      content: [
        `${APP_NAME} facilitates media retrieval from various publicly accessible third-party media platforms, which may include ${SUPPORTED_PLATFORMS.join(", ")}.`,
        `Disclaimer of Non-Affiliation: ${APP_NAME} and ${OPERATOR} are entirely independent. We are NOT affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with YouTube, Google, Meta (Instagram, Facebook), ByteDance (TikTok), X Corp. (Twitter), or any of their subsidiaries or affiliates.`,
        `Third-Party Data Collection: When our servers or your client communicate with external host platforms to retrieve media, those third-party platforms receive technical network requests and may independently log request parameters, IP addresses, and cookie states subject to their respective terms and privacy policies. We encourage you to review their individual privacy statements.`
      ]
    },
    {
      id: "how-we-use-information",
      title: "10. How We Use Information",
      content: [
        `Any technical information processed by ${APP_NAME} is strictly employed for the following limited purposes:`,
      ],
      list: [
        `Fulfilling your real-time media conversion and download requests.`,
        `Diagnosing network transmission errors, server capacity bottlenecks, and backend extraction failures.`,
        `Protecting our infrastructure against denial-of-service (DoS) attacks, brute-force exploitation, and malicious traffic.`,
        `Ensuring reliable communication between the Flutter client and the FastAPI backend service.`
      ]
    },
    {
      id: "data-sharing",
      title: "11. Data Sharing",
      content: [
        `We do not sell, rent, trade, or monetize your personal data or browsing activity to data brokers or marketing intermediaries.`,
        `Technical data is only transferred under the following narrow circumstances:`,
      ],
      list: [
        `Service Infrastructure Providers: Cloud hosting and server infrastructure vendors that power our FastAPI backend and network routing.`,
        `Direct Media Fetching: Backend interactions with third-party media hosts initiated solely to execute your download command.`,
        `Legal Compliance: If strictly compelled by lawful court order, subpoena, or binding governmental warrant in accordance with applicable laws.`
      ]
    },
    {
      id: "security",
      title: "12. Security",
      content: [
        `We employ industry-standard security safeguards to safeguard data in transit. Communications between the Flutter mobile application and our FastAPI backend are encrypted using Transport Layer Security (TLS/HTTPS).`,
        `Temporary scratch storage on our server environment is isolated and restricted from public directory listing.`,
        `While we implement standard commercial security practices, please understand that no method of transmission over the Internet or server processing can be guaranteed to be 100% impenetrable.`
      ]
    },
    {
      id: "childrens-privacy",
      title: "13. Children's Privacy",
      content: [
        `${APP_NAME} is not structured or intended to attract children under the age of 13 (or under the applicable age of digital consent in your jurisdiction).`,
        `We do not knowingly solicit, collect, or retain personal information from children. If you believe a child has provided personal information to our services, please contact us at ${CONTACT_EMAIL} so that we can take prompt corrective action.`
      ]
    },
    {
      id: "user-responsibilities",
      title: "14. User Responsibilities & Copyright Awareness",
      content: [
        `As a user of ${APP_NAME}, you are solely responsible for how you utilize the application and the content you choose to download.`,
        `You must only download, store, and process content if:`,
      ],
      list: [
        `You are the original copyright creator of the content; or`,
        `You have obtained express permission or a valid license from the copyright owner; or`,
        `The media is officially published under a permissive public license (such as Creative Commons CC-BY); or`,
        `Your use qualifies under applicable statutory fair use, fair dealing, or personal backup exemptions in your jurisdiction.`
      ]
    },
    {
      id: "data-retention-and-deletion",
      title: "15. Data Retention and Deletion",
      content: [
        `Because we do not maintain accounts, there are no user profiles, credit cards, or stored personal files to delete on our servers.`,
        `Temporary media files generated during processing are automatically purged on a rolling basis immediately following transfer or short expiration cycles.`,
        `Standard ephemeral server access logs (containing client IP addresses and endpoint timestamps) are retained only as long as necessary for technical diagnostics and security filtering before being rotated and discarded.`
      ]
    },
    {
      id: "international-processing",
      title: "16. International Processing",
      content: [
        `Our backend servers may be hosted in cloud data centers located in various international jurisdictions (such as the United States or the European Union).`,
        `By using the application, you acknowledge that your media extraction requests and technical connection parameters may be routed across international borders to reach our processing infrastructure.`
      ]
    },
    {
      id: "changes-to-this-policy",
      title: "17. Changes to This Policy",
      content: [
        `We may update this Privacy Policy periodically to reflect technological adjustments, new backend capabilities, changes in legal requirements, or mobile app updates.`,
        `The latest version will always be published on this legal portal with an updated "Last updated" date. We encourage users to check this page periodically.`
      ]
    },
    {
      id: "contact",
      title: "18. Contact Us",
      content: [
        `If you have any questions, suggestions, or concerns regarding this Privacy Policy or our data handling practices, please contact us at:`,
        `Operator: ${OPERATOR}`,
        `Email: ${CONTACT_EMAIL}`,
        `We will endeavor to respond to genuine inquiries within a reasonable timeframe.`
      ]
    }
  ]
};
