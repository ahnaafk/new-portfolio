import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Button,
  Text,
  List,
  Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoBehance,
  IoLogoMedium,
  IoLogoLinkedin
} from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'
import ThumbNeuradao from '../public/images/contents/thumb-neuradao.png'

const Page = () => {
  return (
    <Layout>
      <Container maxW={'60%'}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={2}
          mb={6}
          align="center"
        >
          Hey! I&apos;m currently exploring new domains in climate tech. <br />
          If you&apos;re down to talk climate, hit this{' '}
          <Link href="https://calendly.com/ahnaafk/" target="_blank">
            link
          </Link>{' '}
          or send me an{' '}
          <Link href="mailto:ahnaafk@gmail.com" target="_blank">
            email!
          </Link>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ahnaaf Khan
            </Heading>
            <p>Mechatronics Engineering Student & Climate-tech Developer</p>
          </Box>
          <Box
            flexShrink={8}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/headshot.png"
              alt="profile pic"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Profesionally.
          </Heading>
          <Text text-align="centered">
            I&apos;m a mechatronics engineering student exploring solutions to
            the climate problem.
            <br />
            <br />
            Currently, I&apos;m doing my undergraduate @ Queen&apos;s University
            studying Mechatronics Engineering while exploring/writing about
            different avenues in carbon capture & profitability.
            <br />
            <br />
            <Text as={'b'}>Stack:</Text> Python, C/C++, JavaScript, React,
            Arduino, SolidWorks, LTSpice, Figma
          </Text>
          <br />
          <Text as="u" mt={'1rem'}>
            <Text as="b">Past experiences:</Text>
          </Text>
          <UnorderedList mt={'1rem'}>
            <ListItem>Teaching Assistant @ Queen&apos;s University</ListItem>
            <ListItem>Co-Founder @ NeuraDAO</ListItem>
            <ListItem>R&D Intern @ Muse</ListItem>
            <ListItem>Spoke @ Collision, ETHAmsterdam</ListItem>
            <ListItem>Alumni @ TKS Activate</ListItem>
          </UnorderedList>
          <NextLink href={'/portfolio'}>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="blue"
              my={'1.5%'}
            >
              Check out my Portfolio
            </Button>
          </NextLink>
          <Section delay={0.2}>
            <Heading as={'h3'} variant="sub-section-title">
              Personally!
            </Heading>

            <Text text-align="centered" mt={4}>
              I spend a lot of my free time listening to music, training in Muay
              Thai, baking/cooking, taking photos, seeing friends, and reading.{' '}
              <br />
              <br />
              In the past 6 months, I started my 2nd year at
              university, wrote an end of year letter, and
              started selling cheesecakes.<br />
            </Text>
          </Section>
        </Section>
        {/* <Section>
          <Heading as="h3" variant="section-title">
            On My Desk.
          </Heading>
          <SimpleGrid columns={[1, 2, 1]} gap={6} mt={2}>
            <GridItem
              href="https://neuradao.to"
              title="NeuraDAO"
              thumbnail={ThumbNeuradao}
            >
              First time founder @ NeuraDAO. We&apos;re building the future of
              neurotech research.
            </GridItem>
          </SimpleGrid>
          <Box align="center" my={5}>
            <NextLink href={'/portfolio'}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                Check out my Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section> */}

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Connect w/ me.
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ahnaaf-khan/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Ahnaaf Khan
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:ahnaafk@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={SiGmail} />}
                >
                  ahnaafk@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/ahnaafkk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @ahnaafkk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/ahnaafk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @ahnaafk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://ahnaafk.medium.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoMedium} />}
                >
                  @ahnaafk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.behance.net/ahnaafkhan" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoBehance} />}
                >
                  Ahnaaf Khan
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
