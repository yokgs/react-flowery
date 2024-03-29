import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'

function Header() {
    
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Box as="section" pb={{ base: '12', md: '24' }}>
            <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
                <Container py={{ base: '4', lg: '5' }}>
                    <HStack spacing="10" justify="space-between">
                        <div>Hind twarrik</div>
                        {isDesktop ? (
                            <Flex justify="space-between" flex="1">
                                <ButtonGroup variant="link" spacing="8">
                                    {['Villes', 'Pharmacies', 'Gardes', 'About'].map((item) => (
                                        <Button key={item}>{item}</Button>
                                    ))}
                                </ButtonGroup>
                                <HStack spacing="5">
                                    <Button variant="ghost">Ajouter votre pharmacie</Button>
                                </HStack>
                            </Flex>
                        ) : (
                            <IconButton
                                variant="ghost"
                                icon={<FiMenu fontSize="1.25rem" />}
                                aria-label="Open Menu"
                            />
                        )}
                    </HStack>
                </Container>
            </Box>
        </Box>
    )
}

export default Header;