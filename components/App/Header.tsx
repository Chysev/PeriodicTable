import { BiSun } from '@react-icons/all-files/bi/BiSun'
import { BiMoon } from '@react-icons/all-files/bi/BiMoon'
import { Flex, Header, Text, useMantineColorScheme, ActionIcon } from "@mantine/core"

const HeaderPB = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <Header mih={80} height={80} bg={dark ? '#25262b' : 'whitesmoke'} px="20px">
            <Flex m="auto" maw="1280px" h={80} align="center" justify="space-between">
                <Text style={{ fontFamily: "'Righteous', cursive", }} size={28}>
                    Periodic Table
                </Text>


                <ActionIcon

                    variant="outline"
                    color={dark ? 'yellow' : 'blue'}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <BiSun size="1.1rem" /> : <BiMoon size="1.1rem" />}
                </ActionIcon>
            </Flex>
        </Header>
    )
}

export default HeaderPB