import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function VideoEditing() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        title="Video Editing Course in Ojo, Lagos | Florintech Computer College"
        description="Learn professional video editing in Ojo, Lagos. Master DaVinci Resolve, Adobe Premiere Pro, and video production techniques. Hands-on video editing training at Florintech."
        canonical="https://www.florintechcomputercollege.com/courses/video-editing/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/video-editing/",
          title: "Professional Video Editing Course | Florintech Computer College",
          description: "Learn video editing and video production at Florintech Computer College in Lagos",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/videoediting.jpg",
              width: 800,
              height: 600,
              alt: "Video Editing and Production Course",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="Professional Video Editing"
        courseImage={courseImages.videoediting}
        aboutCourseText="Video content is king in today's digital world. Every business, creator, and marketer needs video—and they need skilled editors to produce it. Our professional video editing course teaches you to transform raw footage into compelling stories that engage audiences across YouTube, TikTok, Instagram, and corporate media.

You'll start by learning the fundamentals of video production: understanding shot composition, color theory, and pacing. Then dive into industry-standard software like DaVinci Resolve and Adobe Premiere Pro. You'll work with real projects: cutting promotional videos, editing vlogs, color grading cinematic footage, and adding effects that bring stories to life.

By the end of this course, you'll have a portfolio of polished videos and the skills to work as a freelance video editor, work for production studios, or manage video content for businesses. Video editors across Lagos command premium rates for quality work."
        courseOutline={[
          "Introduction to Video Production and Editing",
          "Understanding Cinematography and Shot Composition",
          "Video Formats and Frame Rates",
          "Introduction to DaVinci Resolve",
          "Non-Linear Editing Basics",
          "Organizing and Importing Footage",
          "Rough Cut and Fine Editing",
          "Transitions and Effects",
          "Color Correction Fundamentals",
          "Color Grading Techniques",
          "Audio Editing and Mixing",
          "Title and Graphics Integration",
          "Adobe Premiere Pro Essentials",
          "Working with Multiple Camera Angles",
          "Keyframing and Animation",
          "Visual Effects (VFX) Basics",
          "Motion Graphics and Titles",
          "Export and Optimization for Different Platforms",
          "Video for Social Media",
          "Creating Promotional Videos",
          "Documentary Editing Techniques",
          "Livestream Editing",
          "Building a Video Portfolio",
          "Freelancing as a Video Editor",
          "Final Project: Complete Video Production",
        ]}
        coursePrice="250,000"
        courseDuration="2 months"
        classType="Physical"
      />
    </Box>
  );
}

export default VideoEditing;
