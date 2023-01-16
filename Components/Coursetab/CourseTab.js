import { Card,Box, Text,Flex} from '@chakra-ui/react'
import Link from 'next/link'
import Image from "next/image";




const CourseTab = ({ courseTitle,courseText,to,price,courseImage }) => {



  return (
<Box className='course-card'>
  <Link href={to}>
  <a>
<Box className='image-wrapper'>
<Image className='course-image' src={courseImage}
      alt="Picture of the author"
      width={500}
      height={400} />


</Box>
<Box className='course-main-content'>
<Box><h2 className='coursetitle'>{courseTitle}</h2></Box>
<Box><h2 className='coursetext'>{courseText}</h2></Box>
<Box className="divider">
  <Box className='divider-content'></Box>
</Box>
<Flex justifyContent="space-between">
<Box><h3 className='learnmore'>Learn more</h3></Box>
<Box><h3 className='courseprice'>NGN{price}</h3></Box>

</Flex>
</Box>

  </a>
  </Link>
    </Box>
  )
}

export default CourseTab