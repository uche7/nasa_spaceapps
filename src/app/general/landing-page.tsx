"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import NavigationBar from "@/app/general/navigation-bar";
import HeroPage from "./hero-page";
import JoinUsPage from "./join-us-page";
import SpaceAgencies from "./space-agencies";
import GlobalCollabrators from "./global-collabrators";
import { CollabratorsSlider } from "./collabrators-slider";
import Shannon from "./shannon";
import TeamStories from "./team-stories";
import HackathoneTimeline from "./timeline";
import Socials from "./socials-page";
import Footer from "./footer";
import BackToTopButton from "../general/back-to-top"
import { useEffect, useState } from 'react';
import { getMessaging, onMessage,getToken } from 'firebase/messaging';
import firebaseApp from '../notification/firebase';

/** The Landing Page */
const LandingPage = () => {
  const [token, setToken] = useState('');
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState('');

    
  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
          const messaging = getMessaging(firebaseApp);

          // Retrieve the notification permission status
          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          // Check if permission is granted before retrieving the token
          if (permission === 'granted') {
            const currentToken = await getToken(messaging, {
              vapidKey:
                'BLqeKzVjYZhFeAeLkoWVcqxT9vGse9-tzRZV-nh0I5sU3YVxgRzGlVVAYDsvg-Jtr3eV1IgrUrhwtxwnTJRA-Qk',
            });
            if (currentToken) {
              setToken(currentToken);
              
            } else {
              console.log(
                'No registration token available. Request permission to generate one.'
              );
            }
          }
        }
      } catch (error) {
        console.log('An error occurred while retrieving token:', error);
      }
    };

    retrieveToken();
  }, []);
  
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log('Foreground push notification received:', payload);
        // Handle the received push notification while the app is in the foreground
        // You can display a notification or update the UI based on the payload
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
        {/* <CollabratorsSlider /> */}
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
