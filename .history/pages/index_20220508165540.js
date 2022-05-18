import Link from 'next/link';
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({aka}) => (
  <Flex flexWrap="warp" justifyContent="center" alignItems="center" m="10">
    {aka}
  </Flex>
)

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Banner aka={'For Sale'} />
      <Banner aka={'For Rent'} />
    </div>
  )
}
