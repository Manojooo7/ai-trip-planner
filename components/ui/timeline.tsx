"use client";
import { TripInfo } from "@/app/create-trip/_components/chatbox";
import { CalendarRange, IndianRupee, Users } from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data, tripData }: { data: TimelineEntry[], tripData:TripInfo }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto py-7 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Your Trip Itinerary from <strong className="text-primary">{tripData?.origin}</strong> to <strong className="text-primary">{tripData?.destination}</strong> is ready
        </h2>
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <CalendarRange/>
            <h2>{tripData?.duration}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <IndianRupee/>
            <h2>{tripData?.budget}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Users/>
            <h2>{tripData?.group_size}</h2>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start pt-10 px-4 md:px-8 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 w-4 h-4 bg-primary rounded-full transform -translate-x-2 mt-2">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
            </div>

            {/* Content */}
            <div className="ml-8 space-y-4 w-full">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                {item.title}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Timeline Line */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-primary"
          />
        </div>
      </div>
    </div>
  );
};