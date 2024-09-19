"use client";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import NavigationBar from "@/app/general/navigation-bar";
import HeroPage from "./hero-page";
import JoinUsPage from "./join-us-page";
import SpaceAgencies from "./space-agencies";
import GlobalCollabrators from "./global-collabrators";
import Shannon from "./shannon";
import TeamStories from "./team-stories";
import HackathoneTimeline from "./timeline";
import Socials from "./socials-page";
import Footer from "./footer";
import BackToTopButton from "../general/back-to-top";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import firebaseApp from "../notification/firebase";

const LandingPage = () => {
  const [token, setToken] = useState("");
  const [notificationPermissionStatus, setNotificationPermissionStatus] = useState("");

  // Function to send the token to the API
  const sendTokenToApi = async (token: string) => {
    console.log(token);
    try {
      const response = await fetch("https://yds-online.com/api/save-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Token sent successfully:", data);
    } catch (error) {
      console.error("Error sending token:", error);
    }
  };

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if ("serviceWorker" in navigator && typeof window !== "undefined") {
          // Explicitly register the service worker
          const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
          console.log("Service Worker registered:", registration);

          const messaging = getMessaging(firebaseApp);

          // Request notification permission
          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          if (permission === "granted") {
            // Get token after service worker is registered
            const currentToken = await getToken(messaging, {
              vapidKey: "BLqeKzVjYZhFeAeLkoWVcqxT9vGse9-tzRZV-nh0I5sU3YVxgRzGlVVAYDsvg-Jtr3eV1IgrUrhwtxwnTJRA-Qk",
              serviceWorkerRegistration: registration, // Pass the service worker registration
            });

            if (currentToken) {
              console.log("Token retrieved:", currentToken);
              await sendTokenToApi(currentToken);
              setToken(currentToken);
            } else {
              console.log("No registration token available. Request permission to generate one.");
            }
          } else {
            console.log("Notification permission denied");
          }
        }
      } catch (error) {
        console.error("An error occurred while retrieving token:", error);
      }
    };

    retrieveToken();
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator && typeof window !== "undefined") {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log("Foreground push notification received:", payload);
        // Handle the received push notification while the app is in the foreground
      });
      return () => {
        unsubscribe(); // Unsubscribe from the onMessage event
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>

      {/* Main contents */}
      <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
        <NavigationBar />
        <HeroPage />
        <JoinUsPage />
        <SpaceAgencies />
        <GlobalCollabrators />
        <Shannon />
        <TeamStories />
        <HackathoneTimeline />
        <Socials />
        <BackToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
