'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { NewPairsTable } from '../components/token-table/NewPairsTable';
import { FinalStretchTable } from '../components/token-table/FinalStretchTable';
import { MigratedTable } from '../components/token-table/MigratedTable';
import { AppHeader } from '../components/AppHeader';
import { AppFooter } from '../components/AppFooter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ChevronLeft, ChevronRight, ChevronUp, Settings } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useIsMobile } from '../hooks/useIsMobile';
import { SecondaryNavBar } from '../components/SecondaryNavBar';
import { PulsePageHeader } from '../components/PulsePageHeader';
import ErrorBoundary from '../components/ErrorBoundary';
import { MobileSettings } from '../components/MobileSettings';
import { cn } from '../lib/utils';
import Image from "next/image";

// Move InstallWebAppBanner outside the main component
const InstallWebAppBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-[60px] left-0 right-0 bg-card border-t border-b border-border p-3 z-50">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">Install WebApp</p>
      </div>
      <div className="fixed bottom-[60px] left-0 right-0 bg-card border-t border-b border-border p-3 z-50">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">Install WebApp</p>
      </div>
      <div className="mt-2 flex items-center gap-2">
        {/* Add to Home Screen Button */}
        <button
          type="button"
          className="flex flex-row justify-center items-center
            h-[32px] px-[12px] gap-[8px]
            rounded-full
            bg-green-600 hover:bg-green-700 active:bg-green-700
            text-background
            text-[14px] leading-[18px] font-bold
            transition-colors  ease-in-out
            active:scale-[0.96] transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)]
            cursor-pointer
            "
          onClick={() => setIsVisible(false)}
        >
          Add to Home Screen
        </button>
        
        {/* Dismiss Button */}
        <button
          type="button"
          className="flex flex-row justify-center items-center
            h-[32px]  px-[12px] gap-[8px]
            rounded-full
            bg-backgroundSecondary border border-primaryStroke
            hover:bg-secondaryStroke active:bg-secondaryStroke
            text-textSecondary
            text-[14px]  font-bold
            transition-colors duration-150 ease-in-out
            active:scale-[0.96] transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)]
            cursor-pointer
            "
          onClick={() => setIsVisible(false)}
        >
          Dismiss
        </button>
      </div>
    </div>
    </div>
  );
};

export default function Home() {
  const isMobile = useIsMobile();
  const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);


   useEffect(() => {
    const checkScroll = () => {
      if (tabsRef.current && tabsListRef.current) {
        const tabsContainer = tabsRef.current;
        const tabsList = tabsListRef.current;
        
        setShowLeftScroll(tabsContainer.scrollLeft > 0);
        setShowRightScroll(
          tabsContainer.scrollLeft + tabsContainer.clientWidth < tabsList.scrollWidth
        );
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Mobile view
  if (isMobile) {
    return (
      <ErrorBoundary fallback={<div className="p-4 text-center">Error loading mobile view</div>}>
        <div className="flex flex-col min-h-screen bg-[#06070b] text-xs">
          <AppHeader />
          <main className="flex-grow p-3 pb-20">
               <Tabs defaultValue="new-pairs" className="w-full">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  {/* Chain Buttons */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button type="button" className="relative flex items-center justify-center w-8 h-8 rounded-full transition-all bg-[#1e1f23] scale-110" aria-label="Switch to Solana">
                      <Image alt="SOL" loading="lazy" width="20" height="20" src="/sol-icon.svg" />
                    </button>
                    <button type="button" className="relative flex items-center justify-center w-8 h-8 rounded-full transition-all hover:bg-primary-stroke/30 opacity-60 hover:opacity-100" aria-label="Switch to BNB">
                      <Image alt="BNB" loading="lazy" width="20" height="20" className="grayscale-[0.3]" src="/bnb-icon.svg" />
                    </button>
                  </div>

                  {/* Horizontal Scrollable Tabs Container */}
                  <div className="relative flex-1 min-w-0">
                    {/* Left Scroll Button */}
                    {showLeftScroll && (
                      <button
                        
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-1 rounded-r-md"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                    )}

                    {/* Scrollable Tabs */}
                    <div 
                      ref={tabsRef}
                      className="flex overflow-x-auto scrollbar-hide"
                      onScroll={() => {
                        if (tabsRef.current) {
                          setShowLeftScroll(tabsRef.current.scrollLeft > 0);
                          setShowRightScroll(
                            tabsRef.current.scrollLeft + tabsRef.current.clientWidth < 
                            (tabsListRef.current?.scrollWidth || 0)
                          );
                        }
                      }}
                    >
                      <TabsList 
                        ref={tabsListRef}
                        className="bg-transparent p-0 gap-2 min-w-max"
                      >
                        <TabsTrigger 
                          value="new-pairs" 
                          className="px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium text-muted-foreground hover:text-foreground whitespace-nowrap"
                        >
                          New Pairs
                        </TabsTrigger>
                        <TabsTrigger 
                          value="final-stretch" 
                          className="px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium text-muted-foreground hover:text-foreground whitespace-nowrap"
                        >
                          Final Stretch
                        </TabsTrigger>
                        <TabsTrigger 
                          value="migrated" 
                          className="px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium text-muted-foreground hover:text-foreground whitespace-nowrap"
                        >
                          Migrated
                        </TabsTrigger>
                        {/* Optional: Add more tabs if needed */}
                      
                      </TabsList>
                    </div>

                    {/* Right Scroll Button */}
                    {showRightScroll && (
                      <button
                       
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-1 rounded-l-md"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#1e1f23] rounded-full shrink-0 ml-2">
                  <Button 
                    variant="ghost" 
                    className="h-7 px-2 text-white" 
                    onClick={() => setIsMobileSettingsOpen(!isMobileSettingsOpen)}
                  >
                    <div 
                     
                      className="px-2 py-1 font-mono  h-7"
                    >
                      P1
                    </div>
                    {isMobileSettingsOpen ? 
                      <ChevronUp className="h-4 w-4 ml-2" /> : 
                      <Settings className="h-4 w-4 ml-2" />
                    }
                  </Button>
                </div>
              </div>

              {/* Mobile Settings Dropdown */}
              <div className={cn(
                "transition-all  ease-in-out overflow-hidden", 
                isMobileSettingsOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
              )}>
                <MobileSettings />
              </div>
              
              <Suspense fallback={<div className="p-4">Loading...</div>}>
                <TabsContent value="new-pairs">
                  <NewPairsTable />
                </TabsContent>
              </Suspense>
              <Suspense fallback={<div className="p-4">Loading...</div>}>
                <TabsContent value="final-stretch">
                  <FinalStretchTable />
                </TabsContent>
              </Suspense>
              <Suspense fallback={<div className="p-4">Loading...</div>}>
                <TabsContent value="migrated">
                  <MigratedTable />
                </TabsContent>
              </Suspense>
            </Tabs>
          </main>
          <AppFooter />
          <InstallWebAppBanner />
        </div>
      </ErrorBoundary>
    );
  }

  // Desktop view
  return (
    <ErrorBoundary fallback={<div className="p-4 text-center">Error loading desktop view</div>}>
      <div className="flex h-screen max-h-screen overflow-hidden bg-[#06070b] text-xs">
        <div className="flex flex-col flex-1 min-w-0">
          <AppHeader  className="border-b border-primaryStroke overflow-hidden flex flex-row w-full h-[52px] sm:h-[64px] min-h-[48px] sm:min-h-[64px] px-[16px] sm:px-[16px] lg:px-[24px] gap-[16px] sm:gap-[16px] lg:gap-[24px] justify-between sm:justify-start items-center" 
          />
          <SecondaryNavBar 
            className="grayscale-[30%] hover:grayscale-0 transition-[filter] relative flex flex-row w-full h-[28px] gap-[8px] px-[16px] pb-[1px] overflow-hidden border-b border-primaryStroke sm:border-primaryStroke/50" 
          />
        
          <div className="flex flex-col w-full h-full gap-[16px] py-[24px] px-[16px] lg:px-[24px] justify-start items-center overflow-hidden">
            <PulsePageHeader className="" />
            <main className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-px bg-border min-h-0 w-full overflow-hidden rounded-lg">
              <Suspense fallback={<div className="p-4">Loading table...</div>}>
                <NewPairsTable />
              </Suspense>
              <Suspense fallback={<div className="p-4">Loading table...</div>}>
                <FinalStretchTable />
              </Suspense>
              <Suspense fallback={<div className="p-4">Loading table...</div>}>
                <MigratedTable />
              </Suspense>
            </main>
          </div>
          
          {/* AppFooter will handle its own responsive behavior with the updated component */}
          <AppFooter />
        </div>
      </div>
    </ErrorBoundary>
  );
}