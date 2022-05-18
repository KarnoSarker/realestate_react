
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/layout';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ({property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerifieID, externalID, description, type, purpose, furnishingStatus, amenities, photos }}) => (
    <Link href={`/property/${externalID}`} passHref>
        {title}
    </Link>
)