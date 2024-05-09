//Author: Mohammed Noor ul Hasan Kothaliya

import React from 'react'
import { Box, Typography, Avatar, useMediaQuery, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import test1 from "assets/images/test1.jpg";
import test2 from "assets/images/test2.jpg";
import test3 from "assets/images/test3.jpg";
import test4 from "assets/images/test4.jpg";
import test5 from "assets/images/test5.jpg";
import test6 from "assets/images/test6.jpg";
import test7 from "assets/images/test7.jpg";
import test8 from "assets/images/test8.jpg";

const testimonials = [
  {
    name: "Jonathan Carter",
    image: test1,
    testimonial: "The networking opportunities Dal Portfolio provided were a game-changer for my career. Connecting with Dalhousie alumni led me to my current job in software development. I'm incredibly grateful for this community!",
    date: "June 12, 2023",
  },
  {
    name: "Michael Thompson",
    image: test2,
    testimonial: "Creating my professional portfolio on Dal Portfolio was straightforward and impactful. It helped me stand out and showcase my projects in a visually appealing way, catching the eye of my current employer.",
    date: "August 5, 2023",
  },
  {
    name: "Elizabeth Morgan",
    image: test3,
    testimonial: "The pre-defined templates for portfolios made it so easy to start and customize my page. It was exactly what I needed as a recent graduate to highlight my academic, project, research and internship work in the industry.",
    date: "June 12, 2023",
  },
  {
    name: "David Anderson",
    image: test4,
    testimonial: "Dal Portfolio's discussion forums are an invaluable resource. I received advice and feedback on my work that significantly improved my portfolio and presentation skills.",
    date: "August 5, 2023",
  },
  {
    name: "Hardeep Singh",
    image: test5,
    testimonial: "The collaboration feature on Dal Portfolio introduced me to my startup co-founder. It's incredible how the platform fosters connections that can lead to such significant career milestones.",
    date: "June 12, 2023",
  },
  {
    name: "Amir Fayed",
    image: test6,
    testimonial: "I was able to secure freelance projects thanks to the visibility my Dal Portfolio gave me. It's amazing how the platform supports not just traditional employment but also gig and freelance work.",
    date: "August 5, 2023",
  },
  {
    name: "Priyanka Sharma",
    image: test7,
    testimonial: "The custom template feature allowed me to design a portfolio that truly represents me and my work. It was pivotal in helping me land a competitive internship in UX design. I would recommend Dal Portfolio to stand out in the job market.",
    date: "August 5, 2023",
  },
  {
    name: "Christopher Brooks",
    image: test8,
    testimonial: "Dal Portfolio is more than just a platform; it's a community. The support and opportunities I've received through this network have been instrumental in advancing my career in environmental science.",
    date: "August 5, 2023",
  },

];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const chunkSize = isMobile ? 1 : 3;


  const chunkTestimonials = (testimonials: any, size: any) => {
    return testimonials.reduce((chunks: any, item: any, index: any) => {
      const chunkIndex = Math.floor(index / size);
      if(!chunks[chunkIndex]) {
        chunks[chunkIndex] = []; 
      }
      chunks[chunkIndex].push(item);
      return chunks;
    }, []);
  };

  const testimonialChunks = chunkTestimonials(testimonials, chunkSize);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, mt: "25px", mb: "100px" }} id="testimonials">
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, mt: { xs: 4, md: 6 } }}>
        What Our Alumni Say
      </Typography>

    <Carousel
      autoPlay
      interval={2200}
      animation="fade"
      indicators={true}
      navButtonsAlwaysVisible={!isMobile}
      navButtonsAlwaysInvisible={isMobile}
    >
      {testimonialChunks.map((chunk: any, i: any) => (
        <Box key={i} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start', 
          p: 3,
          flexWrap: 'wrap',
          gap: 2, 
        }}>
          {chunk.map((testimonial: any, index: any) => (
            <Box key={index} sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2,
              border: '2px solid #ffd400', 
              borderRadius: '8px',
              maxWidth: 345, 
              minWidth: { xs: '80%', sm: 260 }, 
              height: '100%', 
              boxSizing: 'border-box', 
            }}>
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 120, height: 120, mb: 2 }}
              />
              <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>
                "{testimonial.testimonial}"
              </Typography>
              <Typography variant="caption">
                {testimonial.date}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Carousel>
    </Box>
  );
};

export default Testimonials;