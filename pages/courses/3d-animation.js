import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function ThreeDAnimation() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        title="3D Animation Course in Ojo, Lagos | Florintech Computer College"
        description="Learn 3D animation and 3D modeling in Ojo, Lagos. Master Blender, character rigging, and visual effects. Professional 3D animation training."
        canonical="https://www.florintechcomputercollege.com/courses/3d-animation/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/3d-animation/",
          title: "3D Animation and Modeling Course | Florintech Computer College",
          description: "Learn 3D animation, 3D modeling, and visual effects at Florintech Computer College in Lagos",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/3danimation.jpg",
              width: 800,
              height: 600,
              alt: "3D Animation and 3D Modeling Course",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="3D Animation & Modeling"
        courseImage={courseImages.threedanimation}
        aboutCourseText="3D animation is transforming entertainment, advertising, and design globally. From animated movies to architectural visualizations, game assets to product demonstrations, 3D animators command premium salaries and unlimited freelance opportunities. Our comprehensive 3D animation course teaches you to create stunning three-dimensional worlds and characters using industry-standard tools.

Starting with 3D modeling fundamentals in Blender, you'll learn to sculpt characters, create environments, and build complex scenes. Then move into rigging—the technical process of giving models a digital skeleton so they can move. Finally, master animation principles applied to 3D, from simple object movement to complex character animation. You'll learn rendering techniques to bring your scenes to photorealistic life.

Throughout the course, you'll complete projects that go into your professional portfolio. By the end, you'll create a full 3D animated sequence—from concept to final render. Studios, game developers, and advertising agencies across Africa are hiring skilled 3D animators."
        courseOutline={[
          "Introduction to 3D Graphics and Animation",
          "3D Space and Coordinates",
          "Introduction to Blender",
          "Blender Interface and Navigation",
          "Basic Modeling Techniques",
          "Hard Surface Modeling",
          "Organic Modeling",
          "Sculpting in Blender",
          "UV Unwrapping",
          "Texturing Fundamentals",
          "PBR Texturing",
          "Material Creation and Shaders",
          "Lighting Basics",
          "Advanced Lighting Techniques",
          "Introduction to Rigging",
          "Bone Structure and Armatures",
          "Weight Painting",
          "Character Rigging Advanced",
          "Animation Principles in 3D",
          "Keyframe Animation",
          "Motion Capture and NLA",
          "IK/FK (Inverse and Forward Kinematics)",
          "Facial Animation and Blend Shapes",
          "Rendering and Cycles Engine",
          "Camera and Composition",
          "Post-Production and Compositing",
          "VFX (Particles and Simulations)",
          "Final Project: Complete 3D Animation Sequence",
        ]}
        coursePrice="500,000"
        courseDuration="3 months"
        classType="Physical"
      />
    </Box>
  );
}

export default ThreeDAnimation;
